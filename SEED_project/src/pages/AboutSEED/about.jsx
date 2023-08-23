import { Card } from 'react-bootstrap'
import '../../Styles/AboutSE.css'
import '../../Styles/whatWeGot.css'
import Cards from './Cards'

export const About = () => {

    return (
        <>
            


            <div className="aboutSE">
                <img src="/pictures/sed.jpeg" alt="building pic" />
                <div className="aboutSE_text">
                    <h4>About Us.</h4>
                    <p>Soaring Eagle Educational Center offers educational services to help students improve grades and increase their confidence so they can maintain their grades.<br/><br/> SEEC is owned by Brenda VanSlyke, who has worked with children for 34 years, with 17 years specifically in education, and Shelley Lawrence, who has worked 29 years in education with credentials as an administrator.</p>
                </div>
            </div>

            <div className="whatWeGot">

            </div>





            <div className="cardsAbout">
                <div className="overview_title">
                        <h2>What we have to offer.</h2>
                    </div>
                <Cards />

            </div>

            <div className="afterCards">
                <div className="acGroup">
                    <h6>
    Empower your child's academic journey with our dedicated educational center. 

                    </h6>
                    <h6>
                        We partner with parents to provide the tools and guidance needed for your child's success.
                    </h6>
                    <h6>
    From study skills to navigating the complexities of education, we're here to support both you and your student every step of the way.
                    </h6>
                    <h5>
    Together, let's unlock a brighter future through learning.

                    </h5>

                    
                    
                </div>
            </div>
        </>
    )
}
export default About;