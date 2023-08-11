import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
//////////////////////////////////////////////
import HomeScene from '../threeHomeScene'
import "../Styles/HomeBase.css"
import TheTeam from "./AboutSEED/theTeam";
import About from "./AboutSEED/about";
import  Contact_us  from './AboutSEED/contact'
import "../Styles/Nav.css";
// import Navbar from './Navbar'
export const HomePage = () => {
    const about = useRef(null);
    const contact = useRef(null);
    const styles = {textDecoration: 'none', color: "#b9a892"};


    const created = ({scene}) => {
        scene.background = new THREE.Color('antiquewhite')
        console.log('created')
      }
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return(
        <>
        {/* /////////////////////////Navbar////////////////////// */}
            <div className="navbar">
            <h2>Soaring Eagle Education Center</h2>

            <img src="/pictures/SoaringEagleLogo.png" alt="Logo"/>

            <nav className="navLinks">
                <Link to={'/'} style={styles}>Home</Link>
                <Link onClick={() => scrollToSection(about)} style={styles}>About</Link>
                <Link to={'funzone'} style={styles}>FunZone</Link>
                <Link onClick={() => scrollToSection(contact)} style={styles}>Contact</Link>

            </nav>
        </div>
        {/* /////////////////////////Navbar////////////////////// */}



            <Canvas onCreated={created} >
                <HomeScene />
            </Canvas>

        <div className="home">

            <h1>Homepage</h1>

            <div ref={about}>
                <About />
            </div>
            
            <TheTeam />

            <div ref={contact}>
                <Contact_us />
            </div>
        
        </div>
        </>
    );
}

export default HomePage;