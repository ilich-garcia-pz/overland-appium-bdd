import { selectors as preferencesSelectors } from './android/preferences.selectors';
import { selectors as welcomeSelectors } from './android/welcome.selectors';

const platform = driver.capabilities.platformName;

const androidSelectors = {
  ...welcomeSelectors,
  ...preferencesSelectors
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

// Exportar selectores por página para importación directa
export { welcomeSelectors, preferencesSelectors };
// export { selectors as preferencesSelectors } from './android/preferences.selectors';