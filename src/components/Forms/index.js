import { useState } from "react"
import "./forms.css"
import Field from "../Field"
import Optionlist from "../Option-list"
import Button from "../Button"

const Forms = (props) =>
{
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const {registerColaborator, createTeam} = props
    const [title, changeTitle] = useState("")
    const [color, changeColor] = useState("")

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

        registerColaborator(sendData)
    }

    const managmentNewTeam = (ev) =>
    {
        ev.preventDefault()
        createTeam({title, color: color})
    }

    return <section className="forms">
        <form onSubmit={sendInfo}>
            <h2>Rellena el formulario para añadir al colaborador</h2>
            <Field title ="Nombre" placeholder ="Ingresar nombre" required value = {name} setValues = {setName}/>
            <Field title = "Puesto" placeholder = "Ingresar puesto" required value = {job} setValues = {setJob}/> 
            <Field title = "Foto" placeholder = "Ingresar enlace de foto" required value = {photo} setValues = {setPhoto}/>
            <Optionlist value = {team} setValues = {setTeam} teams = {props.team}/>       
            <Button text = "Crear"/>    
        </form>
        <form onSubmit={managmentNewTeam}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Field title ="Título" placeholder ="Ingresar título" required value = {title} setValues = {changeTitle}/>
            <Field title = "Color" placeholder = "Ingresar el color en Hex" value = {color} setValues = {changeColor} type = 'color'/>
            <Button text = "Registrar equipo"/>   
        </form> 
    </section>
}

export default Forms