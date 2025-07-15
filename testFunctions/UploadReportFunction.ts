import { UploadReport } from "../page/UploadReportPage.ts";

export async function UploadReportFunction(page){

    const uploadreport = new UploadReport(page);

        
        await uploadreport.clickUploadButton();
        await uploadreport.clickChooseFileButton();
        await uploadreport.clickSelectTestTypeDropDown();
        await uploadreport.clickSelectBuildingButton();
        await uploadreport.clickSelectBuildingOption();
        await uploadreport.clickSaveButton();
        await uploadreport.clickNextButton();
        await uploadreport.clickSaveButton();

    }