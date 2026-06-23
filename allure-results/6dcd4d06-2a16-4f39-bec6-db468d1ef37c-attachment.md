# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Orange HRMS Login >> Open Dashboard
- Location: src/tests/LoginPage.spec.ts:15:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Admin') resolved to 6 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Admin</span> aka getByRole('link', { name: 'Admin' })
    2) <p data-v-bdd6d943="" class="oxd-userdropdown-name">AdminAuto User</p> aka getByText('AdminAuto User')
    3) <p data-v-7b563373="" data-v-f8f18dc0="" class="oxd-text oxd-text--p orangehrm-buzz-widget-header-emp">AdminAuto QA User</p> aka getByText('AdminAuto QA User').first()
    4) <p data-v-7b563373="" data-v-f8f18dc0="" class="oxd-text oxd-text--p orangehrm-buzz-widget-header-emp">AdminAuto QA User</p> aka getByText('AdminAuto QA User').nth(1)
    5) <p data-v-7b563373="" data-v-f8f18dc0="" class="oxd-text oxd-text--p orangehrm-buzz-widget-header-emp">AdminAuto QA User</p> aka getByText('AdminAuto QA User').nth(2)
    6) <span data-v-7b563373="" data-v-28866788="" title="Administration" class="oxd-text oxd-text--span">Administration</span> aka getByText('Administration')

Call log:
  - waiting for getByText('Admin')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: AdminAuto User
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched In
              - paragraph [ref=e152]: "Punched In: Today at 02:01 PM (GMT 5.5)"
          - generic [ref=e153]:
            - generic [ref=e154]: 0h 19m Today
            - button "" [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Jun 15 - Jun 21
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 0h 0m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - button [ref=e177] [cursor=pointer]
            - paragraph [ref=e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e184]:
            - button [ref=e185] [cursor=pointer]
            - paragraph [ref=e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e196]:
        - generic [ref=e198]:
          - generic [ref=e199]: 
          - paragraph [ref=e200]: Quick Launch
        - separator [ref=e201]
        - generic [ref=e203]:
          - generic [ref=e204]:
            - button "Assign Leave" [ref=e205] [cursor=pointer]
            - generic "Assign Leave" [ref=e208]:
              - paragraph [ref=e209]: Assign Leave
          - generic [ref=e210]:
            - button "Leave List" [ref=e211] [cursor=pointer]
            - generic "Leave List" [ref=e218]:
              - paragraph [ref=e219]: Leave List
          - generic [ref=e220]:
            - button "Timesheets" [ref=e221] [cursor=pointer]
            - generic "Timesheets" [ref=e227]:
              - paragraph [ref=e228]: Timesheets
          - generic [ref=e229]:
            - button "Apply Leave" [ref=e230] [cursor=pointer]
            - generic "Apply Leave" [ref=e233]:
              - paragraph [ref=e234]: Apply Leave
          - generic [ref=e235]:
            - button "My Leave" [ref=e236] [cursor=pointer]
            - generic "My Leave" [ref=e241]:
              - paragraph [ref=e242]: My Leave
          - generic [ref=e243]:
            - button "My Timesheet" [ref=e244] [cursor=pointer]
            - generic "My Timesheet" [ref=e247]:
              - paragraph [ref=e248]: My Timesheet
      - generic [ref=e250]:
        - generic [ref=e252]:
          - generic [ref=e253]: 
          - paragraph [ref=e254]: Buzz Latest Posts
        - separator [ref=e255]
        - generic [ref=e257]:
          - generic [ref=e258]:
            - generic [ref=e259] [cursor=pointer]:
              - img "profile picture" [ref=e261]
              - generic [ref=e262]:
                - paragraph [ref=e263]: AdminAuto QA User
                - paragraph [ref=e264]: 2026-16-06 01:33 PM
            - separator [ref=e265]
            - paragraph [ref=e266]: Verify that a user can successfully create a post containing both text and an uploaded image.
            - img [ref=e267]
          - generic [ref=e268]:
            - generic [ref=e269] [cursor=pointer]:
              - img "profile picture" [ref=e271]
              - generic [ref=e272]:
                - paragraph [ref=e273]: AdminAuto QA User
                - paragraph [ref=e274]: 2026-16-06 01:31 PM
            - separator [ref=e275]
            - paragraph [ref=e276]: Verify that a user can successfully create a post containing both text and an uploaded image.
            - img [ref=e277]
          - generic [ref=e278]:
            - generic [ref=e279] [cursor=pointer]:
              - img "profile picture" [ref=e281]
              - generic [ref=e282]:
                - paragraph [ref=e283]: AdminAuto QA User
                - paragraph [ref=e284]: 2020-08-10 09:08 AM
            - separator [ref=e285]
            - paragraph [ref=e286]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=e287]:
            - generic [ref=e288] [cursor=pointer]:
              - img "profile picture" [ref=e290]
              - generic [ref=e291]:
                - paragraph [ref=e292]: Sania Shaheen
                - paragraph [ref=e293]: 2020-08-10 09:08 AM
            - separator [ref=e294]
            - paragraph [ref=e295]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=e296]:
            - generic [ref=e297] [cursor=pointer]:
              - img "profile picture" [ref=e299]
              - generic [ref=e300]:
                - paragraph [ref=e301]: Rebecca Harmony
                - paragraph [ref=e302]: 2020-08-10 09:04 AM
            - separator [ref=e303]
            - paragraph [ref=e304]: Throwback Thursdays!!
            - img [ref=e305]
      - generic [ref=e307]:
        - generic [ref=e308]:
          - paragraph [ref=e313]: Employees on Leave Today
          - generic [ref=e314] [cursor=pointer]: 
        - separator [ref=e315]
        - generic [ref=e316]:
          - generic [ref=e317]:
            - img "profile picture" [ref=e319]
            - generic [ref=e320]:
              - paragraph [ref=e321]: James Brown
              - paragraph [ref=e322]: US - Personal
            - paragraph [ref=e323]: JB2220
          - generic [ref=e324]:
            - img "profile picture" [ref=e326]
            - generic [ref=e327]:
              - paragraph [ref=e328]: James Butler
              - paragraph [ref=e329]: CAN - Vacation (09:00 - 17:00)
            - paragraph [ref=e330]: "0365"
      - generic [ref=e332]:
        - generic [ref=e334]:
          - generic [ref=e335]: 
          - paragraph [ref=e336]: Employee Distribution by Sub Unit
        - separator [ref=e337]
        - list [ref=e342]:
          - listitem [ref=e343] [cursor=pointer]:
            - generic "Engineering" [ref=e345]
          - listitem [ref=e346] [cursor=pointer]:
            - generic "Human Resources" [ref=e348]
          - listitem [ref=e349] [cursor=pointer]:
            - generic "Administration" [ref=e351]
          - listitem [ref=e352] [cursor=pointer]:
            - generic "Client Services" [ref=e354]
          - listitem [ref=e355] [cursor=pointer]:
            - generic "hola" [ref=e357]
          - listitem [ref=e358] [cursor=pointer]:
            - generic "Unassigned" [ref=e360]
      - generic [ref=e362]:
        - generic [ref=e364]:
          - generic [ref=e365]: 
          - paragraph [ref=e366]: Employee Distribution by Location
        - separator [ref=e367]
        - list [ref=e372]:
          - listitem [ref=e373] [cursor=pointer]:
            - generic "Texas R&D" [ref=e375]
          - listitem [ref=e376] [cursor=pointer]:
            - generic "New York Sales Office" [ref=e378]
          - listitem [ref=e379] [cursor=pointer]:
            - generic "HQ - CA, USA" [ref=e381]
          - listitem [ref=e382] [cursor=pointer]:
            - generic "Unassigned" [ref=e384]
    - generic [ref=e385]:
      - paragraph [ref=e386]: OrangeHRM OS 5.8
      - paragraph [ref=e387]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e388] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class HomePage{
  4  | 
  5  |     private readonly adminPanel: Locator;
  6  |     private readonly dashboardPanel: Locator;
  7  |     private readonly myInfor: Locator;
  8  |  
  9  |     constructor(private page: Page){
  10 |         this.adminPanel = page.getByText('Admin');
  11 |         this.dashboardPanel = page.getByRole('link', {name:'Dashboard'});
  12 |         
  13 |     }
  14 | 
  15 |     async openAdminPanel(){
  16 |         await this.page.waitForTimeout(5000);
> 17 |         await this.adminPanel.click();
     |                               ^ Error: locator.click: Error: strict mode violation: getByText('Admin') resolved to 6 elements:
  18 |     }
  19 | 
  20 |     async openDashboardPanel(){
  21 |         await this.dashboardPanel.click();
  22 |     }
  23 | 
  24 | 
  25 | 
  26 | 
  27 | }
```