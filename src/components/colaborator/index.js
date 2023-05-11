import './colaborator.css'
import {TiDelete} from 'react-icons/ti'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
const Colaborator = (props) =>
{
    const {name, job, photo, team, id, fav} = props.data
    const { color, deleteColaborator, like } = props

    return <div className='colaborators'>
        <TiDelete className='eliminate' onClick={() => deleteColaborator(id)} />
        <div className='head' style={{backgroundColor: color}}>
            <img src={photo} alt={name}/>
        </div>
        <div className='info'>
            <h4>{name}</h4>
            <h5>{job}</h5>
            { fav ? <AiFillHeart color='red' onClick={() => like(id)} />: <AiOutlineHeart onClick={() => like(id)}/> }
        </div>
        
    </div>
}

export default Colaborator