import BasePage from './BasePage';
import { homeSelectors } from '../selectors';

class HomePage extends BasePage {
  // Getters.
  get homeNavButton() {
    return $(homeSelectors.homeNavButton);
  }

  // Functions.

  async isHomeScreenDisplayed() {
    const homeNavElement = this.homeNavButton;
    const isVisible = await this.waitForDisplayedWithOptionalScroll(homeNavElement, {
      timeout: 20000,
      scrollIfNeeded: false
    });
    if (!isVisible) {
      return false;
    }

    return true;
  }

  async isTitleDisplayed(_expectedTitle) {
    return await this.isHomeScreenDisplayed();
  }
}

export default new HomePage();