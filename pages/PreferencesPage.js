import BasePage from './BasePage';
import { preferencesSelectors } from '../selectors';

class PreferencesPage extends BasePage {
  get firstPreferenceButton() {
    return $(preferencesSelectors.firstPreferenceButton);
  }

  async selectFirstPreference() {
    await this.click(this.firstPreferenceButton);
  }
}

export default new PreferencesPage();