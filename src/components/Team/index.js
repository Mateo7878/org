import './team.css'
import  Colaborator from "../colaborator";

const Team = (props) => 
{
    // Desestructuring
    const {color, secColor, job} = props.team

    const colors = 
    {
        backgroundColor: secColor
    }

    const titleStyle = { borderColor: color }

    return <section className = "team" style={colors}>
        <h3 style={titleStyle}>{job}</h3>
        <div className="colaborators">
           <Colaborator/>
           <Colaborator/>
           <Colaborator/>
           <Colaborator/>
        </div>
    </section>
}

export default Team;