import BasePage from './BasePage';
import selectors from '../selectors/android/login.selectors';

class LoginPage extends BasePage {
  get username() {
    return $(selectors.usernameInput);
  }

  get password() {
    return $(selectors.passwordInput);
  }

  get loginBtn() {
    return $(selectors.loginButton);
  }

  async login(user, pass) {
    await this.type(this.username, user);
    await this.type(this.password, pass);
    await this.click(this.loginBtn);
  }
}

export default new LoginPage();