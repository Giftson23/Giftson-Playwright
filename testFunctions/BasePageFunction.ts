import { Page } from "@playwright/test";
import { BasePage } from "../page/BasePage";
import { LoginHelper } from '../helpers/LoginHelper.ts'


export async function LaunchPCTEL(page: Page)
{

      const config=new LoginHelper();
       const basePage =new BasePage(page);
       await basePage.LaunchURL();
       await basePage.ClickUserLogin();
       await basePage.EnterUserName();
       await basePage.EnterPassword();
       await basePage.ClickLogin();
       
}
