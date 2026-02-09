class BasePage {
  async click(element, timeout = 10000) {
    await element.waitForDisplayed();
    await element.click();
  }

  async type(element, text, timeout = 10000) {
    await element.waitForDisplayed();
    await element.setValue(text);
  }
}

export default BasePage;