import './colaborator.css'

const Colaborator = (props) =>
{
    const {name, job, photo, team} = props.data
    const { color } = props

    return <div className='colaborators'>
        <div className='head' style={{backgroundColor: color}}>
            <img src={photo} alt={name}/>
        </div>
        <div className='info'>
            <h4>{name}</h4>
            <h5>{job}</h5>
        </div>
        
    </div>
}

export default Colaborator