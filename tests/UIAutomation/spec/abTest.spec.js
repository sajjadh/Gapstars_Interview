// @ts-check
const { test, expect } = require('@playwright/test');
const { abTestingPage } = require('../pageObjects/abTestingPage');
const { homePage } = require('../pageObjects/homePage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test.afterAll(async ({page}) => {
  // await browser.close();
});

test.describe('Verify navigating to ', () => {
  test.only('Verify navigating to AB testing page', async ({ page }) => {
    const homepage = new homePage(page);
    const abtestingpage = new abTestingPage(page);

    // Create 1st todo.
    await homepage.goToABTestingPage();
    await abtestingpage.verifyABTestingPage(page);
    await page.screenshot({ path: 'tests/Screenshots/screenshotABTesting.png' });
  });
});

