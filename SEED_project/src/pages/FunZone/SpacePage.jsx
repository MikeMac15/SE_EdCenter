
import { Canvas } from "@react-three/fiber";

import  NASAAPIPage  from "./NASAAPIPage";
import './funZoneStyles/NasaAPOD.css'

export const SpacePage = () => {

    return (
        <>
            {/* <FZNavbar /> */}
                                    {/* R3F */}
            <div style={{width: '100vw', height: '100vh', position: "fixed"}} >
                <Canvas
                camera={{fov:75, position:[0,0,3]}}>
                    
                    <NASAAPIPage />
                </Canvas>            
            </div>
                            
        </>
    )
}

export default SpacePage;