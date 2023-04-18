##The following repo contains the server which was given as part of the question, as well as the answer, (i have also added some API testing scripts). The document related to API bugs and the Tested Postman script collection was sent with the email. 

Pre-Requisites. 
1. There will be certain node version conflicts when working with the given server and the Playwright framework (Require version =>14.) node version. I recommend using NVM or first installing the Server artifacts, removing the node package, and then installing the playwright-recommended version (version => 14). 

2. Run the following command.
    `npm install`
3. The above code should ideally install all the dependencies to run the test. If any error occurs run `npx playwright install`
4. To run all the test cases at once `npx playwright test`
5. To run specific file `npx playwright test tests/UIAutomation/spec/abtest.spec.js`
6. To view the reporter after execution `npx playwright show-report`
7. To run the test cases in headless mode, remove the `headless` command in playwright.config file in the respective browser config. 


NOTE:
 Code Structure contains 2 sections: 

    A. API testing: Have added a few API scripts using the playwright framework

    B. UI Automation: Contains 3 folders ( PageObjects, Spec, Common )
    
 HTML/ Allure/ dot/ line reporter.
 
 Configured cross-browser testing with Chromium, firefox, and Chrome. To enable other available browsers, please uncomment the required browser in Playwright.config file
 
 Parallel execution and the number of workers are set to default values. 
 
 Used POM, Parameterization, .env file, and other techniques. 
 
 Currently, the's a bug in the disappearing elements page, hence the test case is expected to fail unless the issue is fixed. 
 
 
 ![image](https://user-images.githubusercontent.com/31664351/232641935-d7435dbb-cae8-4786-8dcc-40f5f70e06df.png)



                                        
