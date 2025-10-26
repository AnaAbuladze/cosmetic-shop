
const loginForm = document.querySelector('.login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
      alert('Please fill in both fields.');
      return;
    }

    if (username === 'admin' && password === '1234') {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password!');
    }
  });
}
