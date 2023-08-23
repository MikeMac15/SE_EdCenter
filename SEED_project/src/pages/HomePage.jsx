import { Canvas } from '@react-three/fiber'
import { useRef} from 'react'
import { Link } from 'react-router-dom'
//////////////////////////////////////////////
import HomeScene from '../threeHomeScene'
import "../Styles/HomeBase.css"
import TheTeam from "./AboutSEED/theTeam";
import About from "./AboutSEED/about";
import  Contact_us  from './AboutSEED/contact'
import '../Styles/Nav.css'
import Cards from './AboutSEED/Cards'
import { Trusted } from './AboutSEED/trusted'


export const HomePage = () => {
    const about = useRef(null);
    const contact = useRef(null);
    const styles = {textDecoration: 'none', color: "#b9a892"};
    // scroll nav function
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return(
        <>
         {/*  /////////////////////////Navbar//////////////////////  */}
        <div className="navbarMain">
            <h2>Soaring Eagle Education Center</h2>
            <img src="/pictures/SoaringEagleLogo.png" alt="Logo"/>
            
            <nav className="navLinks">
                <Link to={'/'} style={styles}>Home</Link>
                <Link onClick={() => scrollToSection(about)} style={styles}>About</Link>
                <Link to={'funzone'} style={styles}>FunZone</Link>
                <Link onClick={() => scrollToSection(contact)} style={styles}>Contact</Link>
            </nav>
        </div>

                                  {/* R3F */}
        <div id="mainCanvas" style={{ width: '100vw', height: '55vh' }}>

            <Canvas  >
               <HomeScene />  {/* if smbtn clicked show spacepage */}
              
            </Canvas>
        </div>
                                {/* Homepage */}
             <Trusted /> {/* takeOut for prod.. */}

             <div className="moeInfo">
                <h3>Helping Children Soar To New Heights!</h3>
            </div>


            <div ref={about}>
                <About />
            </div>
            <div className="meetTheOwners">
                <h2>Meet the Owners.</h2>
            </div>
            <div className="theTeam">

                <TheTeam />
            </div>
        <div className="home">
            <div ref={contact}>
                <Contact_us />
            </div>
        </div>
        {/* <Cards /> */}
        </>
    );
}

export default HomePage;