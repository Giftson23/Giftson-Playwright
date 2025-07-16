import { expect, test } from '@playwright/test';
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../page/BasePage';


export class CreateTestPlan extends BasePage{
     //readonly page: Page;
     readonly TestPlanSectionButton: Locator; 
     readonly CreateNewTestPlanButton: Locator;
     readonly SelectBuildingDropdown :Locator;
     readonly FloorTypeDropdown: Locator;
     readonly FloorSelectDropDown:Locator;
     readonly CheckboxSelect:Locator
     readonly SelectWorkspace: Locator;
     readonly SelectThreshold: Locator;
     readonly PlanNameTextbox: Locator;
     readonly SampleCollectionButton: Locator;
     readonly SaveButtoninSample:Locator;
     readonly SaveButton: Locator;
     readonly TestPlanSuccess: Locator;
     readonly Page: Locator;

     constructor(page){
        super(page)
        this.Page = page;
        this.TestPlanSectionButton = page.getByText('Test Plan');   
        this.CreateNewTestPlanButton = page.getByRole('button', { name: 'Create New Test Plan' });
        this.SelectBuildingDropdown = page.locator('app-dropdown').filter({ hasText: 'Select Building' }).getByRole('textbox');
        this.FloorTypeDropdown = page.locator('app-dropdown').filter({ hasText: 'Floor Type' }).getByRole('textbox');
        this.FloorSelectDropDown = page.locator('app-dropdown').filter({ hasText: 'Select Floor' }).locator('div').nth(3);
        this.CheckboxSelect = page.locator('.mat-checkbox-inner-container').first();
        this.SelectWorkspace = page.locator('app-dropdown').filter({ hasText: 'Select Workspace' }).getByRole('textbox');
        this.SelectThreshold = page.locator('app-dropdown').filter({ hasText: 'Select Threshold' }).getByRole('textbox');
        this.SampleCollectionButton = page.locator('input[type="text"]').nth(1);
        this.SaveButtoninSample = page.locator("//button[text()='Save']");
        this.PlanNameTextbox = page.locator('input[type="text"]').nth(2);
        this.SaveButton = page.getByRole('button', { name: 'Save' });
        this.TestPlanSuccess = page.locator("//div[text()=' Test Plan Created Successfully ']");
    }

    async clickTestPlanSectionButton(){
        await this.TestPlanSectionButton.click();
    }

    async clickCreateNewTestPlanButton()
    {
        await this.CreateNewTestPlanButton.click();
    }

    async clickSelectBuildingDropdown(dropdownName,planDropDown)
    {
        const dropdownLocator =  this.Page.locator(`app-dropdown:has-text("${dropdownName}")`); 
        await dropdownLocator.click();
        //await this.Page.waitForSelector(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`, { state: 'visible' });
        const optionLocator = this.Page.locator(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`).nth(0);
        await optionLocator.click();
        //await this.SelectBuildingDropdown.click();
    }

    async selectFloorTypeDropdown(dropdownName,planDropDown)
    {
        const dropdownLocator =  this.Page.locator(`app-dropdown:has-text("${dropdownName}")`);
        await dropdownLocator.click();
        //await this.Page.waitForSelector(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`, { state: 'visible' });
        const optionLocator = this.Page.locator(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`); 
        //await this.Page.waitForTimeout(3000);
        await optionLocator.click();
        await dropdownLocator.click();
        await optionLocator.click();
      //  await this.FloorTypeDropdown.click();
    }

    async selectFloor()
    {
        await this.FloorSelectDropDown.waitFor({ state: 'visible' });
        await this.FloorSelectDropDown.click();
        await this.CheckboxSelect.click();
    }

    async clickSelectWorkspace(dropdownName,planDropDown)
    {
        const dropdownLocator =  this.Page.locator(`app-dropdown:has-text("${dropdownName}")`);
        await dropdownLocator.click();
       // await this.Page.waitForSelector(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`, { state: 'visible' });
        const optionLocator = this.Page.locator(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`).nth(0);
        await optionLocator.click();
       // await this.SelectWorkspace.click();
    }

    async clickSelectThreshold(dropdownName,planDropDown)
    {
        const dropdownLocator =  this.Page.locator(`app-dropdown:has-text("${dropdownName}")`);
        await dropdownLocator.click();
       // await this.Page.waitForSelector(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`, { state: 'visible' });
        const optionLocator = this.Page.locator(`app-dropdown:has-text("${dropdownName}") >> text=${planDropDown}`).nth(0);
        await optionLocator.click();
    }

    async enterPlanNameTextbox(PlanName)
    {
        await this.PlanNameTextbox.fill(PlanName);
    }

    async clickSampleCollectionButton()
    {
        await this.SampleCollectionButton.click();
    }

    async clickSaveButtoninSample()
    {
        await this.SaveButtoninSample.click();
    }

    async clickSaveButton()
    {
        await this.SaveButton.click();
    }

     async verifyTestPlanSuccess() {
        await expect(this.TestPlanSuccess).toHaveText(' Test Plan Created Successfully ');
    }
}
