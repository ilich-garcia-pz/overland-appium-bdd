const byResourceId = (id) => `android=new UiSelector().resourceIdMatches(".*${id}$")`;
const byContentDesc = (desc) => `android=new UiSelector().description("${desc}")`;
const byClassAndTextContains = (className, text) => `android=new UiSelector().className("${className}").textContains("${text}")`;

export const selectors = {
  welcomeTitleText: byResourceId('welcome_title_text'),
  welcomeNameInput: byResourceId('welcome_name_input'),
  welcomeBusinessNameInput: byResourceId('welcome_business_name_input'),
  welcomePhoneInput: byResourceId('welcome_phone_input'),
  welcomeEmailInput: byResourceId('welcome_email_input'),
  welcomeMailingAddressInput: byResourceId('welcome_mailing_address_input'),
  welcomePhysicalAddressInput: byResourceId('welcome_physical_address_input'),
  welcomeNextButton: byContentDesc('Next'),
  welcomeNameError: byResourceId('welcome_name_error'),
  welcomeBusinessNameError: byResourceId('welcome_business_name_error'),
  welcomePhoneError: byResourceId('welcome_phone_error'),
  welcomeEmailError: byResourceId('welcome_email_error'),
  welcomeMailingAddressError: byResourceId('welcome_mailing_address_error'),
  welcomePhysicalAddressError: byResourceId('welcome_physical_address_error'),
};