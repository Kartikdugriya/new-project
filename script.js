const form = document.getElementById('form');
const username = document.getElementById('username');
const email    = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Username validation
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  // Email validation
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Email is not valid');
  } else {
    setSuccess(email);
  }

  // Password validation
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 6) {
    setError(password, 'Password must be at least 6 characters');
  } else {
    setSuccess(password);
  }

  // Confirm password validation
  if (password2Value === '') {
    setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
    setError(password2, 'Passwords do not match');
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return re.test(email.toLowerCase());
}