// import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {   
    const placeholderModificado= `${props.placeholder}...`

    // Destructuracion del los inputs
    const { type = "text"}= props //En caso de que los inputs sean indefinidos( no tengan), agregarles el tipo texto
    console.log(type)

    const manejarCambio = (e) => {        
        props.actualizarValor(e.target.value)
    }


    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
    />
            </div>
}

export default Campo