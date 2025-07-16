import { test } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class CreateBuilding{
     readonly page: Page;
     readonly AddBuildingButton: Locator;
     readonly OkButton: Locator;
     readonly BuildingNameTextbox :Locator;
     readonly CustomerNameTextbox: Locator;
     readonly StreetTextbox: Locator;
     readonly CityTextbox: Locator;
     readonly StateTextbox: Locator;
     readonly ZipCodeTextbox: Locator;
     readonly CountyButton: Locator;
     readonly AddNewCountyButton :Locator;
     readonly CountyTextBoxInPopup :Locator;
     readonly AddButtonCountyPopup:Locator;
     readonly RegionDropDown:Locator;
     readonly BuildingTypeDropDown :Locator;
     readonly SiteCodeTextbox :Locator;
     readonly AHJTypeDropDown :Locator;
     readonly RadioSystemDropDown :Locator;
     readonly CreateBuildingButton :Locator;
     readonly Page:Locator;
     
    constructor(page){
        this.Page = page;
        this.AddBuildingButton = page.getByRole('button', { name: 'Add Building' });   
        this.OkButton = page.getByRole('button', { name: 'OK' })
        this.BuildingNameTextbox = page.getByRole('combobox', { name: 'Building Name' });
        this.CustomerNameTextbox = page.getByRole('textbox', { name: 'Customer Name (Optional)' });
        this.StreetTextbox = page.getByRole('combobox', { name: 'Street' });
        this.CityTextbox = page.getByRole('textbox', { name: 'City' });
        this.StateTextbox =page.getByLabel('State');
        this.ZipCodeTextbox = page.getByRole('textbox', { name: 'ZIP Code' });
        this.CountyButton = page.getByLabel('County');
        this.AddNewCountyButton = page.getByText('Add New County');
        this.CountyTextBoxInPopup = page.locator('#mat-dialog-2').getByRole('textbox');
        this.AddButtonCountyPopup = page.getByRole('button', { name: 'Add', exact: true });
        this.RegionDropDown =  page.getByRole('combobox', { name: 'Region' });
        this.BuildingTypeDropDown = page.getByRole('combobox', { name: 'Building Type' });
        this.SiteCodeTextbox = page.getByRole('textbox', { name: 'Site Code' })
        this.AHJTypeDropDown = page.getByRole('combobox', { name: 'AHJ Type' })
        this.RadioSystemDropDown = page.getByRole('combobox', { name: 'Radio System' });
        this.CreateBuildingButton = page.getByRole('button', { name: 'Create Building' });

    }

    async clickAddBuilding(){
        await this.AddBuildingButton.click();
    }

    async clickOkButton()
    {
        await this.OkButton.click();
    }

    async enterBuildingName(BuildingName)
    {
        await this.BuildingNameTextbox.fill(BuildingName);
    }

    async enterCustomerName(CustomerName)
    {
        await this.CustomerNameTextbox.fill(CustomerName);
    }

    async enterStreetName(Street)
    {
        await this.StreetTextbox.fill(Street);
    }

    async enterCityName(City)
    {
        await this.CityTextbox.fill(City);
    }

    async enterStateTextbox(State)
    {
        //await this.StateTextbox.selectOption(State);
        await this.StateTextbox.click();
        await this.StateTextbox.pressSequentially(State);
    }

    async enterZipCode(ZipCode)
    {
        await this.ZipCodeTextbox.fill(ZipCode);
    }

    async clickCounty()
    {
        await this.CountyButton.click();
    }
    
    async addNewCounty()
    {
        await this.AddNewCountyButton.click();
    }

    async enterNewCounty()
    {
        await this.CountyTextBoxInPopup.fill('CA');
    }

    async clickAddButtonCounty()
    {
        await this.AddButtonCountyPopup.click();
    }

    async selectRegion()
    {
        await this.RegionDropDown.selectOption('Africa');
    }

    async selectBuildingType()
    {
        await this.BuildingTypeDropDown.selectOption('College');
    }

    async enterSiteCode()
    {
        await this.SiteCodeTextbox.fill('830');
    }

    async selectAHJType()
    {
        await this.AHJTypeDropDown.selectOption('Local AHJ')
    }

    async selectRadioSystem()
    {
        await this.RadioSystemDropDown.selectOption('1Radio');
    }

    async clickCreateBuildingButton()
    {
        await this.CreateBuildingButton.click();
    }
}
