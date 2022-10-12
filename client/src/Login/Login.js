import React from 'react'
import './Login.css'

function Login() {
  return (
    <div id='login' class="container">
   <div className='form'>
        <form class="needs-validation"> 
        <h1>SIGN IN</h1>
          <div className='form-group'>
            <label for="text" class="form-label">Username:</label>
            <input type="text" class="form-control" id="input" placeholder="Enter your username"/>
            <div class="invalid-feedback">
                Please enter your username again
            </div>
          </div>
            <div className='form-group'>
              <label for="password" class="form-label">Password:</label>
              <input type="password" class="form-control" id="password"/>
              <div class="invalid-feedback">
                Please enter your password again
            </div>
            </div>
            
            <button type="submit" class="btn w-100">Submit</button>
          </form>
   </div> 
  
    </div>
  )
}

export default Login