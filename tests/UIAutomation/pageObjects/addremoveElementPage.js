const {test, expect} = require('@playwright/test');

exports.addremoveElementPage = class addremoveElementPage{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.btnAddElement = page.locator('//button[text()="Add Element"]');
    this.btnManuallyAdded = page.locator('//button[@class="added-manually"]');
  };


  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<
  async clickAddElement(){
    await this.btnAddElement.click();
  };

  async clickManuuallyAddedElement(){
    await 
    await this.btnManuallyAdded.click();
  } ;

  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<
  async verifyAddedElement(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/add_remove_elements/";

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the added element
    await expect(this.btnManuallyAdded).toBeVisible()
  };

  async verifyRemovedElement(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/add_remove_elements/";

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the added element
    await expect(this.btnManuallyAdded).not.toBeVisible();
  };
};