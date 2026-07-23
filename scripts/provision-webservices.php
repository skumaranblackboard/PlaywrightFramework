<?php
/**
 * Provision Moodle web services for the Playwright framework.
 *
 * Idempotent CLI script, run INSIDE the Moodle container:
 *   docker compose exec moodle php /scripts/provision-webservices.php
 *
 * It:
 *   1. Enables web services and the REST protocol.
 *   2. Creates (or reuses) an external service with shortname "automation"
 *      exposing exactly the functions the framework calls.
 *   3. Prints a permanent admin token for that service (also usable directly).
 *
 * Data setup in the tests uses /login/token.php with MOODLE_SERVICE=automation,
 * so once this service exists the dynamic token fetch just works.
 */

define('CLI_SCRIPT', true);

// Moodle code root inside the container; override with MOODLE_DIR if it differs.
$moodledir = getenv('MOODLE_DIR') ?: '/var/www/html';
require($moodledir . '/config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->libdir . '/externallib.php');

global $DB;

$SHORTNAME = 'automation';
$FUNCTIONS = [
    'core_webservice_get_site_info',
    'core_user_create_users',
    'core_user_delete_users',
    'core_course_create_courses',
    'core_course_delete_courses',
    'enrol_manual_enrol_users',
];

// 0. Enable the "My courses" page (/my/courses.php); off by default on this build.
set_config('enablemycourses', 1);

// Disable user tours: their flexitour backdrop overlays intercept clicks and
// break UI automation for freshly created users.
if ($DB->get_manager()->table_exists('tool_usertours_tours')) {
    $DB->set_field('tool_usertours_tours', 'enabled', 0, []);
    echo "user tours disabled\n";
}

// Never send real email. Test users have fake addresses, and enrolment would
// otherwise fail with "Message was not sent" when mail delivery errors.
set_config('noemailever', 1);

// 1. Enable web services + REST protocol.
set_config('enablewebservices', 1);
$protocols = get_config('core', 'webserviceprotocols');
$enabled = $protocols ? explode(',', $protocols) : [];
if (!in_array('rest', $enabled, true)) {
    $enabled[] = 'rest';
    set_config('webserviceprotocols', implode(',', array_filter($enabled)));
}
echo "web services enabled, protocols: " . get_config('core', 'webserviceprotocols') . "\n";

// 2. Create or reuse the external service.
$service = $DB->get_record('external_services', ['shortname' => $SHORTNAME]);
if (!$service) {
    $service = (object) [
        'name'            => 'Automation Service',
        'shortname'       => $SHORTNAME,
        'enabled'         => 1,
        'requiredcapability' => '',
        'restrictedusers' => 0,
        'downloadfiles'   => 1,
        'uploadfiles'     => 1,
        'timecreated'     => time(),
        'timemodified'    => time(),
    ];
    $service->id = $DB->insert_record('external_services', $service);
    echo "created service '{$SHORTNAME}' (id {$service->id})\n";
} else {
    $DB->set_field('external_services', 'enabled', 1, ['id' => $service->id]);
    echo "reusing service '{$SHORTNAME}' (id {$service->id})\n";
}

// 3. Attach the required functions (idempotent).
foreach ($FUNCTIONS as $fn) {
    $exists = $DB->record_exists('external_services_functions', [
        'externalserviceid' => $service->id,
        'functionname'      => $fn,
    ]);
    if (!$exists) {
        $DB->insert_record('external_services_functions', (object) [
            'externalserviceid' => $service->id,
            'functionname'      => $fn,
        ]);
        echo "  + {$fn}\n";
    }
}

// 4. Ensure a permanent admin token exists for the service, and print it.
$admin = get_admin();
$context = context_system::instance();
$existing = $DB->get_record('external_tokens', [
    'userid'            => $admin->id,
    'externalserviceid' => $service->id,
    'tokentype'         => EXTERNAL_TOKEN_PERMANENT,
]);
if ($existing) {
    $token = $existing->token;
} else {
    $token = external_generate_token(
        EXTERNAL_TOKEN_PERMANENT,
        $service->id,
        $admin->id,
        $context
    );
}

echo "MOODLE_SERVICE=$SHORTNAME\n";
echo "MOODLE_TOKEN=$token\n";
echo "provisioning complete.\n";
