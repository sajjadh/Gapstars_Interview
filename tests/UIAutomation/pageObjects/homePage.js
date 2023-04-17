const {test, expect} = require('@playwright/test');

exports.homePage = class homePage{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.linkABTesting = page.locator('//a[text()="A/B Testing"]');
    this.linkAddRemoveElement = page.locator('//a[text()="Add/Remove Elements"]');
    this.linkDesapearingElements = page.locator('//a[text()="Disappearing Elements"]');
    this.linkFormAuthentication = page.locator('//a[text()="Form Authentication"]');
    this.linkKeyPresses = page.locator('//a[text()="Key Presses"]');

  };


  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<
  async goToABTestingPage(){
    await this.linkABTesting.click();
  }

  async goToLinkAddRemovePage(){
    await this.linkAddRemoveElement.click();
  }

  async goTolinkDesapearingPage(){
    await this.linkDesapearingElements.click();
  }

  async goTolinkFormAuthenticationPage(){
    await this.linkFormAuthentication.click();
  }

  async goTolinkKeyPressesPage(){
    await this.linkKeyPresses.click();
  }

  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<

  

};