import React, { useState } from 'react'
import { auth } from "../Firebase";
import "./Home.css"
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {

    const [user, setUser] =useState({});

    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    })

  return (
    <div className='container'>
        {/* <h2>Hi! {auth.currentUser.email} </h2> */}
        <h2>Hi! {user.email} </h2>
        <h3>Thanks for trying it out</h3>
      <p>I am Janet Bello,a Frontend Developer ,building my strength in React</p>
      <p>I will be sharing my Portfolio with you soon, connect with me on Linkedln</p>


     <footer>

     </footer>
    </div>
  )
}
