import { Page } from '@playwright/test';
import path from 'path';

const FilePath = path.join(__dirname, "../../testData/TestUpload.zip");

export async function uploadReport(page: Page) {
  await page.getByRole('link', { name: 'Upload', exact: true }).click();
  await page.getByText('Choose file').setInputFiles(FilePath);
  await page.getByRole('textbox', { name: 'Select Test Type' }).click();
  await page.getByText('Baseline').click();
  await page.locator('input[type="text"]').click();
  await page.getByRole('gridcell', { name: 'RSD Castle' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
}