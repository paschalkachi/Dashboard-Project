const dashBoard = `
             <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
<div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
<path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
<path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
<path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
</svg>
</div>
<div class="p-4 text-right">
<p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Money</p>
<h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
</div>
<div class="border-t border-blue-gray-50 p-4">
<p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
<strong class="text-green-500">+55%</strong>&nbsp;than last week
</p>
</div>
</div>
<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
<div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
<path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
</svg>
</div>
<div class="p-4 text-right">
<p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Users</p>
<h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
</div>
<div class="border-t border-blue-gray-50 p-4">
<p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
<strong class="text-green-500">+3%</strong>&nbsp;than last month
</p>
</div>
</div>
<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
<div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
<path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
</svg>
</div>
<div class="p-4 text-right">
<p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
<h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
</div>
<div class="border-t border-blue-gray-50 p-4">
<p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
<strong class="text-red-500">-2%</strong>&nbsp;than yesterday
</p>
</div>
</div>
<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
<div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
</svg>
</div>
<div class="p-4 text-right">
<p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Sales</p>
<h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
</div>
<div class="border-t border-blue-gray-50 p-4">
<p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
<strong class="text-green-500">+5%</strong>&nbsp;than yesterday
</p>
</div>
</div>
</div>

<div class="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
<div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
<div>
<h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Projects</h6>
<p class="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-4 w-4 text-blue-500">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
  </svg>
  <strong>30 done</strong> this month
</p>
</div>
<button aria-expanded="false" aria-haspopup="menu" id=":r5:" class="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
<span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
  </svg>
</span>
</button>
</div>
<div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
<table class="w-full min-w-[640px] table-auto">
<thead>
  <tr>
    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
    </th>
    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
    </th>
    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
      <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="flex items-center gap-4">
        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
      </div>
    </td>
    
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="w-10/12">
        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
          <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style="width: 60%;"></div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="flex items-center gap-4">
        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add Progress Track</p>
      </div>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="w-10/12">
        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
          <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style="width: 10%;"></div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="flex items-center gap-4">
        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix Platform Errors</p>
      </div>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="w-10/12">
        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
          <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style="width: 100%;"></div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="flex items-center gap-4">
        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch our Mobile App</p>
      </div>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="w-10/12">
        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
          <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style="width: 100%;"></div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="flex items-center gap-4">
        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add the New Pricing Page</p>
      </div>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
    </td>
    <td class="py-3 px-5 border-b border-blue-gray-50">
      <div class="w-10/12">
        <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
        <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
          <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style="width: 25%;"></div>
        </div>
      </div>
    </td>
  </tr>
  
</tbody>
</table>
</div>
</div>
</div>
 
`;

const signUp = `
<div class="container mx-auto border-[3px] border-solid border-gray-800">
<div class="header text-center">
		<h2>Create Account</h2>
	</div>
	
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Username</label>
			<input type="text" name="username" placeholder="florinpop17" id="username" />
			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>

	<div class="form-control">
	<label for="username">Email</label>
	<input type="email" name="email" placeholder="a@florin-pop.com" id="email" />
	<i class="fas fa-check-circle"></i>
	<i class="fas fa-exclamation-circle"></i>
	<small>Error message</small>
	</div>

	<!-- First Password -->
	<div class="form-control">
  	<label for="password">Password</label>
	<div class="input-wrapper">
    <input type="password" name="password" placeholder="Password" id="password" />
	<span class="eye-toggle eye-1">
      <ion-icon name="eye" id="eye-icon-1" class="eye-icon display:none"></ion-icon>
      <ion-icon name="eye-off" id="eye-off-icon-1" class="eye-icon"></ion-icon>
    </span>
  </div>

  <i class="fas fa-check-circle"></i>
  <i class="fas fa-exclamation-circle"></i>
  <small>Error message</small>
</div>


	<!-- Second Password -->
		<div class="form-control">
			<label for="username">Password check</label>
			
		<div class="input-wrapper">
    		<input type="password" name="password2" placeholder="Password" id="password2" />
    		<span class="eye-toggle">
      			<ion-icon name="eye" id="eye-icon-2" class="eye-icon display:none"></ion-icon>
      			<ion-icon name="eye-off" id="eye-off-icon-2" class="eye-icon"></ion-icon>
			</span>
  		</div>

			<i class="fas fa-check-circle"></i>
			<i class="fas fa-exclamation-circle"></i>
			<small>Error message</small>
		</div>

		<button class="bg-gradient-to-tr from-blue-600 to-blue-400
     text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40">Submit</button>
	</form>
  </div>
`;

const signIn = `
<div class="container mx-auto border-[3px] border-solid border-gray-800;" >
  <div class="header text-center">
    <h2>Sign In</h2>
  </div>
  <form id="signin-form" class="form">
    <div class="form-control">
      <label for="signin-username">Username</label>
      <input type="text" name="username" placeholder="yourusername" id="signin-username" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <label for="signin-password">Password</label>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password" id="signin-password" />
        <span class="eye-toggle eye-1">
          <ion-icon name="eye" id="signin-eye-icon-1" class="eye-icon" style="display:none"></ion-icon>
          <ion-icon name="eye-off" id="signin-eye-off-icon-1" class="eye-icon"></ion-icon>
        </span>
      </div>
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <label for="signin-password2">Password check</label>
      <div class="input-wrapper">
        <input type="password" name="password2" placeholder="Password" id="signin-password2" />
        <span class="eye-toggle">
          <ion-icon name="eye" id="signin-eye-icon-2" class="eye-icon" style="display:none"></ion-icon>
          <ion-icon name="eye-off" id="signin-eye-off-icon-2" class="eye-icon"></ion-icon>
        </span>
      </div>
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <button type="submit" class="bg-gradient-to-tr from-blue-600 to-blue-400 
    text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40">Sign In</button>
  </form>
</div>
`;

render(dashBoard);

function render(e) {
  document.querySelector('.main-container').innerHTML = e;

}

// Dashboard Event listeners
document.querySelector('#dashboard-btn').addEventListener('click', () => {
  render(dashBoard);
  closeSidebar(); //closes the sidebar
});


document.querySelector('#dashboard-link').addEventListener('click', () => {
  render(dashBoard);
});

// SIGN UP FORM SETUP
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
    checkInputs();
    const formData = new FormData(form);
    const res = Object.fromEntries(formData);
    const payload = JSON.stringify(res);
    console.log(payload);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => console.log(res));
  });

  function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
    } else {
      setSuccessFor(username);
    }

    if(emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }

    if(passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
    }  else if(passwordValue.length < 7) {
      setErrorFor(password, 'Password must be at least 7 characters');
    } else{
      setSuccessFor(password);
    }

    if(password2Value === '') {
      setErrorFor(password2, 'Password2 cannot be blank');
    } else if(passwordValue !== password2Value) {
      setErrorFor(password2, 'Passwords does not match');
    } else{
      setSuccessFor(password2);
    }
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

  // Password 1 Toggle
  eyeOffIcon1.addEventListener("click", e => {
    e.preventDefault();
    if (password.type === "password") {
      password.type = "text";
      eyeOffIcon1.style.display = "none";
      eyeIcon1.style.display = "inline";
    }
  });
  eyeIcon1.addEventListener("click", e => {
    e.preventDefault();
    if (password.type === "text") {
      password.type = "password";
      eyeIcon1.style.display = "none";
      eyeOffIcon1.style.display = "inline";
    }
  });

  // Password 2 Toggle
  eyeOffIcon2.addEventListener("click", e => {
    e.preventDefault();
    if (password2.type === "password") {
      password2.type = "text";
      eyeOffIcon2.style.display = "none";
      eyeIcon2.style.display = "inline";
    }
  });
  eyeIcon2.addEventListener("click", e => {
    e.preventDefault();
    if (password2.type === "text") {
      password2.type = "password";
      eyeIcon2.style.display = "none";
      eyeOffIcon2.style.display = "inline";
    }
  });
}

// Sign up event listener
document.querySelector('#sign-up').addEventListener('click', () => {
  render(signUp);
  setupSignUpForm();
  closeSidebar(); //closes the sidebar 
});


// SIGN IN FORM SETUP
function setupSignInForm() {
  const form = document.getElementById('signin-form');
  const username = document.getElementById('signin-username');
  const password = document.getElementById('signin-password');
  const password2 = document.getElementById('signin-password2');
  const eyeIcon = document.getElementById("signin-eye-icon-1");
  const eyeOffIcon = document.getElementById("signin-eye-off-icon-1");
  const eyeIcon2 = document.getElementById("signin-eye-icon-2");
  const eyeOffIcon2 = document.getElementById("signin-eye-off-icon-2");

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
    } else {
      setSuccessFor(username);
    }

    if (passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 7) {
      setErrorFor(password, 'Password must be at least 7 characters');
    } else {
      setSuccessFor(password);
    }

    if (password2Value === '') {
      setErrorFor(password2, 'Password check cannot be blank');
    } else if (password2Value !== passwordValue) {
      setErrorFor(password2, 'Passwords do not match');
    } else {
      setSuccessFor(password2);
    }
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

  // Eye toggles
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

// Sign in event listener
document.querySelector('#sign-in').addEventListener('click', () => {
  render(signIn);
  setupSignInForm();
  closeSidebar(); //closes the sidebar 
});

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle sidebar functionality
const sidebar = document.getElementById('sidebar');
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  toggleSidebar();
});

document.getElementById('sidebar-close-btn').addEventListener('click', () => {
  closeSidebar();
});

function toggleSidebar() {
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('-translate-x-80');
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-80');
  sidebar.classList.remove('translate-x-0');
}
