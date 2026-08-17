import { Given, When, Then } from '@wdio/cucumber-framework';
import PreferencesPage from '../../pages/PreferencesPage';
import HomePage from '../../pages/HomePage';
import { preferencesTestData } from '../../utils/preferences.testData';

// GIVENs.

// WHENs.
When('the user selects Equipment preference', async () => {
  await PreferencesPage.clickEquipmentCheckbox();
});

When('the user clicks on the "Get Started" button', async () => {
  await PreferencesPage.clickGetStartedButton();
});

// THENs.

Then('the user should be navigated to the Home screen', async () => {
  expect(await HomePage.isHomeScreenDisplayed()).toEqual(true);
});