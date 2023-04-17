// @ts-check
const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage');
const { formAuthenticationPage } = require('../pageObjects/formAuthenticationPage');
// const { chromium } = require('playwright');

// const browserSetup = async () =>{
//   const{ browser, page } = await openBrowser()
// }


test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test.describe('Verify navigating to ', () => {

  //note - the following feature has a bug: where at certain time the appearing.elements do not appear/disappear.
  test.only('Verify navigating, login & logout from form authentication page', async ({ page }) => {
    // create a new todo locator
    const homepage = new homePage(page);
    const formauthenticationpage = new formAuthenticationPage(page);

    await homepage.goTolinkFormAuthenticationPage();
    await formauthenticationpage.verifyFormAuthenticationpage(page);
    await formauthenticationpage.enterUserName();
    await formauthenticationpage.enterPassword();
    await formauthenticationpage.clickLoginButton();
    await formauthenticationpage.verifySuccessfulLogin(page);
    await formauthenticationpage.clickLogoutButton();
    await formauthenticationpage.verifyFormAuthenticationpage(page);
    await page.screenshot({ path: 'tests/Screenshots/screenshotformAuthentication.png' });
  });
});

