// import { postRegisterUser } from '../api-calls/calls';

// import { state } from '../state/state';

async function loginUser(event) {
  event.preventDefault();
  event.stopPropagation();

  const response = await postLoginUser(
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
    }, 5000);
    return;
  }

  if (response.username) {
    const successDisplay = document.getElementById('success');
    successDisplay.innerHTML = `<i class="fa fa-check"></i> User 
    <span>${response.username}</span> is successfully logged in!`;
    successDisplay.style.display = 'block';

    setTimeout(() => {
      successDisplay.innerHTML = '';
      successDisplay.style.display = 'none';
    }, 3000);
  }

  console.log(response);

  // auth procedures
  // state.token = response.token;
  // state.username = response.username;
  // state.isLoggedIn = true;

  // TODO redirect to the chat page
  // console.log(state);
}

exports = { loginUser: loginUser };

/** delete below */

const postLoginUser = async (username, password) => {
  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, 1000);

  return await performPost('login', {
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
    console.error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
}
