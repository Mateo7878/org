import "./text-field.css"

const TextField = (props) =>
{   
    const modifiedPlaceholder = `${props.placeholder}...`
    
    const managementChange = (e) => 
    {
        props.setValues(e.target.value)
    }
    
    return <div className="text-field">
        <label>{props.title}</label>
        <input placeholder= {modifiedPlaceholder} 
            required={props.required}
            value={props.values}
            onChange={managementChange}
        />
    </div>
}

export default TextField