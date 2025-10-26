
const loginForm = document.querySelector('.login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const passwordFields = loginForm.querySelectorAll('input[type="password"]');
    const password = passwordFields[0].value.trim();
    const confirmPassword = passwordFields[1].value.trim();
    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }


    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      alert(
        'Password must be at least 8 characters long, include:\n' +
        '- One uppercase letter\n' +
        '- One lowercase letter\n' +
        '- One number\n' +
        '- One special character (@$!%*?&)'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Registration successful!\nUsername: ' + username);
    window.location.href = 'login.html';
  });
}
