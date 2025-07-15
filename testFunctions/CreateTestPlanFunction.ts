import { CreateTestPlan } from "../page/CreateTestPlanPage.ts";

export async function CreateNewTestPlan(page,planRecord,planDropDown){

    const createnewtestplan = new CreateTestPlan(page);

        
        await createnewtestplan.clickTestPlanSectionButton();
        await createnewtestplan.clickCreateNewTestPlanButton();
        await createnewtestplan.clickSelectBuildingDropdown('Select Building',planDropDown.selectBuilding);
        await createnewtestplan.selectFloorTypeDropdown('Floor Type', planDropDown.floorType);
        await createnewtestplan.clickSelectWorkspace('Select Workspace', planDropDown.selectWorkspace);
        await createnewtestplan.clickSelectThreshold('Select Threshold', planDropDown.selectThreshold);
        await createnewtestplan.enterPlanNameTextbox(planRecord.PlanName);
        await createnewtestplan.clickSaveButton();
    }