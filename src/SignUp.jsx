import React from 'react' 

export default function Signup() {
  return (
    <>
      <div class="signUpForm">
        <form>
            <h2>Welcome To TasteTown🤝</h2>
            <p class="sub__title">Sign up now to get started</p>
            <input type="text" name="name" placeholder="Name" required/>
            <input type="text" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required/> 
            <button type="submit" name="submit">Sign Up</button>
            <p class="login">Already have an account? <a href="login.html">Login</a></p>
        </form>
    </div>
    </>
  )
}
 