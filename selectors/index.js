const platform = driver.capabilities.platformName;

export const getSelector = (selectorKey) => {
  const selectors = {
    'android': require('./android/login.selectors'),
    'ios': require('./ios/login.selectors')
  }

  return selectors[platform.toLowerCase()][selectorKey];
}