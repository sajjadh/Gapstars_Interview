const {test, expect} = require('@playwright/test');

/*
*This page contain some comman actions that can be used
* instead of certain actions defined in the page objects.
* 
*   @author = SajjadhA
*/


exports.commonMethods = class commonMethods{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.username = page.locator('//a[text()="Gallery"]');
    this.password = page.locator('//a[text()="Gallery"]');
    this.btnLogin = page.locator('//a[text()="Gallery"]');

  };


  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<

  //etner value into the field for the given fieldID
  async enterIntoGivenField(fieldid, value){
    this.field = page.locator(`//input[@id=${fieldid}]`);
    await this.field.fill(value);
  };

  //clicks on button by its name
  async clickButtonByname(btnName){
    this.button = page.locator(`//button[text()=${btnName}]`);
    await this.button.click();
  };


  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<
  async veerifyLandingpage(landingPage, page){
    const currentUrl = page.url();
    const expectedUrl = landingPage
    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
  };

  async verifyIfElementIsVisible(page, elementNode, identifer, value){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/disappearing_elements"
    const element = page.locator(`//${elementNode}[${identifer}=${value}]`);

    //verify the page elements
    await expect(this.element).toBeVisible();
  };
};