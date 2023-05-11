import "./field.css"

const Field = (props) =>
{   
    const modifiedPlaceholder = `${props.placeholder}...`
    const { type = 'text' } = props
    const managementChange = (e) => 
    {
        props.setValues(e.target.value)
    }
    
    return <div className={`field field-${type}`}>
        <label>{props.title}</label>
        <input placeholder= {modifiedPlaceholder} 
            required={props.required}
            value={props.values}
            onChange={managementChange}
            type = {type}
        />
    </div>
}

export default Field