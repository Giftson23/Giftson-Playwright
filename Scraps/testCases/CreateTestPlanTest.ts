import { Page } from '@playwright/test';

export async function createTestPlan(page: Page) {
  await page.getByText('Test Plan').click();
  await page.getByRole('button', { name: 'Create New Test Plan' }).click();
  await page.locator('app-dropdown').filter({ hasText: 'Select Building' }).getByRole('textbox').click();
  await page.getByText('QA Automation').click();
  await page.locator('app-dropdown').filter({ hasText: 'Floor Type' }).getByRole('textbox').click();
  await page.getByText('IBWC').click();
  await page.locator('app-dropdown').filter({ hasText: 'Select Workspace' }).getByRole('textbox').click();
  await page.getByText('RSD Workspace').click();
  await page.locator('app-dropdown').filter({ hasText: 'Select Threshold' }).getByRole('textbox').click();
  await page.getByText('RSD Settings').click();
  await page.getByRole('textbox', { name: 'Plan Name' }).fill('RSD Plan');
  await page.getByRole('button', { name: 'Save' }).click();
}