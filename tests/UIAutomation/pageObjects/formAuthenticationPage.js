const {test, expect} = require('@playwright/test');

exports.formAuthenticationPage = class formAuthenticationPage{
  constructor(page){
    this.page = page;
  
    //element selectors
    this.username = page.locator('//input[@id="username"]');
    this.password = page.locator('//input[@id="password"]');
    this.btnLogin = page.locator('//i[text()=" Login"]');
    this.btnLogout = page.locator('//i[text()=" Logout"]');

  };


  //>>>>>>>>>>>>>>>>>>>>>>Step methods<<<<<<<<<<<<<<<<<<<<<<<
  async enterUserName(){
    await this.username.fill(process.env.FORM_AUTHENTICATION_USERNAME);
  }

  async enterPassword(){
    await this.password.fill(process.env.FORM_AUTHENTICATION_PASSWORD);
  }

  async clickLoginButton(){
    await this.btnLogin.click();
  }

  async clickLogoutButton(){
    await this.btnLogout.click();
  }


  //>>>>>>>>>>>>>>>>>>>>>>Verification steps<<<<<<<<<<<<<<<<<<<<<<<
  async verifyFormAuthenticationpage(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/login"

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the page elements
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
  };

  async verifySuccessfulLogin(page){
    const currentUrl = page.url();
    const expectedUrl = "https://the-internet.herokuapp.com/secure"

    //verify the url
    await expect(currentUrl).toEqual(expectedUrl);
    //verify the page elements
    await expect(this.btnLogout).toBeVisible();
  };
};