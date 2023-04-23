import './option-list.css'

const Optionlist = (props) =>
{


    const managmentChange = (e) => 
    {
        props.setValues(e.target.value)
    }

    return <div className="option-list">
        <label>Equipos</label>
        
        <select value={props.value} onChange={managmentChange}>
        <option value = ""  defaultValue=""  hidden>Seleccionar Equipo</option>
            {props.teams.map((team, index) => {
                return <option key={index} value={team}>{team}</option>
            })}
        </select>
    </div>
}

export default Optionlist