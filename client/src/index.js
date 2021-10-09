import { insertOrUpdate } from './data-access/index.js';
import { homePage } from './presentation/components/home-page.component.js';
import { registerHandlers } from './presentation/listeners/index.js';

async function startApplication() {
  const root = document.getElementById('root');
  root.innerHTML = '';
  insertOrUpdate('username', prompt('Please enter your username'));
  const res = await homePage();
  root.append(res);
  registerHandlers();
}
startApplication();
