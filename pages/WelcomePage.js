import BasePage from './BasePage';
import { welcomeSelectors } from '../selectors';

class WelcomePage extends BasePage {
  get welcomeNameInput() {
    return $(welcomeSelectors.welcomeNameInput);
  }

  get welcomeBusinessNameInput() {
    return $(welcomeSelectors.welcomeBusinessNameInput);
  }

  async enterName(name) {
    await this.type(this.welcomeNameInput, name);
  }

  async enterBusinessName(businessName) {
    await this.type(this.welcomeBusinessNameInput, businessName);
  }
}

export default new WelcomePage();