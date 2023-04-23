import './org.css'

const Org = (props) => {

    return <section className="orgSection">
        <h3 className='title'>Mi organización</h3>
        <img src="/img/addButton.png" alt = "add" onClick={props.changeShow}/>
    </section>


}

export default Org;