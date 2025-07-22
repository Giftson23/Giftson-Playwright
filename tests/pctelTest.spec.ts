import { test } from '@playwright/test';
import { LoginHelper } from '../helpers/LoginHelper.ts';
import { createBuilding, getBuildingTestData } from '../Scraps/testCases/CreateBuildingTest.ts';
import { createTestPlan } from '../Scraps/testCases/CreateTestPlanTest.ts';
import { BasePage } from '../page/BasePage';
import { uploadReport } from '../Scraps/testCases/UploadReportTest.ts';
import { LaunchPCTEL } from '../testFunctions/BasePageFunction.ts';
import { CreateNewBuilding } from '../testFunctions/CreateBuildingFunction.ts';
import { CreateNewTestPlan } from '../testFunctions/CreateTestPlanFunction.ts';
import { UploadReportFunction } from '../testFunctions/UploadReportFunction.ts';
import { Create_Building, testPlanDropDowns, testPlanData, uploadDropdowns } from '../utils/testDataParser';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';



// const Create_Building = parse(
//   fs.readFileSync(path.join(__dirname, "../testData/CreateBuilding.csv")),
//   {
//     columns: true,
//     skip_empty_lines: true,
//   }
// );

// const testPlanDropDowns = parse(fs.readFileSync(path.join(__dirname, "../testData/TestPlanDropDowns.csv")),
//     {
//         columns: true,
//         skip_empty_lines: true,
//     });

// const testPlanData = parse(fs.readFileSync(path.join(__dirname, "../testData/CreateTestPlan.csv")),
//     {
//         columns: true,
//         skip_empty_lines: true,
//     });

// const uploadDropdowns = parse(fs.readFileSync(path.join(__dirname, "../testData/Upload_Report.csv")),
//     {
//         columns: true,
//         skip_empty_lines: true,
//     });

test.beforeEach('user launches URL',async({ page })=>{

await LaunchPCTEL(page);

});


for (const BuildingRecord of Create_Building) { 

  test('Test Case 1: Create Building', async ({ page }) => {
    await CreateNewBuilding(page,BuildingRecord);
  });

}

for (const planRecord of testPlanData) {

    for (const planDropDown of testPlanDropDowns) {

      test('Test Case 2: Create a test plan', async ({ page }) => {
        await CreateNewTestPlan(page,test,planRecord,planDropDown);
        
      });
    }
  }


for(const uploadDropdown of uploadDropdowns){

  test('Test Case 3: Upload the report', async ({ page }) => {

  await UploadReportFunction(page,uploadDropdown);

});
}

