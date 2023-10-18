// import React, {useState} from "react";
import styled from "styled-components";

const CardContainer = styled.div`
        text-align: center;
        

        position: relative;
        perspective: 200rem;
        height: 360px;
        
        margin-top: 20px;
        margin-bottom: 50px;
        margin-left: 40px;

        &:hover .card-front{
            transform: rotateY(180deg)
        }
        
        &:hover .card-back {
            transform: rotateY(0deg);
        }
        `;
        
const CardFront = styled.div`
        border-radius: 20px;
        background: whitesmoke;         


        transform: rotateY(0deg);
        position: absolute;
        height: 100%;
        width: 100%;
        transition: 0.9s;
        backface-visibility: hidden;

        box-shadow: 10px 0px 20px 1px rgba(100, 75, 50, .5);

        font-size: 1.4rem;
        `;

const CardBack = styled.div`
        border-radius: 20px;
        background: whitesmoke;

        display: flex;
        justify-content: center;
        align-items: center;

        transform: rotateY(-180deg);
        position: absolute;
        height: 100%;
        width: 100%;
        transition: 0.9s;
        backface-visibility: hidden;   

        box-shadow: 10px 0px 20px 1px rgba(100, 75, 50, .5);
        
        font-size: 1.2rem;
        `;
const CardImage = styled.img`
        height: 50%;
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        
    

        `;

const CardText = styled.p`
        padding: 10px;
        width: 95%;
        
        display: flex;
        justify-content: center;
        align-items: center;

        `;


const SpinningCard = ({ frontImage, frontTitle, backContent }) => {
    // const [isFlipped, setIsFlipped] = useState(false);
    const isFlipped = false

    

    return (


        <CardContainer>
            
            <CardFront className= {isFlipped ? 'card-back' : 'card-front'}>

                <CardImage src={frontImage} alt="img" />
                <CardText>{frontTitle}</CardText>

            </CardFront>

            <CardBack className={isFlipped ? 'card-front' : 'card-back'}>

                <CardText>{backContent}</CardText>

            </CardBack>

        </CardContainer>


    );


};

export default SpinningCard;
