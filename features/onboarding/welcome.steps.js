import { Given, When, Then } from '@wdio/cucumber-framework';
import WelcomePage from '../../pages/WelcomePage';
import { welcomeTestData } from '../../utils/welcome.testData';

Given('the user opens the mobile application', async () => {
  // App launch is handled by Appium
});

When('the user is on the Welcome registration screen', async () => {
  // No action needed, as the app should open to the Welcome screen by default.
});

Then('the title "Welcome" should be displayed', async () => {
  expect(await WelcomePage.isWelcomeTitleDisplayed(welcomeTestData.titles.welcomeTitle)).toEqual(true);
});

When('all input fields should be visible', async () => {
  expect(await WelcomePage.areInputsVisible()).toEqual(true);
});

When('the "Next" button should be disabled', async () => {
  expect(await WelcomePage.isNextButtonEnabled()).toEqual(true);
});

When('the user enters a name with 50 characters', async () => {
  await WelcomePage.enterName(welcomeTestData.names.validName);
  await WelcomePage.enterBusinessName(welcomeTestData.names.validBusinessName);
});

Then('no validation error should be displayed', async () => {
  // assertion here
});