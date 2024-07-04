import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'; 

const Equipo = (props) => { 
    // Destructuracion
    const {colorPrimario, colorSecundario, titulo, id } = props.datos
    // es igual
    // const colorPrimario = props.datos.colorPrimario
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {borderColor: colorPrimario}
    // permite ocultar los equipos que no tengan colaboradoes
    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento) => { //union que reacciona  uando exista cambio en el input, cuando se cambie el color
                        actualizarColor(evento.target.value, id) //Obtenemos el valor del input que es el color, se envia el valor y el titulo
                    }}                
                />                                  
                
            <h3 style={ estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) =><Colaborador //Por cada colaborador que exista nos crea un nuevo componente colaborador
                    datos={colaborador} 
                    key={index}
                    colorPrimario={colorPrimario} 
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    /> )
                }            
            </div>
            </section>
        }
    </>
}

export default Equipo

