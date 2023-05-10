import './footer.css'

const Footer = () =>
{
    return <footer className='footer' style={{backgroundImage: 'url(/img/footer.png)'}}>
        <div className='redes'>
            <a href='https://facebook.com'>
                <img src='/img/facebook.png' alt='Facebook'></img>
            </a>
            <a href='https://twitter.com'>
                <img src='/img/twitter.png' alt='Twitter'></img>
            </a>
            <a href='https://instagram.com'>
                <img src='/img/instagram.png' alt='Instagram'></img>
            </a>
        </div>
        <img src='/img/Logo.png' alt='logo'></img>
        <strong>Desarrollado por José Pablo</strong>

    </footer>
}

export default Footer