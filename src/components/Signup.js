import React, { useState } from 'react'
import {auth, db} from '../config/Config'
import {Link} from 'react-router-dom'

export const Signup = (props) => {

    // Defiming state using useState hook

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


  const doSignup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
        db.collection('Users').doc(cred.user.uid).set({
          Name: name,
          Email: email,
          Password: password,
          ConfirmPassword: confirmpassword
        }).then(()=>{
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setError('');
          props.history.push('/login');
        }).catch(err=>setError(err.message));
    }).catch(err=>setError(err.message));
  }

  return (
      <div className='container'>

          <br/>
          <h2> Sign Up </h2>
          <br/>

          <form autoComplete="off" className="form-group" onSubmit={doSignup}>
              <label htmlFor="Name">Name</label>
              <br/>
              <input type="text" className='form-control' required
              onChange={(e)=>setName(e.target.value)} value={name}/>
              <br/>

              <label htmlFor="Email">Email</label>
              <br/>
              <input type="email" className='form-control' required
              onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <br/>

              <label htmlFor="Password">Password</label>
              <br/>
              <input type="password" className='form-control' required
              onChange={(e)=>setPassword(e.target.value)} value={password}/>
              <br/>

              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <br/>
              <input type="password" className='form-control' required
              onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmpassword}/>
              <br/>

              <button type="submit" classsName='btn btn-success btn-md mybtn'>Sign Up</button>
          </form>
          {error && <div className='error-msg'>}{error}</div>}
          <br />
          <span>Already have an account?
            <Link to="login"> Login Here</Link>
          </span>
      </div>
  )
}
