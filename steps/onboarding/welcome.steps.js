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
  await WelcomePage.enterName(welcomeTestData.names.overMaxLengthName); // 51 characters.
});

When('the user enters a business name with 100 characters', async () => {
  await WelcomePage.enterBusinessName(welcomeTestData.names.validBusinessName);
});

When('the user tries to enter more than 100 characters in the Business Name field', async () => {
  await WelcomePage.enterBusinessName(welcomeTestData.names.overMaxLengthBusinessName); // 101 characters.
});

When('the user enters exactly 10 digits in the Phone Number field', async () => {
  await WelcomePage.enterPhoneNumber(welcomeTestData.phoneNumbers.validPhoneNumber);
});

When('the user tries to enter more than 10 characters in the Phone Number field', async () => {
  await WelcomePage.enterPhoneNumber(welcomeTestData.phoneNumbers.overMaxLengthPhoneNumber); // 11 digits.
});

When('the user enters a valid email address', async () => {
  await WelcomePage.enterEmail(welcomeTestData.emails.validEmail);
});

When('the user enters an invalid email address', async () => {
  await WelcomePage.enterEmail(welcomeTestData.emails.invalidEmail);
});

When('the user clicks on the "Next" button', async () => {
  expect(await WelcomePage.isNextButtonEnabled()).toEqual(true);
  await WelcomePage.clickNextButton();
});

When('the user types a mailing address', async () => {
  await WelcomePage.enterMailingAddress(welcomeTestData.addresses.mailingAddressQuery);
});

When('the user selects a mailing address from Google Places suggestions', async () => {
  await WelcomePage.selectMailingAddressFromGooglePlacesSuggestions(welcomeTestData.addresses.mailingAddressQuery);
});

When('the user types a physical address', async () => {
  await WelcomePage.enterPhysicalAddress(welcomeTestData.addresses.physicalAddressQuery);
});

When('the user selects a physical address from Google Places suggestions', async () => {
  await WelcomePage.selectPhysicalAddressFromGooglePlacesSuggestions(welcomeTestData.addresses.physicalAddressQuery);
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

Then('no validation error should be displayed below the Phone Number field', async () => {
  expect(await WelcomePage.welcomePhoneNumberError.isDisplayed()).toEqual(false);
});

Then('no validation error should be displayed below the Email field', async () => {
  expect(await WelcomePage.welcomeEmailError.isDisplayed()).toEqual(false);
});

Then('an inline error message should be displayed below the Email field', async () => {
  expect(await WelcomePage.welcomeEmailError.isDisplayed()).toEqual(true);
});

Then('no validation error should be displayed below the Mailing Address field', async () => {
  expect(await WelcomePage.welcomeMailingAddressError.isDisplayed()).toEqual(false);
});

Then('no validation error should be displayed below the Physical Address field', async () => {
  expect(await WelcomePage.welcomePhysicalAddressError.isDisplayed()).toEqual(false);
});