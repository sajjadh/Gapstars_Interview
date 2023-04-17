const {test, expect} = require('@playwright/test');

exports.disappearingElements = class disappearingElements{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.navGallery = page.locator('//a[text()="Gallery"]');

  };


  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<


  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<
  async verifyDisappearingElement(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/disappearing_elements"

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the page elements
    await expect(this.navGallery).not.toBeVisible();
  };

  async verifyAppearingElement(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/disappearing_elements"

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the page elements
    await expect(this.navGallery).toBeVisible();
  };
};