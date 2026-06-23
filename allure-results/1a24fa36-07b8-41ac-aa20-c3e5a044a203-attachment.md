# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Orange HRMS Login >> Open Dashboard
- Location: src/tests/LoginPage.spec.ts:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-input-group').filter({ hasText: 'User Role' })

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
          - heading "Admin" [level=6] [ref=e114]
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
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: "-- Select --"
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - textbox "Type for hints..." [ref=e180]
          - generic [ref=e182]:
            - generic [ref=e184]: Status*
            - generic [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: "-- Select --"
              - generic [ref=e190]: 
          - generic [ref=e192]:
            - generic [ref=e194]: Username*
            - textbox [ref=e196]
        - generic [ref=e198]:
          - generic [ref=e199]:
            - generic [ref=e200]:
              - generic [ref=e202]: Password*
              - textbox [ref=e204]
            - paragraph [ref=e205]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e207]:
            - generic [ref=e209]: Confirm Password*
            - textbox [ref=e211]
        - separator [ref=e212]
        - generic [ref=e213]:
          - paragraph [ref=e214]: "* Required"
          - button "Cancel" [ref=e215] [cursor=pointer]
          - button "Save" [ref=e216] [cursor=pointer]
    - generic [ref=e217]:
      - paragraph [ref=e218]: OrangeHRM OS 5.8
      - paragraph [ref=e219]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e220] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminPanel{
  4  | 
  5  |     private readonly addNewUser: Locator;
  6  |     private readonly userRole: Locator;
  7  |     private readonly employeeName: Locator;
  8  |     private readonly userStatus: Locator;
  9  |     private readonly userName: Locator;
  10 |     private readonly password: Locator;
  11 |     private readonly confirmPassword: Locator;
  12 | 
  13 | 
  14 |     constructor(private page: Page){
  15 |         this.addNewUser = page.getByRole('button', {name: 'Add'});
  16 |         this.userRole = page.locator('.oxd-input-group').filter({hasText: 'User Role'});
  17 |         this.employeeName = page.getByPlaceholder('Type for hints...');
  18 |         this.userStatus = page.locator('.oxd-input-group').filter({hasText: 'Status'});
  19 |         this.userName = page.getByRole('textbox').filter({hasText: 'Username'});
  20 |         this.password = page.locator('oxd-input').filter({hasText: 'Password'});
  21 |         this.confirmPassword = page.locator('oxd-input').filter({hasText: 'Confirm Password'});
  22 |     }
  23 | 
  24 |     async clickAddUser(){
  25 |         await this.addNewUser.click();
  26 |     }
  27 | 
  28 |     async selectUserRole( UserRole: string){
> 29 |         await this.userRole.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 |         await this.page.getByText(UserRole, {exact: true}).click();
  31 |     } 
  32 | 
  33 |     async enterEmployeeName(EmployeeName: string){
  34 |         await this.employeeName.fill(EmployeeName);
  35 |     }
  36 | 
  37 |     async selectUserStatus(UserStatus: string){
  38 |         await this.userStatus.click();
  39 |         await this.page.getByText(UserStatus, {exact: true}).click();
  40 |     }
  41 | 
  42 |     async enterUserName(UserName: string){
  43 |         await this.userName.fill(UserName)
  44 |     }
  45 | 
  46 |     async enterPassword(Password: string){
  47 |         await this.password.fill(Password);
  48 |     }
  49 | 
  50 |     async enterConfirmPassword(ConfirmPassword: string){
  51 |         await this.confirmPassword.fill(ConfirmPassword);
  52 |     }
  53 | 
  54 |     
  55 | 
  56 | 
  57 | }
```