import BasePage from './BasePage';
import { preferencesSelectors } from '../selectors';

class PreferencesPage extends BasePage {
  // Getters.
  get titleText() {
    return $(preferencesSelectors.titleText);
  }

  get dairyCattleCheckbox() {
    return $(preferencesSelectors.dairyCattleCheckbox);
  }

  get beefAndFeedersCheckbox() {
    return $(preferencesSelectors.beefAndFeedersCheckbox);
  }

  get videoAuctionCheckbox() {
    return $(preferencesSelectors.videoAuctionCheckbox);
  }

  get liveAuctionCheckbox() {
    return $(preferencesSelectors.liveAuctionCheckbox);
  }

  get dairyDispersalCheckbox() {
    return $(preferencesSelectors.dairyDispersalCheckbox);
  }

  get equipmentCheckbox() {
    return $(preferencesSelectors.equipmentCheckbox);
  }

  get allCheckbox() {
    return $(preferencesSelectors.allCheckbox);
  }

  get getStartedButton() {
    return $(preferencesSelectors.getStartedButton);
  }

  // Functions.

  async clickDairyCattleCheckbox() {
    await this.click(this.dairyCattleCheckbox);
  }

  async clickBeefAndFeedersCheckbox() {
    await this.click(this.beefAndFeedersCheckbox);
  }

  async clickVideoAuctionCheckbox() {
    await this.click(this.videoAuctionCheckbox);
  }

  async clickLiveAuctionCheckbox() {
    await this.click(this.liveAuctionCheckbox);
  }

  async clickDairyDispersalCheckbox() {
    await this.click(this.dairyDispersalCheckbox);
  }

  async clickEquipmentCheckbox() {
    await this.click(this.equipmentCheckbox);
  }

  async clickAllCheckbox() {
    await this.click(this.allCheckbox);
  }

  async clickGetStartedButton() {
    await this.click(this.getStartedButton);
  }

  async isTitleDisplayed(expectedTitle) {
    const isVisible = await this.waitForDisplayedWithOptionalScroll(this.titleText, {
      timeout: 20000,
      scrollIfNeeded: false
    });
    if (!isVisible) {
      return false;
    }

    const actualTitle = (await this.titleText.getText()).trim();

    return actualTitle === expectedTitle.trim();
  }

  async selectFirstPreference() {
    await this.click(this.dairyCattleCheckbox);
  }
}

export default new PreferencesPage();