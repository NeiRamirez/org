import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Para hacer el recorrido se usa el metodo map ->arreglo.map ((equipo, index) => {
    //     return <option></option>
    // })

    
    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" >Seleccionar equipo</option>
           {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}
        </select>
        {/* <select>
           {equipos.map( (equipo, index) => {
            return <option key={index}>{equipo}</option>
           } )}
        </select> */}
    </div>
}

export default ListaOpciones