"use client"
import React, { useState } from 'react';
import Login from './Login';

const IndexPage = () => {
    const[showLogin, setShowLogin] = useState(false)
    const[showRegister, setShowRegister] = useState(false)

    const handleLoginClick= ()=> {
        setShowLogin(true)
    }

    const handleRegisterClick = ()=> {
        setShowRegister(true)
    }

    const handleCloseLogin= ()=> {
        setShowLogin(false)
    }
 
  return (
    <div>
        <button onClick={handleLoginClick}>Iniciar sesion</button><br />
        <button onClick={handleRegisterClick}>Registro</button>
        { showLogin && <Login onclose={handleCloseLogin} /> }
    </div>
  )
}

export default IndexPage;