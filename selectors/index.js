const platform = driver.capabilities.platformName;

const androidSelectors = {
  ...require('./android/login.selectors').selectors,
  ...require('./android/welcome.selectors').selectors
};

const iOSSelectors = {
  ...require('./ios/login.selectors').selectors
};

export const getSelector = (selectorKey) => {
  const selectors = {
    'android': androidSelectors,
    'ios': iOSSelectors
  };
  return selectors[platform.toLowerCase()][selectorKey];
};

// Exportar selectores por página para importación directa
export { selectors as loginSelectors } from './android/login.selectors';
export { selectors as welcomeSelectors } from './android/welcome.selectors';