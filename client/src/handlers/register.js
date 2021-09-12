// import { postRegisterUser } from '../api-calls/calls';

function registerUser(event) {
  event.preventDefault();
  event.stopPropagation();

  // console.log('register user');
  // console.log(event.target[0].value);
  // console.log(event.target[1].value);
  // console.log(event.target[2].value);

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

  postRegisterUser(event.target[0].value, event.target[1].value);

  // const result = postRegisterUser(event.);
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

  console.log(response);

  if (!response.ok) {
    console.log(response);
    throw new Error(
      `HTTP error! status: ${response.status}\n-> ${URL}
      ${response.error}`
    );
  }
  const data = await response.json();

  return data;
}
