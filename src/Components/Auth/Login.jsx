import React,{useState} from 'react';
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function LoginPage() {

    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
         const userCredential =  await signInWithEmailAndPassword(auth,email, password);
            console.log(userCredential);
            alert("Login successful" )
            navigate('/Home');

        }catch(e){

            alert("Error loggin in");
            console.log(e);
        }

    }

  return (
    <div className="container">
      <div className="auth-box">
        <h2>Login</h2>
        <form className='auth-form' onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required 
                   placeholder="Enter your valid Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}        
                   required 
                   placeholder='Enter your Password'/>
          </div>
          <button type="submit">Login</button>
         <p> No account yet? SignUp <Link to="/SignUp">here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
