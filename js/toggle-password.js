
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', function () {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });
}
