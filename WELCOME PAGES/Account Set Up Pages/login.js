const signIn = `
<div class="container mx-auto max-w-full sm:max-w-md md:max-w-lg p-4 border-[3px] border-solid border-gray-800 rounded-lg shadow-md bg-white">
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
    
         <button type="submit" class="bg-gradient-to-tr from-blue-600 to-blue-400 
    text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40">Sign In
        </button>
  </form>
</div>
`;

export default signIn;
