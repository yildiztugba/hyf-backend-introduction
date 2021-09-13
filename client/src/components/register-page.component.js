export const registerPageComponent = () => {
  const container = document.createElement('div');
  container.style = 'height:100%;';
  container.className = 'flex-container flex-column';

  container.innerHTML = `
    <form action="" id="register-form">
        <div>
            <label for="username">Username* : </label>
            <input type="text" id="username" placeholder="Username" name="username" required></input>
        </div>
        <div>            
            <label for="password">Password * : </label>
            <input type="password" id="password" placeholder="Password" name="password" required></input>
        </div>
        <div>
            <label for="confirm-password">Confirm Password * : </label>
            <input type="password" id="confirm-password" placeholder="Confirm Password" name="confirm-password" required></input>
                            
        </div>
        <div>
            <input type="submit" value="Submit">  
        </div>
    </form>`;

  const register = container.querySelector('#register');

  return container;
};
