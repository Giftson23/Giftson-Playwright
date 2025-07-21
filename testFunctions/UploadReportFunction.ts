import { UploadReport } from "../page/UploadReportPage.ts";
import { UPLOAD_FILE_PATH } from '../helpers/LoginHelper.ts';

export async function UploadReportFunction(page, uploadDropdown){
    
    //const filePath = this.config.UPLOAD_FILE_PATH;
    const uploadreport = new UploadReport(page);
                        
        await uploadreport.clickUploadButton();
        await uploadreport.clickChooseFileButton(UPLOAD_FILE_PATH);
        await uploadreport.clickSelectTestTypeDropDown('Select Test Type', uploadDropdown.testType);
        await uploadreport.clickSelectBuildingButton();
        await uploadreport.clickSaveButton();
        await uploadreport.clickNextButton();
        await uploadreport.clickSaveButton();
        await uploadreport.verifyUploadReportSuccess();

    }