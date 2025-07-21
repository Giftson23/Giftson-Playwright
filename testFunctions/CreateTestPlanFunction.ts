import { CreateTestPlan } from "../page/CreateTestPlanPage.ts";

export async function CreateNewTestPlan(page,test,planRecord,planDropDown){
    const {step} = test;

    const createnewtestplan = new CreateTestPlan(page);

        await step('Click Test Plan Button', async () => {
            await createnewtestplan.clickTestPlanSectionButton();
            await createnewtestplan.clickCreateNewTestPlanButton();
        })

        await step('Select a building', async () => {
            await createnewtestplan.clickSelectBuildingDropdown('Select Building',planDropDown.selectBuilding);
        })   
        
        await step('Select Floor', async () => {
            await createnewtestplan.selectFloorTypeDropdown('Floor Type', planDropDown.floorType);
            await createnewtestplan.selectFloor();
        })    
        
        await step('Selecting Workspace', async () => {
            await createnewtestplan.clickSelectWorkspace('Select Workspace', planDropDown.selectWorkspace);
        })    
        
        await step('Click Threshold', async () => {
            await createnewtestplan.clickSelectThreshold('Select Threshold', planDropDown.selectThreshold);
        })    
        
        await step('Fill Sample method', async () => {
            
            await createnewtestplan.clickSampleCollectionButton();
            await createnewtestplan.clickSaveButtoninSample();
        })    
        
        await step('Enter Plan Name', async () => {

            await createnewtestplan.enterPlanNameTextbox(planRecord.PlanName);
            await createnewtestplan.clickSaveButton();
        })     
        
        await createnewtestplan.verifyTestPlanSuccess();
        //await page.waitForTimeout(100000);
    }