// @ts-check
const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage');
const { keyPressPage } = require('../pageObjects/keyPressPage');
// const { chromium } = require('playwright');

// const browserSetup = async () =>{
//   const{ browser, page } = await openBrowser()
// }


test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test.describe('Verify navigating to ', () => {

  //note - the following feature has a bug: where at certain time the appearing.elements do not appear/disappear.
  test.only('Verify navigating, and function of keypress page', async ({ page }) => {
    // create a new todo locator
    const homepage = new homePage(page);
    const keypresspage = new keyPressPage(page);
    const keyInput = "a";
    await homepage.goTolinkKeyPressesPage();
    await keypresspage.verifyKeyPressPage(page);
    await keypresspage.inputKeyPress(keyInput);
    await keypresspage.verifyKeyPressValueDisplayedCorrectly(page, keyInput);
    await page.screenshot({ path: 'tests/Screenshots/screenshotKeyPress.png' });
  });
});

