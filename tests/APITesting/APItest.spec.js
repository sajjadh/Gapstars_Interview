// @ts-check
const { test, expect } = require('@playwright/test');
import env from 'dotenv';
import path from 'path';


test.describe('API Testing', ()=> {
  const baseURL = process.env.MY_VARIABLE;

  test('API_TC01 - Verify get user api', async ({request}) =>{
    const response = await request.get('http://localhost:3000/candidates');
    expect(response.status()).toBe(200);
  });

  test('API_TC02 - Verify create new user api', async ({request, browser}) =>{
    const username = 'tester';
    const password = 'iloveqa';
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
    
    const context = await browser.newContext({
      httpCredentials:{
        username:"tester",
        password:"iloveqa"
      }
    })
    const page = await context.newPage();
    const response = await request.post('http://localhost:3000/candidates', {
      data: { 
        "firstName": "Mohamed", 
        "lastName": "Sajadh", 
        "matchingScore": 1, 
        "vacancyTitle":  "QA"
      }
    })
    

    const respBody = JSON.parse(await response.text());
    console.log(respBody);

    expect(response.status()).toBe(200);
    expect(respBody.createdAt).toBeTruthy();
  });


  //valdiates get user by id valid scenario
  test.only('API_TC03 - Verify get user by id', async ({request}) =>{
    //get user by id for a valid user id
    const candidateID = "gcfoc489d";
    const response = await request.get(`${baseURL}/candidates/${candidateID}`);
    const responseBody = await response.text();
    console.log(responseBody);

    //assert the response status code and the response data
    expect(response.status()).toBe(200);
    expect(responseBody).toContain('Sarah');
});

  //valdiates get user by id not found scenario
  test('API_TC04 - Verify get user by id for an invalid user id', async ({request}) =>{
    //get user by id for an invalid user id
    const candidateID = 444445
    const response = await request.get(`${baseURL}/candidates/${candidateID}`);
    const responseBody = await response.text();
    console.log(responseBody);

    //assert the response status code
    expect(response.status()).toBe(404);
  });


})