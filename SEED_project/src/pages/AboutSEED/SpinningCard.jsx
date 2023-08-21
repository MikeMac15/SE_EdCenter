// import React, {useState} from "react";
import styled from "styled-components";

const CardContainer = styled.div`
        text-align: center;
        

        position: relative;
        perspective: 200rem;
        height: 380px;
        
        margin-top: 10px;
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
        background: white;         


        transform: rotateY(0deg);
        position: absolute;
        height: 100%;
        width: 100%;
        transition: 0.9s;
        backface-visibility: hidden;

        font-size: 1.4rem;
        `;

const CardBack = styled.div`
        border-radius: 20px;
        background: white;

        display: flex;
        justify-content: center;
        align-items: center;

        transform: rotateY(-180deg);
        position: absolute;
        height: 100%;
        width: 100%;
        transition: 0.9s;
        backface-visibility: hidden;   

        box-shadow: 10px 0px 20px 2px rgba(0, 0, 20, .5);
        
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
