import '../../Styles/TheTeam.css'
import { useState, useEffect } from 'react';

const TeamMember = ({name, role, imgSrc, fullName, content}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        
        const elem = document.querySelector(`.${name}`)
        if (elem) {
            const position = elem.getBoundingClientRect().top;
            setIsVisible(window.innerHeight / 1.5 > position);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        
        <div className={`team-member ${name}`}>
            <div className="about">

                <div className={`image ${name} ${isVisible ? 'push-left' : 'hidden'}`}>
                    <img src={imgSrc} alt={fullName} />
                </div>
                <div className={`text ${name} ${isVisible ? 'push-right' : 'hidden'}`}>
                    <div className="titles">
                        <h2>{fullName}</h2>
                        <h4>{role}</h4>
                    </div>
                    <p>{content}</p>
                </div>
                
            </div>
        </div>
        </>
    );
};

export const TheTeam = () => {

    return (
        <>
            <div className="team">
                <TeamMember
                name='brenda'
                role='Co-Owner'
                imgSrc='/pictures/brenda.jpeg'
                fullName='Brenda VanSlyke'
                content={`
                Brenda VanSlyke graduated high school from Colville in 1984.
                She went to college at Eastern Washington University and received a Bachelor's Degree with a major in Psychology and a minor in math and science.
                She then went on to get her Master’s degree through Phoenix in secondary education mathematics.
                For 17 years, Brenda worked as an adolescent counselor for extremely at risk kids.
                She then went to work at Inchelium school district for 12 years working as a high school math teacher.For the past five years, she has worked for WSU as the MESA (mathematics, engineering, and science achievement) director.
                She focuses on the underrepresented in Science, Technology, Engineering, and Math, including Computer Science (STEM).
                        `}
                />
                <TeamMember
                name='shelley'
                role='Co-Owner'
                imgSrc='/pictures/shelley.jpeg'
                fullName='Shelley Lawrance'
                content={`
                Shelley Lawrence graduated from Inchelium in 1987, and graduated college from Eastern Washington University with a degree in K- 8 education and a major in Reading. 
                She also received a Master’s degree through Eastern for Curriculum and Instruction. 
                After that, she got her Administration credentials through WGU. She has worked for the Inchelium school since 1992, substituting for four years and working as a para educator for one year. 
                She was then hired on full time in 1997. She has taught 4th, middle, and high school.
                For the last six years, she has been the Title I Director, Special Education Coordinator, testing coordinator, and librarian.
                        `}
                />
            </div>
        </>
    )
};

export default TheTeam;