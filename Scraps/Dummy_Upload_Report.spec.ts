import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.getByRole('link', { name: 'Upload', exact: true }).click();
  await page.getByText('Choose file').click();
  await page.locator('body').setInputFiles('TestUpload.zip');
  await page.getByRole('textbox', { name: 'Select Test Type' }).click();
  await page.getByText('Baseline').click();
  await page.locator('input[type="text"]').click();
  await page.getByRole('gridcell', { name: 'RSD Castle' }).click();
  await page.locator('#mat-checkbox-22 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.locator('#mat-checkbox-22 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#mat-checkbox-21').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Upload', exact: true }).click();
  await page.getByText('Choose file').click();
  await page.locator('body').setInputFiles('TestUpload.zip');
});