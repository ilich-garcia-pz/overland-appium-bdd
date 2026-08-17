const byContentDesc = (desc) => `android=new UiSelector().description("${desc}")`;

export const selectors = {
  homeNavButton: byContentDesc('Home')
};