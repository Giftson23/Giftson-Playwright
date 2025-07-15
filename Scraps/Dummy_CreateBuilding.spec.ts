import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   // Recording...
// });await page.goto('http://18.213.235.104:8080/#/login');
// await page.goto('http://18.213.235.104:8080/#/company/management');
// await page.getByRole('button', { name: 'Add Building' }).click();
// await page.getByRole('button', { name: 'OK' }).click();
// await page.getByRole('combobox', { name: 'Building Name' }).click();
// await page.getByRole('combobox', { name: 'Building Name' }).fill('Neverland');
// await page.getByRole('textbox', { name: 'Customer Name (Optional)' }).click();
// await page.getByRole('textbox', { name: 'Customer Name (Optional)' }).fill('Jack Mike');
// await page.getByRole('combobox', { name: 'Street' }).click();
// await page.getByRole('combobox', { name: 'Street' }).fill('Fort street');
// await page.getByRole('combobox', { name: 'Street' }).press('Tab');
// await page.getByRole('textbox', { name: 'City' }).fill('Los Angeles');
// await page.locator('app-dropdown').filter({ hasText: 'State' }).locator('div').nth(2).click();
// await page.getByText('Alaska - AK').click();
// await page.getByRole('textbox', { name: 'ZIP Code' }).click();
// await page.getByRole('textbox', { name: 'ZIP Code' }).fill('20930');
// await page.getByRole('combobox', { name: 'County' }).click();
// await page.getByRole('combobox', { name: 'County' }).click();
// await page.getByText('Add New County').click();
// await page.locator('#mat-dialog-2').getByRole('textbox').click();
// await page.locator('#mat-dialog-2').getByRole('textbox').fill('US');
// await page.getByRole('button', { name: 'Add', exact: true }).click();
// await page.locator('app-dropdown').filter({ hasText: 'Building Type' }).getByRole('textbox').click();
// await page.getByText('College').click();
// await page.getByRole('textbox', { name: 'Site Code' }).click();
// await page.getByRole('textbox', { name: 'Site Code' }).fill('930');
// await page.locator('app-dropdown').filter({ hasText: 'AHJ Type' }).locator('div').nth(3).click();
// await page.getByText('Local AHJ').click();
// await page.getByRole('combobox', { name: 'AHJ' }).click();
// await page.getByText('State AHJ Test, Alaska').click();
// await page.getByRole('button', { name: 'Yes' }).click();
// await page.getByRole('combobox', { name: 'Radio System' }).click();
// await page.getByText('1Radio').click();
// await page.getByRole('button', { name: 'Yes' }).click();