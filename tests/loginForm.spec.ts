import { CommonSteps } from "./helpers/commonSteps";
import {expect, test} from "@playwright/test";
import {credentials} from "./helpers/credentials";
import { Page } from '@playwright/test'
import {LoginFrame} from "./helpers/loginFrame";


test.describe ('Login functionality', () => {

    test('login page happy path', async ({ page }) => {
        const commonSteps = new CommonSteps(page);
        const {adminUser} = credentials;

        await commonSteps.openApplicationHomePage(adminUser);
        await expect(page).toHaveURL(/\/chats/);

    });

     test('login form displayed validation error', async ({ page }) => {
         const commonSteps = new CommonSteps(page);
         const loginFrame = new LoginFrame(page);
         const {fakeUser} = credentials;

         await commonSteps.openApplicationHomePage(fakeUser);
         await expect(loginFrame.getValidationError).toHaveText('Wrong Email or password');
         await expect(page).toHaveURL(/\/login/);
    });
});
