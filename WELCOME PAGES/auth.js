import welcomePage from './Account Set Up Pages/welcome.js';
import signUp from './Account Set Up Pages/createaccount.js';
import signIn from './Account Set Up Pages/login.js';

function render(e) {
  document.querySelector('.auth-container').innerHTML = e;
}

// Show the welcome page initially
// and attach the event listener to the button
function showWelcome() {
  render(welcomePage);
  // Attach the event listener after rendering
  const btn = document.querySelector('#get-started');
    btn.addEventListener('click', (e) => {
      e.preventDefault;
      render(signUp); // This will remove the welcome page and show only signUp
      setupSignUpForm();// Call the function to set up the sign-up form validation
      // render(signIn); // This will remove the signUp page and show only signIn
    });
}

showWelcome();

// Function to set up the sign-up form
function setupSignUpForm() {
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const eyeIcon1 = document.getElementById("eye-icon-1");
const eyeOffIcon1 = document.getElementById("eye-off-icon-1");
const eyeIcon2 = document.getElementById("eye-icon-2");
const eyeOffIcon2 = document.getElementById("eye-off-icon-2");


  if (!form) return; // If form not present, exit

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (checkInputs()) { // ✅ Only run this if validation passed
      const formData = new FormData(form);
      const res = Object.fromEntries(formData);

      // Remove password2 before saving
      delete res.password2;

      // Save user info to localStorage
      localStorage.setItem('userInfo', JSON.stringify(res));

      alert("User info saved to localStorage!");

      // Render the signIn form after successful sign up
      render(signIn);
      //set up sign-in form validation
      setupSignInForm();
    } 
  });

  function checkInputs() {
    let isValid = true; // Track form validity

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
      isValid = false;
    } else {
      setSuccessFor(username);
    }

    if (emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
      isValid = false;
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
      isValid = false;
    } else {
      setSuccessFor(email);
    }

    if (passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
      isValid = false;
    } else if (passwordValue.length < 7) {
      setErrorFor(password, 'Password must be at least 7 characters');
      isValid = false;
    } else {
      setSuccessFor(password);
    }

    if (password2Value === '') {
      setErrorFor(password2, 'Password check cannot be blank');
      isValid = false;
    } else if (passwordValue !== password2Value) {
      setErrorFor(password2, 'Passwords do not match');
      isValid = false;
    } else {
      setSuccessFor(password2);
    }

    return isValid; // ✅ Only true if all fields passed
  }

  function setErrorFor(input, message) {
    const formControl = input.closest('.form-control');
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.closest('.form-control');
    formControl.className = 'form-control success';
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  // Password toggle events
  eyeOffIcon1.addEventListener("click", e => {
    e.preventDefault();
    password.type = "text";
    eyeOffIcon1.style.display = "none";
    eyeIcon1.style.display = "inline";
  });
  eyeIcon1.addEventListener("click", e => {
    e.preventDefault();
    password.type = "password";
    eyeIcon1.style.display = "none";
    eyeOffIcon1.style.display = "inline";
  });

  eyeOffIcon2.addEventListener("click", e => {
    e.preventDefault();
    password2.type = "text";
    eyeOffIcon2.style.display = "none";
    eyeIcon2.style.display = "inline";
  });
  eyeIcon2.addEventListener("click", e => {
    e.preventDefault();
    password2.type = "password";
    eyeIcon2.style.display = "none";
    eyeOffIcon2.style.display = "inline";
  });
}


// SIGN IN FORM SETUP
function setupSignInForm() {
 
  const form = document.getElementById('signin-form');
  const username = document.getElementById('signin-username');
  const password = document.getElementById('signin-password');
  const eyeIcon = document.getElementById("signin-eye-icon-1");
  const eyeOffIcon = document.getElementById("signin-eye-off-icon-1");

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // 1. Validate inputs
    if (!checkInputs(usernameValue, passwordValue)) {
      return; // stop if invalid
    }

    // 2. Check localStorage
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    
    if (!storedUser) { 
      alert("No account found. Please sign up first.");
      return;
    }

    // 3. Verify credentials
    if (
      storedUser.username === usernameValue &&
      storedUser.password === passwordValue
    ) {
      alert("Login successful!");
      window.location.href = "../dashboard.html";
    } else {
      alert("Please sign up first.");
    }
  });


  function checkInputs(usernameValue, passwordValue) {
    let valid = true;

    if (usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
      valid = false;
    } else {
      setSuccessFor(username);
    }

    if (passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
      valid = false;
    } else if (passwordValue.length < 7) {
      setErrorFor(password, 'Password must be at least 7 characters');
      valid = false;
    } else {
      setSuccessFor(password);
    }

    return valid;
  }

  function setErrorFor(input, message) {
    const formControl = input.closest('.form-control');
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.closest('.form-control');
    formControl.className = 'form-control success';
  }

  // Eye toggle
  eyeOffIcon.addEventListener("click", e => {
    e.preventDefault();
    password.type = "text";
    eyeOffIcon.style.display = "none";
    eyeIcon.style.display = "inline";
  });
  eyeIcon.addEventListener("click", e => {
    e.preventDefault();
    password.type = "password";
    eyeIcon.style.display = "none";
    eyeOffIcon.style.display = "inline";
  });
}

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();





