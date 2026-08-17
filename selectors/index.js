import { selectors as preferencesSelectors } from './android/preferences.selectors';
import { selectors as welcomeSelectors } from './android/welcome.selectors';
import { selectors as homeSelectors } from './android/home.selectors';

const platform = driver.capabilities.platformName;

const androidSelectors = {
  ...welcomeSelectors,
  ...preferencesSelectors,
  ...homeSelectors
};

const iOSSelectors = {
  // ...iosWelcomeSelectors,
  // ...iosPreferencesSelectors,
};

export const getSelector = (selectorKey) => {
  const selectors = {
    android: androidSelectors,
    // ios: iosSelectors,
  };
  return selectors[platform.toLowerCase()][selectorKey];
};

// Export selectors by page to import directly.
export { welcomeSelectors, preferencesSelectors, homeSelectors };