import { homePage } from './components/home-page.component.js';
import { loginPageComponent } from './components/login-page.component.js';
import { loginUser } from './handlers/login.js';
import { registerUserLink } from './handlers/register.js';

const root = document.getElementById('root');
while (root.firstChild) {
  root.removeChild(root.firstChild);
}
const loginPage = loginPageComponent();

root.appendChild(loginPage);

document.getElementById('login-form').addEventListener('submit', loginUser);

document
  .getElementById('register-link-btn')
  .addEventListener('click', registerUserLink);

// async function startApplication() {
//   const root = document.getElementById('root');
//   root.innerHTML = '';
//   const res = await homePage();
//   root.append(res);
// }

// startApplication();
