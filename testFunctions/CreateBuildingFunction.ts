import { CreateBuilding } from "../page/CreateBuildingPage.ts";

export async function CreateNewBuilding(page, BuildingRecord){

    const createbuilding = new CreateBuilding(page);

        
        await createbuilding.AddBuildingButton.click();
        await createbuilding.clickOkButton();
        await createbuilding.enterBuildingName(BuildingRecord.BuildingName);
        await createbuilding.enterCustomerName(BuildingRecord.CustomerName);
        await createbuilding.enterStreetName(BuildingRecord.Street);
        await createbuilding.enterCityName(BuildingRecord.City);
        await createbuilding.enterStateTextbox(BuildingRecord.State);
        await createbuilding.enterZipCode(BuildingRecord.ZipCode);
        await createbuilding.clickCounty();
        await createbuilding.addNewCounty();
        await createbuilding.enterNewCounty();
        await createbuilding.clickAddButtonCounty();
        await createbuilding.selectRegion();
        await createbuilding.selectBuildingType();
        await createbuilding.enterSiteCode();
        await createbuilding.selectAHJType();
        await createbuilding.selectRadioSystem();
        await createbuilding.clickCreateBuildingButton();

    }