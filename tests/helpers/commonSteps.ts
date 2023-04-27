import { Page } from '@playwright/test';
import { LoginFrame } from './loginFrame';


export class CommonSteps {
    constructor (private readonly page: Page)    { }

    async openApplicationHomePage ({email, password} : {email:string, password:string}) {
        const loginFrame = new LoginFrame(this.page);

        await this.page.goto('https://dev.omni-dispatch.com/login');
        await this.page.waitForLoadState();

        await loginFrame.fillEmailAndPasswordOnLoginPage(email, password);
        await this.page.waitForLoadState();
    }
}