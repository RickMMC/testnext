"use client"
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [showMessage, setShowMessage] = useState(false)
    return(
        <div>
            <p>Haz hecho clic {counter} veces</p>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Haz click</button>
            <button onClick={()=>{
                setCounter(0)
            }}>RESET</button>
            <br />
        
    

            <button onClick={()=>
            setShowMessage(!showMessage)
            }>{!showMessage ? "Mostrar mensje" : "Ocultar mensaje" }</button>
            <br />

            {
             showMessage && <p>Hola mundo</p>
            }
        </div>
    );
};

export default Counter;