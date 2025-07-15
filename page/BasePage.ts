import { test, expect,Locator, Page } from '@playwright/test';
import { LoginHelper } from '../helpers/LoginHelper.ts'

export class BasePage{


    page:Page;
    config: LoginHelper;
    
    userlogin:Locator;
    login:Locator;
    usernametextbox:Locator;
    passwordtextbox:Locator;


    constructor(page){

        this.page = page; 
        this.userlogin=page.locator("//button[contains(text(),'USER LOGIN')]");
        this.config = new LoginHelper();
        this.usernametextbox=page.locator("//input[@id='user_name']");
        this.passwordtextbox=page.locator("//input[@placeholder='PASSWORD']");
        this.login=page.getByRole('button', { name: 'LOGIN' });
    }

    //check if Homepage exists
    async isHomepageExists(){

       await expect(this.page).toHaveTitle('SeeHawk®Central');
      
    }
    
    //Click "click userlogin"

    async ClickUserLogin (){

       await this.userlogin.click()
      
    }

      async LaunchURL (){

      await this.page.goto(this.config.appUrl);
      
    }
  
     async EnterUserName (){

      const username=this.config.username;
      await this.usernametextbox.fill(username)
      
    }

    async EnterPassword (){

      const password=this.config.password
      await this.passwordtextbox.fill(password)
      
      
    }
  
     async ClickLogin (){

     await this.page.keyboard.press('Enter');
      
    }

}

