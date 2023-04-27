import {expect, Page} from '@playwright/test';

export class LoginFrame {constructor (private readonly page: Page){}

    loginFormContainer = this.page.locator('#login-form');
    getUserEmailField = this.loginFormContainer.locator('#input-12');
    getUserPasswordField = this.loginFormContainer.locator('#input-13');
    getLoginButton = this.page.locator('button', {hasText: 'Log in'});

    getValidationError = this.page.locator("[class*='v-messages__message']");

    async fillEmailAndPasswordOnLoginPage(userEmail: string, userPassword: string){
        await expect(this.loginFormContainer).toBeVisible();
        await this.getUserEmailField.fill(userEmail);
        await this.getUserPasswordField.fill(userPassword);
        await this.getUserEmailField.fill(userEmail);
        await this.getLoginButton.click();
    }
}