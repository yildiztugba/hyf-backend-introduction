export const loginPage = () => {
  const container = document.createElement('div');
  container.className = 'flex-container flex-column';

  container.innerHTML = `
  <form action="/api/register" method="post">
  <div>
      <label for="username">Username* : </label>
      <input type="text" id="username" placeholder="Username" name="username" required></input>
  </div>
  <div>            
      <label for="password">Password * : </label>
      <input type="password" id="password" placeholder="Password" name="password" required></input>
  </div>
  <div>
      <input type="button" value="Register" id="register">
      <input type="submit" value="Submit">                
  </div>
</form>
  `;

  const register = container.querySelector('#register');
  register.addEventListener('click', () => {
    window.location.href = '/api/register';
  });

  return container;
};
