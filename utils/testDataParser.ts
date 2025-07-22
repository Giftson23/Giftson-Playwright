import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

function parseCSV(filename: string) {
  const filePath = path.join(__dirname, '../testData', filename);
  const fileContent = fs.readFileSync(filePath);
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
}

export const Create_Building = parseCSV('CreateBuilding.csv');
export const testPlanDropDowns = parseCSV('TestPlanDropDowns.csv');
export const testPlanData = parseCSV('CreateTestPlan.csv');
export const uploadDropdowns = parseCSV('Upload_Report.csv');