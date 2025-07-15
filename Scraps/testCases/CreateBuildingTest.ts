import { Page } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';


const Create_Building = parse(
  fs.readFileSync(path.join(__dirname, "../../testData/CreateBuilding.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  }
);

export function getBuildingTestData() {
  return Create_Building;
}

export async function createBuilding(page: Page, building: Record<string, string>) {
  await page.getByRole('button', { name: 'Add Building' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('combobox', { name: 'Building Name' }).fill(building.BuildingName);
  await page.getByRole('textbox', { name: 'Customer Name (Optional)' }).fill(building.CustomerName);
  await page.getByRole('combobox', { name: 'Street' }).fill(building.Street);
  await page.getByRole('textbox', { name: 'City' }).fill(building.City);
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
  await page.getByRole('button', { name: 'Create Building' }).click();
}