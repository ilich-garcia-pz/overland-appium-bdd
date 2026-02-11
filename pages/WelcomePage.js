import BasePage from './BasePage';
import { selectors } from '../selectors/android/welcome.selectors';

class WelcomePage extends BasePage {
  get welcomeNameInput() {
    return $(selectors.welcomeNameInput);
  }

  get welcomeBusinessNameInput() {
    return $(selectors.welcomeBusinessNameInput);
  }

  async enterName(name) {
    await this.type(this.welcomeNameInput, name);
  }

  async enterBusinessName(businessName) {
    await this.type(this.welcomeBusinessNameInput, businessName);
  }
}

export default new WelcomePage();