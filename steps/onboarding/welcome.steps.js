import { Given, When, Then } from '@wdio/cucumber-framework';
import WelcomePage from '../../pages/WelcomePage';
import { welcomeTestData } from '../../utils/welcome.testData';

// GIVENs.

Given('the user opens the mobile application', async () => {
  // App launch is handled by Appium
});

// WHENs.
When('the user is on the Welcome registration screen', async () => {
  // No action needed, as the app should open to the Welcome screen by default.
});

When('the user enters a name with 50 characters', async () => {
  await WelcomePage.enterName(welcomeTestData.names.validName);
});

When('the user tries to enter more than 50 characters in the Name field', async () => {
  await WelcomePage.enterName(welcomeTestData.names.overMaxLengthName);
});

When('the user enters a business name with 100 characters', async () => {
  await WelcomePage.enterBusinessName(welcomeTestData.names.validBusinessName);
});

When('the user tries to enter more than 100 characters in the Business Name field', async () => {
  await WelcomePage.enterBusinessName(welcomeTestData.names.overMaxLengthBusinessName);
});

When('the user enters exactly 10 digits in the "Phone Number" field', async () => {
  await WelcomePage.enterPhoneNumber(welcomeTestData.phoneNumbers.validPhoneNumber);
});

// THENs.

Then('the title "Welcome" should be displayed', async () => {
  expect(await WelcomePage.isWelcomeTitleDisplayed(welcomeTestData.titles.welcomeTitle)).toEqual(true);
});

Then('all input fields should be visible', async () => {
  expect(await WelcomePage.areInputsVisible()).toEqual(true);
});

Then('the "Next" button should be enabled', async () => {
  expect(await WelcomePage.isNextButtonEnabled()).toEqual(true);
});

Then('no validation error should be displayed', async () => {
  expect(await WelcomePage.hasNoValidationErrors()).toEqual(true);
});

Then('no validation error should be displayed below the Name field', async () => {
  expect(await WelcomePage.welcomeNameError.isDisplayed()).toEqual(false);
});

Then('no validation error should be displayed below the Business Name field', async () => {
  expect(await WelcomePage.welcomeBusinessNameError.isDisplayed()).toEqual(false);
});