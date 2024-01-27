"use client";
import Link from "next/link";
import { useState } from "react";
import formStyles from "@/styles/formStyles.module.css";

const Registro = ()=>{
    return(
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleRegister = () =>{
        console.log('Login con correo: ${email} y contraseña: ${password}');
        
    }
    return(
        <div>
            <div className="formStyles">
                <h2>Iniciar Registro</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e)=>{ e.preventDefault()
                    setEmail(e.target.value)
                }} /> <br />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e) =>{
                    e.preventDefault()
                setPassword(e.target.value)}}/>
                <button onClick={handleRegister}>Iniciar sesión</button>
                <p>No tienes cuenta? <Link href="#" passHref>Regístrate</Link></p>
                <button onClick={()=>{}}>Cerrar</button>
            </div>
        </div>
    )
}

export default Registro;