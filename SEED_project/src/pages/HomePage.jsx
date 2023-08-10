import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
//////////////////////////////////////////////
import HomeScene from '../threeHomeScene'
import "../Styles/HomeBase.css"
import TheTeam from "./AboutSEED/theTeam";
import About from "./AboutSEED/about";
export const HomePage = () => {

    const created = ({scene}) => {
        scene.background = new THREE.Color('antiquewhite')
        console.log('created')
      }
    

    return(
        <>
        
        <Canvas onCreated={created} >
            <HomeScene />
        </Canvas>

        <h1>Homepage</h1>

        <About />
        <TheTeam />
        </>
    );
}

export default HomePage;