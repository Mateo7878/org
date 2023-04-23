import { useState } from "react"
import "./forms.css"
import "../Text-Field"
import TextField from "../Text-Field"
import Optionlist from "../Option-list"
import Button from "../Button"
const Forms = (props) =>
{
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const sendInfo = (ev) =>
    {
        ev.preventDefault();

        let sendData = 
        {
            name,
            job,
            photo, 
            team
        }
    }

    return <section className="forms">
        <form onSubmit={sendInfo}>
            <h2>Rellena el formulario para añadir al colaborador</h2>
            <TextField title ="Nombre" placeholder ="Ingresar nombre" required value = {name} setValues = {setName}/>
            <TextField title = "Puesto" placeholder = "Ingresar puesto" required value = {job} setValues = {setJob}/> 
            <TextField title = "Foto" placeholder = "Ingresar enlace de foto" required value = {photo} setValues = {setPhoto}/>
            <Optionlist value = {team} setValues = {setTeam} teams = {props.team}/>       
            <Button text = "Crear"/>    
        </form>
    </section>
}

export default Forms