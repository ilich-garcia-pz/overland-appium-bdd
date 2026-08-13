class BasePage {
  async scrollOnce(direction = 'down') {
    const { width, height } = await driver.getWindowSize();

    return await driver.execute('mobile: scrollGesture', {
      left: Math.floor(width * 0.1),
      top: Math.floor(height * 0.2),
      width: Math.floor(width * 0.8),
      height: Math.floor(height * 0.6),
      direction,
      percent: 0.85
    });
  }

  async waitForDisplayedWithOptionalScroll(element, {
    timeout = 10000,
    maxScrolls = 5,
    scrollIfNeeded = true
  } = {}) {
    if (!scrollIfNeeded) {
      try {
        await element.waitForDisplayed({ timeout });
        return true;
      } catch {
        return false;
      }
    }

    const endTime = Date.now() + timeout;
    let downScrolls = maxScrolls;
    let upScrolls = maxScrolls;
    let direction = 'down';

    while (Date.now() < endTime && (downScrolls > 0 || upScrolls > 0)) {
      try {
        await element.waitForDisplayed({ timeout: 800 });
        return true;
      } catch {
        // continue scrolling
      }

      if (direction === 'down' && downScrolls > 0) {
        const canScrollMore = await this.scrollOnce('down');
        downScrolls -= 1;

        if (canScrollMore === false) {
          direction = 'up';
        }
      } else if (direction === 'up' && upScrolls > 0) {
        const canScrollMore = await this.scrollOnce('up');
        upScrolls -= 1;

        if (canScrollMore === false && downScrolls > 0) {
          direction = 'down';
        }
      }
    }

    return false;
  }

  async click(element, timeout = 10000) {
    const isVisible = await this.waitForDisplayedWithOptionalScroll(element, { timeout, scrollIfNeeded: true });
    if (!isVisible) {
      throw new Error('Element was not visible for click action.');
    }

    await element.click();
  }

  async type(element, text, timeout = 10000) {
    const isVisible = await this.waitForDisplayedWithOptionalScroll(element, { timeout, scrollIfNeeded: true });
    if (!isVisible) {
      throw new Error('Element was not visible for type action.');
    }

    await element.setValue(text);
  }
}

export default BasePage;