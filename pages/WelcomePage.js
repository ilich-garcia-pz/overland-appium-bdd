import BasePage from './BasePage';
import { welcomeSelectors } from '../selectors';

class WelcomePage extends BasePage {
  get welcomeTitleLabel() {
    return $(welcomeSelectors.welcomeTitleLabel);
  }

  get welcomeNameInput() {
    return $(welcomeSelectors.welcomeNameInput);
  }

  get welcomeBusinessNameInput() {
    return $(welcomeSelectors.welcomeBusinessNameInput);
  }

  get welcomePhoneNumberInput() {
    return $(welcomeSelectors.welcomePhoneNumberInput);
  }

  get welcomeEmailInput() {
    return $(welcomeSelectors.welcomeEmailInput);
  }

  get welcomeMailingAddressInput() {
    return $(welcomeSelectors.welcomeMailingAddressInput);
  }

  get welcomePhysicalAddressInput() {
    return $(welcomeSelectors.welcomePhysicalAddressInput);
  }

  get welcomeNextButton() {
    return $(welcomeSelectors.welcomeNextButton);
  }

  async enterName(name) {
    await this.type(this.welcomeNameInput, name);
  }

  async enterBusinessName(businessName) {
    await this.type(this.welcomeBusinessNameInput, businessName);
  }

  async isWelcomeTitleDisplayed(expectedTitle) {
    const actualTitle = await this.welcomeTitleLabel.getText();

    return actualTitle === expectedTitle;
  }

  async areInputsVisible() {
    return await this.welcomeNameInput.isDisplayed() &&
      await this.welcomeBusinessNameInput.isDisplayed() &&
      await this.welcomePhoneNumberInput.isDisplayed() &&
      await this.welcomeEmailInput.isDisplayed() &&
      await this.welcomeMailingAddressInput.isDisplayed() &&
      await this.welcomePhysicalAddressInput.isDisplayed(); // Returns true if all inputs are visible, false otherwise.
  }

  async isNextButtonDisabled() {
    return !(await this.welcomeNextButton.isEnabled()); // Returns true if the button is disabled, false if enabled.
  }
}

export default new WelcomePage();