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

  get welcomeNameError() {
    return $(welcomeSelectors.welcomeNameError);
  }

  get welcomeBusinessNameError() {
    return $(welcomeSelectors.welcomeBusinessNameError);
  }

  get welcomePhoneNumberError() {
    return $(welcomeSelectors.welcomePhoneNumberError);
  }

  get welcomeEmailError() {
    return $(welcomeSelectors.welcomeEmailError);
  }

  get welcomeMailingAddressError() {
    return $(welcomeSelectors.welcomeMailingAddressError);
  }

  get welcomePhysicalAddressError() {
    return $(welcomeSelectors.welcomePhysicalAddressError);
  }

  async enterName(name) {
    await this.type(this.welcomeNameInput, name);
  }

  async enterBusinessName(businessName) {
    await this.type(this.welcomeBusinessNameInput, businessName);
  }

  async enterPhoneNumber(phoneNumber) {
    await this.type(this.welcomePhoneNumberInput, phoneNumber);
  }

  async enterEmail(email) {
    await this.type(this.welcomeEmailInput, email);
  }

  async enterMailingAddress(mailingAddress) {
    await this.type(this.welcomeMailingAddressInput, mailingAddress);
  }

  async selectAddressSuggestionForInput(inputElement, addressText) {
    if (!inputElement) {
      throw new Error('Input element is required to select a Google Places suggestion.');
    }

    if (typeof addressText !== 'string') {
      throw new Error('Address text must be a string to select a Google Places suggestion.');
    }

    const trimmedAddress = addressText.trim();
    if (!trimmedAddress) {
      throw new Error('Address text is required to select a Google Places suggestion.');
    }

    const inputLocation = await inputElement.getLocation();
    const inputSize = await inputElement.getSize();
    const tapX = Math.round(inputLocation.x + (inputSize.width / 2));
    const tapY = Math.round(inputLocation.y + inputSize.height + 80);

    await driver.pause(900);
    await driver.execute('mobile: clickGesture', { x: tapX, y: tapY });
    await driver.pause(250);
  }

  async selectMailingAddressFromGooglePlacesSuggestions(addressText) {
    await this.selectAddressSuggestionForInput(this.welcomeMailingAddressInput, addressText);
  }

  async selectPhysicalAddressFromGooglePlacesSuggestions(addressText) {
    await this.selectAddressSuggestionForInput(this.welcomePhysicalAddressInput, addressText);
  }

  async enterPhysicalAddress(physicalAddress) {
    await this.type(this.welcomePhysicalAddressInput, physicalAddress);
  }

  async clickNextButton() {
    await this.click(this.welcomeNextButton);
  }

  async isWelcomeTitleDisplayed(expectedTitle) {
    const isVisible = await this.waitForDisplayedWithOptionalScroll(this.welcomeTitleText, {
      timeout: 20000,
      scrollIfNeeded: false
    });
    if (!isVisible) {
      return false;
    }

    const actualTitle = (await this.welcomeTitleText.getText()).trim();

    return actualTitle === expectedTitle.trim();
  }

  async areInputsVisible() {
    const inputs = [
      this.welcomeNameInput,
      this.welcomeBusinessNameInput,
      this.welcomePhoneNumberInput,
      this.welcomeEmailInput,
      this.welcomeMailingAddressInput,
      this.welcomePhysicalAddressInput
    ];

    for (const input of inputs) {
      const isVisible = await this.waitForDisplayedWithOptionalScroll(input, {
        timeout: 10000,
        scrollIfNeeded: true,
        maxScrolls: 5
      });
      if (!isVisible) {
        return false;
      }
    }

    return true;
  }

  async isNextButtonEnabled() {
    const isVisible = await this.waitForDisplayedWithOptionalScroll(this.welcomeNextButton, {
      timeout: 10000,
      scrollIfNeeded: true,
      maxScrolls: 6
    });
    if (!isVisible) {
      return false;
    }

    return await this.welcomeNextButton.isEnabled(); // Returns true if the button is enabled, false if disabled.
  }

  async hasNoValidationErrors() {
    const validationErrorSelectors = [
      welcomeSelectors.welcomeNameError,
      welcomeSelectors.welcomeBusinessNameError,
      welcomeSelectors.welcomePhoneNumberError,
      welcomeSelectors.welcomeEmailError,
      welcomeSelectors.welcomeMailingAddressError,
      welcomeSelectors.welcomePhysicalAddressError
    ];

    for (const errorSelector of validationErrorSelectors) {
      const elements = await $$(errorSelector);
      if (elements.length > 0) {
        const isVisible = await elements[0].isDisplayed();
        if (isVisible) {
          return false;
        }
      }
    }

    return true;
  }
}

export default new WelcomePage();