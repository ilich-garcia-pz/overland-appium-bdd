import BasePage from './BasePage';
import { welcomeSelectors } from '../selectors';

class WelcomePage extends BasePage {
  get welcomeTitleText() {
    return $(welcomeSelectors.welcomeTitleText);
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
    await this.welcomeTitleText.waitForDisplayed({ timeout: 20000 });
    const actualTitle = (await this.welcomeTitleText.getText()).trim();

    return actualTitle === expectedTitle.trim();
  }

  async areInputsVisible() {
    const allTextInputs = await $$('android=new UiSelector().className("android.widget.EditText")');
    if (allTextInputs.length < 5) {
      return false;
    }

    for (const input of allTextInputs) {
      if (!(await input.isDisplayed())) {
        return false;
      }
    }

    return true;
  }

  async isNextButtonEnabled() {
    return await this.welcomeNextButton.isEnabled(); // Returns true if the button is enabled, false if disabled.
  }
}

export default new WelcomePage();