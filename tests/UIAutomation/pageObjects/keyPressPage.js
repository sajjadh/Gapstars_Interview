const {test, expect} = require('@playwright/test');

exports.keyPressPage = class keyPressPage{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.inputKeypressFld = page.locator('//input[@id="target"]');
    this.divKeypressPageTitle = page.locator('//h3[text()="Key Presses"]');
  };

  
  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<
  async inputKeyPress(keyInput){
    await this.page.keyboard.press(keyInput);
  };


  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<
  async verifyKeyPressPage(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/key_presses"
    
    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the page elements
    await expect(this.divKeypressPageTitle).toBeVisible();   
  };

  async verifyKeyPressValueDisplayedCorrectly(page, keyInput){
    const input = keyInput.toUpperCase();
    const element = page.locator(`//p[text()="You entered: ${input}"]`);
    await expect(element).toBeVisible(); 
  };

};