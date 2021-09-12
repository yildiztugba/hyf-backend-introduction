// import { postRegisterUser } from '../api-calls/calls';

function registerUser(event) {
  event.preventDefault();
  event.stopPropagation();

  console.log('register user');
  console.log(event.target[0].value);
  console.log(event.target[1].value);
  console.log(event.target[2].value);

  postRegisterUser(event.target[0].value, event.target[1].value);

  // const result = postRegisterUser(event.);
}

exports = { registerUser };
// module.exports = registerUser;

/** delete below */

const postRegisterUser = async (username, password) => {
  console.log('frontend ', username, password);

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
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
}
