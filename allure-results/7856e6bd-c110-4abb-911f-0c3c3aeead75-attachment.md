# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Orange HRMS Login >> Open Dashboard
- Location: src/tests/LoginPage.spec.ts:15:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Admin') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Admin</span> aka getByRole('link', { name: 'Admin' })
    2) <p data-v-bdd6d943="" class="oxd-userdropdown-name">AdminAuto User</p> aka getByText('AdminAuto User')

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
      - generic [ref=e148]:
        - generic [ref=e150]:
          - generic [ref=e151]: 
          - paragraph [ref=e152]: My Actions
        - separator [ref=e153]
        - generic [ref=e155]:
          - img "No Content"
          - paragraph [ref=e156]: No Pending Actions to Perform
      - generic [ref=e158]:
        - generic [ref=e160]:
          - generic [ref=e161]: 
          - paragraph [ref=e162]: Quick Launch
        - separator [ref=e163]
      - generic [ref=e167]:
        - generic [ref=e169]:
          - generic [ref=e170]: 
          - paragraph [ref=e171]: Buzz Latest Posts
        - separator [ref=e172]
      - generic [ref=e176]:
        - generic [ref=e177]:
          - paragraph [ref=e182]: Employees on Leave Today
          - generic [ref=e183] [cursor=pointer]: 
        - separator [ref=e184]
      - generic [ref=e188]:
        - generic [ref=e190]:
          - generic [ref=e191]: 
          - paragraph [ref=e192]: Employee Distribution by Sub Unit
        - separator [ref=e193]
      - generic [ref=e197]:
        - generic [ref=e199]:
          - generic [ref=e200]: 
          - paragraph [ref=e201]: Employee Distribution by Location
        - separator [ref=e202]
    - generic [ref=e205]:
      - paragraph [ref=e206]: OrangeHRM OS 5.8
      - paragraph [ref=e207]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e208] [cursor=pointer]:
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
> 16 |         await this.adminPanel.click();
     |                               ^ Error: locator.click: Error: strict mode violation: getByText('Admin') resolved to 2 elements:
  17 |     }
  18 | 
  19 |     async openDashboardPanel(){
  20 |         await this.dashboardPanel.click();
  21 |     }
  22 | 
  23 | 
  24 | 
  25 | 
  26 | }
```