import { Card } from 'react-bootstrap'
import '../../Styles/AboutSE.css'
import '../../Styles/whatWeGot.css'
import Cards from './Cards'

export const About = () => {

    return (
        <>
            <div className="aboutSE">
                <img src="/pictures/IMG_3194.jpeg" alt="building pic" />
                <div className="aboutSE_text">
                    <h4>About Us.</h4>
                    <p>Soaring Eagle Educational Center offers educational services to help students improve grades and increase their confidence so they can maintain their grades.<br/><br/> SEEC is owned by Brenda VanSlyke, who has worked with children for 34 years, with 17 years specifically in education, and Shelley Lawrence, who has worked 29 years in education with credentials as an administrator.</p>
                </div>
            </div>

            <div className="whatWeGot">


                <div className="overview_title">
                    <h2>What we have to offer.</h2>
                </div>



            </div>
            <div className="cardsAbout">
            
                <Cards />

            </div>
        </>
    )
}
export default About;