import './team.css'
import  Colaborator from "../colaborator";
import hexToRgba from 'hex-to-rgba';

const Team = (props) => 
{
    // Desestructuring
    const {color, job, id} = props.team
    const { colaborators, deleteColaborator, changeColor, like } = props

    const colors = 
    {
        backgroundColor: hexToRgba(color, 0.6)
    }

    const titleStyle = { borderColor: color }

    return <>
    { colaborators.length > 0 &&
                <section className = "team" style={colors}>
                    <input
                    type='color'
                    className='inputColor'
                    value={hexToRgba(color, 0.6)}
                    onChange={(ev) => {
                        changeColor(ev.target.value, id)
                    }} />
                <h3 style={titleStyle}>{job}</h3>
                <div className="colaborators">
                    {
                        colaborators.map((colaborator, index) =>  <Colaborator data={colaborator}
                        key = {index} color= {color} deleteColaborator = {deleteColaborator} like = {like}/> ) 
                    }   
                </div>
            </section>
    }
    </>
}

export default Team;