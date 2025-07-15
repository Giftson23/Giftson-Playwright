import { test } from '@playwright/test';
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../page/BasePage';


export class CreateTestPlan extends BasePage{
     //readonly page: Page;
     readonly TestPlanSectionButton: Locator; 
     readonly CreateNewTestPlanButton: Locator;
     readonly SelectBuildingDropdown :Locator;
     readonly FloorTypeDropdown: Locator;
     readonly SelectWorkspace: Locator;
     readonly SelectThreshold: Locator;
     readonly PlanNameTextbox: Locator;
     readonly SaveButton: Locator;
     readonly Page: Locator;

     constructor(page){
        super(page)
        this.Page = page;
        this.TestPlanSectionButton = page.getByText('Test Plan');   
        this.CreateNewTestPlanButton = page.getByRole('button', { name: 'Create New Test Plan' });
        this.SelectBuildingDropdown = page.locator('app-dropdown').filter({ hasText: 'Select Building' }).getByRole('textbox');
        
        this.FloorTypeDropdown = page.locator('app-dropdown').filter({ hasText: 'Floor Type' }).getByRole('textbox');
        this.SelectWorkspace = page.locator('app-dropdown').filter({ hasText: 'Select Workspace' }).getByRole('textbox');
        this.SelectThreshold = page.locator('app-dropdown').filter({ hasText: 'Select Threshold' }).getByRole('textbox');
        this.PlanNameTextbox = page.locator('input[type="text"]').nth(2);
        this.SaveButton = page.getByRole('button', { name: 'Save' });
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

    async clickSaveButton()
    {
        await this.SaveButton.click();
    }
}
