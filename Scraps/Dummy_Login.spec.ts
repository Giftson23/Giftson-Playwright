import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://18.213.235.104:8080/#/login');
  await page.getByRole('button', { name: 'USER LOGIN' }).click();
  await page.getByRole('textbox', { name: 'USERNAME' }).fill('qatesting@gmail.com');  
  await page.getByRole('textbox', { name: 'PASSWORD' }).click();
  await page.getByRole('textbox', { name: 'PASSWORD' }).fill('Propel@123');
  await page.keyboard.press('Enter');
});




