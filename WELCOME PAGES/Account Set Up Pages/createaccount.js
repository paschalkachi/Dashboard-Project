// const signUp = `
// <div class="container">
// 	<div class="header text-center">
// 		<h2>Create Account</h2>
// 	</div>
	
// 	<form id="form" class="form">
// 		<div class="form-control">
// 			<label for="username">Username</label>
// 			<input type="text" name="username" placeholder="florinpop17" id="username" />
// 			<i class="fas fa-check-circle"></i>
// 			<i class="fas fa-exclamation-circle"></i>
// 			<small>Error message</small>
// 		</div>

// 	<div class="form-control">
// 	<label for="username">Email</label>
// 	<input type="email" name="email" placeholder="a@florin-pop.com" id="email" />
// 	<i class="fas fa-check-circle"></i>
// 	<i class="fas fa-exclamation-circle"></i>
// 	<small>Error message</small>
// 	</div>

// 	<!-- First Password -->
// 	<div class="form-control">
//   	<label for="password">Password</label>
// 	<div class="input-wrapper">
//     <input type="password" name="password" placeholder="Password" id="password" />
// 	<span class="eye-toggle eye-1">
//       <ion-icon name="eye" id="eye-icon-1" class="eye-icon display:none"></ion-icon>
//       <ion-icon name="eye-off" id="eye-off-icon-1" class="eye-icon"></ion-icon>
//     </span>
//   </div>

//   <i class="fas fa-check-circle"></i>
//   <i class="fas fa-exclamation-circle"></i>
//   <small>Error message</small>
// </div>


// 	<!-- Second Password -->
// 		<div class="form-control">
// 			<label for="username">Password check</label>
			
// 		<div class="input-wrapper">
//     		<input type="password" name="password2" placeholder="Password" id="password2" />
//     		<span class="eye-toggle">
//       			<ion-icon name="eye" id="eye-icon-2" class="eye-icon display:none"></ion-icon>
//       			<ion-icon name="eye-off" id="eye-off-icon-2" class="eye-icon"></ion-icon>
// 			</span>
//   		</div>

// 			<i class="fas fa-check-circle"></i>
// 			<i class="fas fa-exclamation-circle"></i>
// 			<small>Error message</small>
// 		</div>

// 		<button class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-sm tracking-wide hover:bg-blue-700 transition duration-300" id="get-started">
//         Sign Up
//       </button>
// 	</form>
// </div>
// `;

// export default signUp;

const signUp = `
<div class="container mx-auto max-w-full sm:max-w-md md:max-w-lg p-4 border-[3px] border-solid border-gray-800 rounded-lg shadow-md bg-white">
  <div class="header text-center mb-4">
    <h2 class="text-2xl font-bold">Create Account</h2>
  </div>
  <form id="form" class="form space-y-4">
    <div class="form-control">
      <label for="username" class="block mb-1">Username</label>
      <input type="text" name="username" placeholder="florinpop17" id="username"
        class="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small class="text-red-500"></small>
    </div>

    <div class="form-control">
      <label for="email" class="block mb-1">Email</label>
      <input type="email" name="email" placeholder="a@florin-pop.com" id="email"
        class="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small class="text-red-500"></small>
    </div>

    <!-- First Password -->
    <div class="form-control">
      <label for="password" class="block mb-1">Password</label>
      <div class="input-wrapper flex items-center">
        <input type="password" name="password" placeholder="Password" id="password"
          class="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <span class="eye-toggle eye-1 ml-2">
          <ion-icon name="eye" id="eye-icon-1" class="eye-icon" style="display:none"></ion-icon>
          <ion-icon name="eye-off" id="eye-off-icon-1" class="eye-icon"></ion-icon>
        </span>
      </div>
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small class="text-red-500"></small>
    </div>

    <!-- Second Password -->
    <div class="form-control">
      <label for="password2" class="block mb-1">Password check</label>
      <div class="input-wrapper flex items-center">
        <input type="password" name="password2" placeholder="Password" id="password2"
          class="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <span class="eye-toggle ml-2">
          <ion-icon name="eye" id="eye-icon-2" class="eye-icon" style="display:none"></ion-icon>
          <ion-icon name="eye-off" id="eye-off-icon-2" class="eye-icon"></ion-icon>
        </span>
      </div>
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small class="text-red-500"></small>
    </div>

    <button class="w-full py-2 mt-4 bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transition" id="signup-btn">
      Sign Up
    </button>
  </form>
</div>
`;

export default signUp;