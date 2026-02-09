import BasePage from './BasePage';
import { welcomeNextBtn, welcomeFullNameInput } from '../selectors/android/login.selectors';

class WelcomePage extends BasePage {
  get welcomeNextBtn() {
    return $(welcomeNextBtn);
  }

  get welcomeFullNameInput() {
    return $(welcomeFullNameInput);
  }

  async enterFullName(fullName) {
    await this.type(this.welcomeFullNameInput, fullName);
  }
}

export default new WelcomePage();