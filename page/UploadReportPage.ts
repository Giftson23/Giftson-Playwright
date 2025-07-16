import { test } from '@playwright/test';
import { Page, Locator } from '@playwright/test';
import { LoginHelper } from '../helpers/LoginHelper.ts'

export class UploadReport{
     readonly page: Page;
     readonly UploadButton: Locator; 
     readonly ChooseFileButton: Locator;
     readonly SelectTestTypeDropDown :Locator;
     readonly SelectBuildingButton: Locator;
     readonly SelectBuildingOption: Locator;
     readonly SaveButton: Locator;
     readonly NextButton: Locator;
     readonly ChooseFile : Locator;
     readonly Uploadtab : Locator;
     readonly Page : Locator;
     readonly CheckboxSelect : Locator;
     config: LoginHelper;

     constructor(page){
        this.Page = page;
        this.UploadButton = page.getByRole('link', { name: 'Upload', exact: true }); 
        this.Uploadtab = page.getByText('Upload Files');
       // this.ChooseFileButton = page.getByText('Choose file');
        this.ChooseFile = page.locator("//input[@type='file']");
        this.SelectTestTypeDropDown = page.getByRole('textbox', { name: 'Select Test Type' });
        this.SelectBuildingButton = page.locator('input[type="text"]');
        this.CheckboxSelect = page.locator('.mat-checkbox-inner-container').first();
        //this.SelectBuildingOption = page.getByRole('gridcell', { name: 'RSD Castle' }); 
        this.SaveButton = page.getByRole('button', { name: 'Save' });
        this.NextButton = page.getByRole('button', { name: 'Next' });
        
    }

    async clickUploadButton(){
        await this.UploadButton.click();
        await this.Uploadtab.click();
    }

    async clickChooseFileButton(filePath)
    {
      //  await this.ChooseFileButton.click();
        await this.ChooseFile.setInputFiles(filePath);
       // await this.page.keyboard.press("Enter");
    }

    async clickSelectTestTypeDropDown(dropdownName, uploadDropdown)
    {
        const dropdownLocator = this.Page.locator(`app-dropdown[placeholder="${dropdownName}"] input[data-cy="dropdown-input"]`);
        await dropdownLocator.click();
        const optionLocator = this.Page.locator(`text="${uploadDropdown}"`);
        await optionLocator.click();
       // await this.SelectTestTypeDropDown.click();
    }

    async clickSelectBuildingButton()
    {
        await this.SelectBuildingButton.click();
    }

    async clickSelectBuildingOption()
    {
        await this.SelectBuildingOption.click();
        await this.CheckboxSelect.click();
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