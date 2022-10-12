
import { useState } from 'react';
import './App.css';

function App({setCurrentUser}) {
  const [username, setUsername]= useState(' ')
  const[password, setPassword]= useState(' ')
  const [errors,setErrors]= useState(' ')
  const [login,setLogin]= useState(' ')

  function onSubmit(e) {
    e.preventDefault();
    const user ={
      username, 
      password
    }
    fetch ('/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
   .then(res=>  {
    if (res.ok) {
      res.json().then(setCurrentUser)
    }
    else{
      res.json().then(e => setErrors(Object.entries(e.error).flat()))
    }
   })

  }
  return (
    <div class="container" id="form">
     <form onSubmit={onSubmit}>
     <div>
      <p>Register</p>
     </div>
  <div class="form-outline mb-4">
    
    <label class="form-label" for="form2Example1">Username:</label>
    <input type="text" id="form2Example1" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
  </div>
  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} />
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

 
  <button type="submit" class="btn btn-primary btn-block mb-4 w-100" value="Sign up">Sign up</button>
  {/* <input type="submit" value="login" onClick={()=> setLogin(true)} /> */}

  
  <div class="text-center">
    <p>Already have an account? <a href="#!">Sign in</a></p>
  
  </div>
</form>
    </div>
   
  );
}

export default App;
