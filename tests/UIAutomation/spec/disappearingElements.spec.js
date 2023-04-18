// @ts-check
const { test, expect } = require('@playwright/test');
const { abTestingPage } = require('../pageObjects/abTestingPage');
const { homePage } = require('../pageObjects/homePage');
const { disappearingElements } = require('../pageObjects/disappearingElements');

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test.describe('Verify disapearing element ', () => {

  //note - the following feature has a bug: where at certain time the appearing.elements do not appear/disappear.
  test.only('Verify navigating to disapearing element page and validating the action', async ({ page }) => {
    // create a new todo locator
    const homepage = new homePage(page);
    const disapearingelementpage = new disappearingElements(page);

    await homepage.goTolinkDesapearingPage();
    await disapearingelementpage.verifyAppearingElement(page);
    await page.reload();
    await disapearingelementpage.verifyDisappearingElement(page)
    await page.reload();
    await disapearingelementpage.verifyAppearingElement(page);
    await page.screenshot({ path: 'tests/Screenshots/screenshotdisapearingElements.png' });
  });
});

