import { test, expect } from '@playwright/test';
import { LoginHelper } from '../helpers/LoginHelper.ts'; 
import { parse } from 'csv-parse/sync';

//binding csv to current directory and declaring it
const fs= require('fs');
const path= require('path');
const Create_Building = parse(fs.readFileSync(path.join(__dirname,"../testData/CreateBuilding.csv")),
{
  columns: true,
  skip_empty_lines: true,
});    

//upload file scenario, binding file's directory to current directory
const FilePath = path.join(__dirname,"../testData/TestUpload.zip");

//Running this script before every test as every test needs login
test.beforeEach('Login', async ({ page }) => {
  //const loginHelper = new LoginHelper(page);

  //await loginHelper.login('qatesting@gmail.com', 'Propel@123');

});

for(const Building of Create_Building)
{
  test('Test Case 1: Create a new building', async ({ page }) =>{
  await page.getByRole('button', { name: 'Add Building' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('combobox', { name: 'Building Name' }).fill(Building.BuildingName);  
  await page.getByRole('textbox', { name: 'Customer Name (Optional)' }).fill(Building.CustomerName);
  await page.getByRole('combobox', { name: 'Street' }).fill(Building.Street);
  await page.getByRole('textbox', { name: 'City' }).fill(Building.City);
  await page.locator('app-dropdown').filter({ hasText: 'State' }).locator('div').nth(2).click();
  await page.getByText('Alaska - AK').click();
  await page.getByRole('textbox', { name: 'ZIP Code' }).fill('20930');
  await page.getByLabel('County').click();
  await page.getByText('Add New County').click();
  await page.locator('#mat-dialog-2').getByRole('textbox').fill('CA');
  await page.getByRole('button', { name: 'Add', exact: true }).click(); 
  await page.getByRole('combobox', { name: 'Region' }).selectOption('Africa');
  await page.getByRole('combobox', { name: 'Building Type' }).selectOption('College');
  await page.getByRole('textbox', { name: 'Site Code' }).fill('930');
  await page.getByRole('combobox', { name: 'AHJ Type' }).selectOption('Local AHJ');
  await page.getByRole('combobox', { name: 'Radio System' }).selectOption('1Radio');
  await page.getByRole('button',{name: 'Create Building'}).click();
  });
}


test('Test Case 2: Create a test plan', async ({ page }) =>{

  await page.getByText('Test Plan').click();
  await page.getByRole('button', { name: 'Create New Test Plan' }).click();
  //await page.getByRole('combobox',{name: 'Select Building'}).selectOption('QA Automation');
  //await page.locator('app-dropdown').filter({ hasText: 'Select Building' }).selectOption('QA Automation');
  await page.locator('.dropdown ng-tns-c94-43 ng-star-inserted').selectOption(' RSD Castle ');

});

test('Test Case 3: Upload the Report', async ({ page }) =>{

  await page.getByRole('link', { name: 'Upload', exact: true }).click();
  const ChooseFile = page.getByText('Choose file')
  ChooseFile.setInputFiles(FilePath);


  // await page.getByText('Choose file').click();
  // await page.getByText('Choose file').setInputFiles(FilePath);
  //await page.inputValue('C:\Users\GiftsonDaniel\PCTel Automation\testData\TestUpload.zip');
  //await page.locator('body').setInputFiles('\\C:\Users\GiftsonDaniel\PCTel Automation\testData\TestUpload.zip');
  //C:\Users\GiftsonDaniel\PCTel Automation\testData\TestUpload.zip

 });