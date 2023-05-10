import './team.css'
import  Colaborator from "../colaborator";

const Team = (props) => 
{
    // Desestructuring
    const {color, secColor, job} = props.team
    const { colaborators } = props

    const colors = 
    {
        backgroundColor: secColor
    }

    const titleStyle = { borderColor: color }

    return <>
    { colaborators.length > 0 &&
                <section className = "team" style={colors}>
                <h3 style={titleStyle}>{job}</h3>
                <div className="colaborators">
                    {
                        colaborators.map((colaborator, index) =>  <Colaborator data={colaborator}
                        key = {index} color= {color}/> ) 
                    }   
                </div>
            </section>
    }
    </>
}

export default Team;