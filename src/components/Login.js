import React,{useState} from 'react';
import {auth } from '../config/Config';
import {Link} from 'react-router-dom'

export const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login =  (e)=>{
      e.preventDefault();

      auth.signInWithEmailAndPassword(email,password).then(()=>{
          setEmail('');
          setPassword('');
          setError('');
          props.history.push('/');
      }).catch(err =>
        console.log(err.message));
  }


  return (
    <div className= 'container'>
        <br/>
        <h2> Login </h2>
        <br/>

        <form autoComplete="off" className="form-group" onSubmit={login}>
            <label htmlFor="Email">Email</label>
            <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <br/>

            <label htmlFor="Password">Password</label>
            <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}/>
              <br/>

              <button type="submit" classsName='btn btn-success btn-md mybtn'>Log In</button>
        </form>

     {error && <div className='error-msg'>}{error}</div>}
     <br />
     <span>Don't have an account?
        <Link to="signup"> Signup Here</Link>
     </span>
    </div>
  )
}
