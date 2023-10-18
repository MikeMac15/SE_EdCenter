import { Card } from 'react-bootstrap'
import '../../Styles/AboutSE.css'
import '../../Styles/whatWeGot.css'
import Cards from './Cards'
import TheTeam from "./theTeam";

export const About = () => {

    return (
        <>
            


            <div className="aboutSE">
                <img src="/pictures/sed.jpeg" alt="building pic" />
                <div className="aboutSE_text">
                    <h4>About Us.</h4>
                    <p>Elevate your educational experience with Soaring Eagle Educational Center! Our mission is to empower students to excel academically, boost their self-assurance, and sustain their academic success.</p>

                    <p>At SEEC, we are led by a dynamic team of education experts, Brenda VanSlyke and Shelley Lawrence. With a combined experience of over six decades, Brenda has dedicated 34 years of her life to working with children, 17 of which have been spent in the field of education. Meanwhile, Shelley Lawrence brings her impressive 29 years of education experience, along with her credentials as an accomplished administrator, to the table.</p>

                    <p>When you choose Soaring Eagle Educational Center, you're selecting a pathway to enhanced learning, confidence, and academic achievement. Join us on this educational journey, where we believe in soaring to new heights!</p>
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


            <div className="ownersContainer">
                <div className="theTeam">
                

                    <TheTeam />
                </div>
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