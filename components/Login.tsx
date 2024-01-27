"use client"
import Link from "next/link";
import { use, useState } from "react";
import formStyles from "@/styles/formStyles.module.css";

const Login = ({onclose})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleLogin = () =>{
        console.log('Login con correo: ${email} y contraseña: ${password}');
        
    }
    return(
        <div className={formStyles.modal}>
            <div className="modal-content">
                <h2>Iniciar sesion</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e)=>{ 
                    e.preventDefault()
                    setEmail(e.target.value)
                }} /> <br />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e) =>{
                    e.preventDefault()
                    setPassword(e.target.value)}}/>
                <button onClick={handleLogin}>Iniciar sesión</button>
                <p>No tienes cuenta? <Link href="/pages/registro" passHref>Regístrate</Link></p>
                <button onClick={onclose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Login;