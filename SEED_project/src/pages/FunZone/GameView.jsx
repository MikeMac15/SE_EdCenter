import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
////////////////////////////////////////////
import HomeZone from "./HomeZone";
// import { FZNavbar } from "./FZNavbar"
import './funZoneStyles/styleHomeZone.css';
import  NASAAPIPage  from "./NASAAPIPage";
import './funZoneStyles/NasaAPOD.css'
import { SchoolRoom } from "./SchoolRoom";
import HomeZoneNew from './HomeZoneNew'

export const GameView = () => {

    return (
        <>
            {/* <FZNavbar /> */}
                                    {/* R3F */}
            <div style={{width: '100vw', height: '100vh', position: "fixed"}} >
                <Canvas
                camera={{fov:75, position:[0.2,1,1]}}>
                    {/* <HomeZone/> */}
                    <HomeZoneNew />
                    {/* <SpacePage /> */}
                    <SchoolRoom  />
                </Canvas>            
            </div>
                                    {/* R3F */}
            {/* <Link to={'../mathpage'}>Math Page</Link>
            <h5>Science Page</h5> */}
        </>
    )
}

export default GameView;