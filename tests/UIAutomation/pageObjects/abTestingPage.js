const {test, expect} = require('@playwright/test');

exports.abTestingPage = class abTestingPage{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.divABTestingHeader = page.locator('//h3');

  };

  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<
  
  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<
  async verifyABTestingPage(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/abtest"

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the page elements
    await expect(this.divABTestingHeader).toContainText("A/B Test");
  };
};