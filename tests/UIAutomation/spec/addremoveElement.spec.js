// @ts-check
const { test, expect } = require('@playwright/test');
const { abTestingPage } = require('../pageObjects/abTestingPage');
const { homePage } = require('../pageObjects/homePage');
const { addremoveElementPage } = require('../pageObjects/addremoveElementPage');

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
});

test.describe('Verify navigating to ', () => {
  test.only('Verify navigating to add/remove element page', async ({ page }) => {
    // create a new todo locator
    const homepage = new homePage(page);
    const addremoveelementpage = new addremoveElementPage(page);

    // Create 1st todo.
    await homepage.goToLinkAddRemovePage();
    await addremoveelementpage.clickAddElement();
    await addremoveelementpage.verifyAddedElement(page);
    await addremoveelementpage.clickManuuallyAddedElement();
    await addremoveelementpage.verifyRemovedElement(page);
    await page.screenshot({ path: 'tests/Screenshots/screenshotAddRemoveElement.png' });
  });
});

