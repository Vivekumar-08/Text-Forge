import React from 'react' 

export default function LogIn() {
  return (
    <>
        <div class="loginForm">
            <form>
                <h2>Welcome Back👍</h2>
                <p class="sub__title">Log in to your account</p>    
                <input type="text" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <a href="/forget" class="forget">forget password?</a>
                <button type="submit" name="submit">Log In</button>
                <p class="login">Don't have an account? <a href="signup.html">Sign Up</a></p>
            </form>
        </div>
    </>
  )
}
