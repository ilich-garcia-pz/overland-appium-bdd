import { Given, When, Then } from '@wdio/cucumber-framework';
import WelcomePage from '../../pages/WelcomePage';

Given('the user opens the mobile application', async () => {
  // App launch is handled by Appium
});

When('the user is on the Welcome registration screen', async () => {
  // await WelcomePage.nextBtn.waitForDisplayed();
});

When('the user enters a name with 50 characters', async () => {
  await WelcomePage.enterName("Hi, I'm Ilich");
  await WelcomePage.enterBusinessName("Testing the automation");
});

Then('no validation error should be displayed', async () => {
  // assertion here
});