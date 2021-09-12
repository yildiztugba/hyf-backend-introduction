// import { postRegisterUser } from '../api-calls/calls';

async function registerUser(event) {
  event.preventDefault();
  event.stopPropagation();

  if (event.target[1].value !== event.target[2].value) {
    const warningDisplay = document.getElementById('warning');
    warningDisplay.innerHTML = 'Passwords do not match!';
    warningDisplay.style.display = 'block';

    setTimeout(() => {
      warningDisplay.innerHTML = '';
      warningDisplay.style.display = 'none';
    }, 3000);
    return;
  }

  const response = await postRegisterUser(
    event.target[0].value,
    event.target[1].value
  );

  if (response.error) {
    const warningDisplay = document.getElementById('error');
    warningDisplay.innerHTML = `<i class="fa fa-times-circle"></i> ${response.error}`;
    warningDisplay.style.display = 'block';

    setTimeout(() => {
      warningDisplay.innerHTML = '';
      warningDisplay.style.display = 'none';
    }, 3000);
    return;
  }

  if (response.username) {
    const successDisplay = document.getElementById('success');
    successDisplay.innerHTML = `<i class="fa fa-check"></i> User <span>${response.username}</span> is successfully added!`;
    successDisplay.style.display = 'block';

    setTimeout(() => {
      successDisplay.innerHTML = '';
      successDisplay.style.display = 'none';
    }, 3000);
    return;
  }
}

exports = { registerUser };
// module.exports = registerUser;

/** delete below */

const postRegisterUser = async (username, password) => {
  const btn = document.getElementById('register-btn');
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, 2000);

  return await performPost('register', {
    username,
    password,
  });
};

async function performPost(path, body) {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': state.token === undefined ? '' : `Bearer ${state.token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
}
