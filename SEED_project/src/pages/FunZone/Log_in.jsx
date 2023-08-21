import { Link } from "react-router-dom";
import { FZNavbar } from "./FZNavbar";
import './funZoneStyles/styleHomeZone.css'
export const Log_in = () => {

    return (
        <>
        <FZNavbar />
        <p>login</p>
        <div className="lglinks">
        <Link to={'mathPage'}>MATH Page</Link>
        <Link to={'gameView'}>SpacePage</Link>
        </div>
        
            
       
        </>
       
    )
};

export default Log_in;