
import React, { useState } from 'react';
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSignUp = async (e) =>{
        e.preventDefault();
        try{
           const userCredential = await createUserWithEmailAndPassword(auth,email, password);
            alert("User Account created");
            navigate('/Login');
            console.log(userCredential);

        }catch (error){
            alert("Error in creating Account");
            console.log(error.message);

        }

    }
  return (
    <div className="container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="Enter Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)}
                   required 
                   placeholder='Create your Password'/>
          </div>
          {/* <div className="input-group">
            <label htmlFor="password-confirm">Confirm Password</label>
            <input type="password" id="password" name="password" required placeholder='Re-enter Password'/>
          </div> */}
          <button type="submit">Sign-Up</button>
         <p> Already have anaccount yet? login <Link to="/Login">here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
