import { test } from '@playwright/test';
import { Page, Locator } from '@playwright/test';


export class UploadReport{
     readonly page: Page;
     readonly UploadButton: Locator; 
     readonly ChooseFileButton: Locator;
     readonly SelectTestTypeDropDown :Locator;
     readonly SelectBuildingButton: Locator;
     readonly SelectBuildingOption: Locator;
     readonly SaveButton: Locator;
     readonly NextButton: Locator;

     constructor(page){
        //this.Page = page;
        this.UploadButton = page.getByRole('link', { name: 'Upload', exact: true });   
        this.ChooseFileButton = page.getByText('Choose file');
        this.SelectTestTypeDropDown = page.getByRole('textbox', { name: 'Select Test Type' });
        this.SelectBuildingButton = page.locator('input[type="text"]');
        this.SelectBuildingOption = page.getByRole('gridcell', { name: 'RSD Castle' }); 
        this.SaveButton = page.getByRole('button', { name: 'Save' });
        this.NextButton = page.getByRole('button', { name: 'Next' });
    }

    async clickUploadButton(){
        await this.UploadButton.click();
    }

    async clickChooseFileButton()
    {
        await this.ChooseFileButton.click();
    }

    async clickSelectTestTypeDropDown()
    {
        await this.SelectTestTypeDropDown.click();
    }

    async clickSelectBuildingButton()
    {
        await this.SelectBuildingButton.click();
    }

    async clickSelectBuildingOption()
    {
        await this.SelectBuildingOption.click();
    }

    async clickSaveButton()
    {
        await this.SaveButton.click();
    }

    async clickNextButton()
    {
        await this.NextButton.click();
    }
}