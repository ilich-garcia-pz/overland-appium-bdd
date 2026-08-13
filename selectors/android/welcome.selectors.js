const byResourceId = (id) => `android=new UiSelector().resourceIdMatches(".*${id}$")`;
const byContentDesc = (desc) => `android=new UiSelector().description("${desc}")`;
const byClassAndTextContains = (className, text) => `android=new UiSelector().className("${className}").textContains("${text}")`;
const byScrollIntoDesc = (desc) => `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${desc}"))`;
const byScrollIntoResourceId = (id) => `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceIdMatches(".*${id}$"))`;

export const selectors = {
  welcomeTitleText: byResourceId('welcome_title_text'),
  welcomeNameInput: byScrollIntoResourceId('welcome_name_input'),
  welcomeBusinessNameInput: byScrollIntoResourceId('welcome_business_name_input'),
  welcomePhoneNumberInput: byClassAndTextContains('android.widget.EditText', 'xxx-xxxx'),
  welcomeEmailInput: byClassAndTextContains('android.widget.EditText', '@'),
  welcomeMailingAddressInput: byClassAndTextContains('android.widget.EditText', 'TX-141'),
  welcomePhysicalAddressInput: byClassAndTextContains('android.widget.EditText', 'physical address'),
  welcomeNextButton: byScrollIntoDesc('Next')
};