import { useState } from "react"
import styled from "styled-components"
const IFZfull = styled.div`
    background-image: url('/pictures/H_introFZ/IFZmain2.jpeg');

    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @media (max-width: 768px) {
        
          display: none;
        
      }
`
const IFZBanner = styled.div`
    height: 10rem;
    text-align: center;
    font-size: 3rem;
    // margin:3rem 1rem;
    padding-top: 2rem;
    color: whitesmoke;
    `
const IFZwarning = styled.div`
    height: 3rem;
    
    background: gold;
    display:flex;
    align-items: center;
    justify-content: center;
    `
const IFZcontainer = styled.div`
    height: 50rem;

    display: flex;
    flex-direction: row;

    // padding: 4rem 0;
`
const IFZleft = styled.div`
    flex-basis:60%;
`
const IFZright = styled.div`
    
    
    flex-basis: 40%;

    display: flex;
    flex-direction: column;
`
const IFZtitle = styled.span`
    font-size: 3rem;
    color: whitesmoke;              //////////
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
`
const IFZdescription = styled.span`
    font-size: 1.45rem;
    color: whitesmoke;         ////////////
    display: flex;
    justify-content: center;
    align-items: center;
    padding:2rem 10rem;
    
    text-indent: 2rem;
`
const IFZimgdiv1 = styled.div`
    width:50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s ease; 

    color: whitesmoke;        ////////////
    
`
const IFZimgdiv2 = styled(IFZimgdiv1)`
    
`
const IFZimgdiv3 = styled(IFZimgdiv1)`
    
`
const IFZimgdiv4 = styled(IFZimgdiv1)`
    
`
const IFZVideo = styled.video`
    height: 10rem;
    width: 15rem;
    border: 1px solid grey;
    // border-radius: 2rem;
    overflow: hidden;
    transition: transform 0.6s ease;

    box-shadow: 10px 5px 25px 1px grey;

    

    &:hover {
        transform: scale(1.7);
        box-shadow: 10px 5px 25px 3px grey;
        background: black;
    }
`

const IFZimg = styled.img`
    height: 10rem;
    width: 15rem;
    border: 1px solid grey;
    // border-radius: 2rem;
    overflow: hidden;
    transition: transform 0.6s ease;

    box-shadow: 10px 5px 25px 1px grey;

    

    &:hover {
        transform: scale(1.7);
        box-shadow: 10px 5px 25px 3px grey;
    }
`
const TitleColor = styled.span`
    font-size: 3rem;
    margin-left: 0.5rem;
    
    color: ${props => props.color};
`

export default function IntroFZ () {
    const [adjective, setAdjective] = useState('learn.');
    const [titleColor, setTitleColor] = useState('#ff7f01');
    const [description, setDescription] = useState('Hover over the images to learn more about each game.')
    const [activeVideo, setActiveVideo] = useState(null)


    const handleHover = (color, text, description, videoId) => {
        setAdjective(text)
        setTitleColor(color)
        setDescription(description)
        setActiveVideo(videoId)
    }

    const handleHoverExit = () => {
        setAdjective('learn.')
        setTitleColor('gold')
        setDescription('Hover over the images to learn more about each game.')
        setActiveVideo(null)
    }

    


    return (
        <>
        <IFZwarning>Warning: this part of our site is under continued development and may at times be disabled to fix bugs or add new features.</IFZwarning>
        <IFZfull>

        <IFZBanner>Checkout Our Fun Zone!</IFZBanner>
        <IFZcontainer>
            <IFZleft>
                <IFZtitle>a place for students to <TitleColor color={titleColor}>{adjective}</TitleColor></IFZtitle>
                <IFZdescription>{description}</IFZdescription>
            </IFZleft>

            <IFZright>
                <IFZimgdiv1 onMouseEnter={() => handleHover('green','practice.','Introducing our interactive math challenge, a fun and engaging game designed for students to sharpen their math skills while having a blast! Dive into a world of numbers and equations as you test your mathematical prowess. Solve a series of progressively challenging math problems and see how many you can answer correctly.', 1)} onMouseLeave={handleHoverExit}>
                    {titleColor === 'green'
                    ?   <IFZVideo autoPlay loop muted>
                            <source src="/video/IFZvideo/mathvid.mp4" type="video/mp4"/>    
                        </IFZVideo> 
                    :
                        <IFZimg src="/pictures/H_introFZ/IFZmath.png"/>
                    }
                    Math Game 🧠
                </IFZimgdiv1>
                <IFZimgdiv2 onMouseEnter={() => handleHover('skyblue','explore.',"Step into the cosmos with our interactive NASA Photo of the Day feature! Choose any date you like and embark on a visual journey through the wonders of space. Explore Earth's breathtaking landscapes, delve into our solar system's mysteries, and venture further into the enigmatic depths of our galaxy, all through captivating images. Whether you're an astronomy enthusiast or simply curious about the universe, our immersive experience lets you discover the beauty and marvels of space exploration, one day at a time, right at your fingertips. Dive into the cosmos and expand your horizons with every click!")} onMouseLeave={handleHoverExit}>
                    {titleColor === 'skyblue'
                    ?
                        <IFZVideo autoPlay loop muted>
                            <source src="/video/IFZvideo/spacevid.mp4" type="video/mp4"/>   
                        </IFZVideo> 
                    :
                        <IFZimg src="/pictures/H_introFZ/IFZnasa.png" />
                    }
                    NASA Photo Library 🌖
                </IFZimgdiv2>
                <IFZimgdiv3 onMouseEnter={() => handleHover('#ff7373','imagine.', "Unleash your inner cosmic architect with our interactive Galaxy Creator! Designed for students of all ages, this engaging tool lets you embark on a thrilling journey to design and customize your very own spiral galaxies. From choosing the size and color of stars to arranging dazzling nebulae and defining the unique characteristics of your galaxy, this immersive experience fosters creativity and cosmic curiosity. Whether you're an aspiring astronomer or simply an avid space enthusiast, our Galaxy Creator is your passport to the cosmos, providing a fun and educational platform to craft your personal spiral galaxy.")} onMouseLeave={handleHoverExit}>
                    {titleColor === '#ff7373'
                    ?
                        <IFZVideo autoPlay loop muted>
                            <source src="/video/IFZvideo/galaxyvid.mp4" type="video/mp4"/>   
                        </IFZVideo> 
                    :    
                        <IFZimg src="/pictures/H_introFZ/IFZgalaxy.png" />
                    }
                    In the works! 👷‍♂️🛠️
                </IFZimgdiv3>
                <IFZimgdiv4 onMouseEnter={() => handleHover('#d31228','study.', "Coming soon to our educational center is an exciting Geography Game that will put students' knowledge of the United States to the test in a whole new dimension! Get ready to challenge your geographical prowess as you aim to name each of the 50 states correctly in an immersive 3D environment where states will pop up, adding a tactile and visual element to your learning experience. With a captivating interface and interactive quizzes, this game promises an entertaining and educational way to explore the map of the United States. Stay tuned for updates, as we're currently working on bringing this exciting 3D game to life, providing an engaging platform for students to sharpen their geography skills while having loads of fun!")} onMouseLeave={handleHoverExit}>
                    <IFZimg src="/pictures/H_introFZ/IFZstates.png" />
                    In the plans! 📐📝
                </IFZimgdiv4>
            </IFZright>
        </IFZcontainer>
        </IFZfull>
        </>
    )
}