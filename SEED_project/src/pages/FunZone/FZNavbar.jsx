import './funZoneStyles/exNav.css'

import { useNavigate, Link } from 'react-router-dom'

export const FZNavbar = () => {

    const navigate = useNavigate()
    const navToHome = () => navigate('/')
    
    const styles = {textDecoration: 'none'}

    return (

        <div className="FZNavbar">
           

            <img src="/pictures/SoaringEagleLogo.png" alt="Logo"/>

            <nav className="FZnavLinks">
                <Link to={'/'} style={styles} >Ed Center HomePage</Link>
                <Link to={'gameView'} style={styles} >GameView</Link>
                <Link to={'/funzone'} style={styles}>LogIn</Link>
                <Link to={'signup'} style={styles}>SignUp</Link>

            </nav>
        </div>

    )
}