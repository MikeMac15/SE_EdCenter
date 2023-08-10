import { Link } from "react-router-dom";

import HomePage from "./HomePage";
import "../Styles/Nav.css"

export const Navbar = () => {
const styles = {textDecoration: 'none', color: "#b9a892"}

    return (
        <div className="navbar">
            <h2>Soaring Eagle Education Center</h2>

            <img src="/pictures/SoaringEagleLogo.png" alt="Logo"/>

            <nav className="navLinks">
                <Link to={'/'} style={styles}>Home</Link>
                <Link to={'about'} style={styles}>About</Link>
                <Link to={'funzone'} style={styles}>FunZone</Link>
                <Link to={'?'} style={styles}>Contact</Link>

            </nav>
        </div>
    )
}
export default Navbar;