import React from "react";
import SpinningCard from "./SpinningCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const CardGroup = styled.div`
// display: flex;

// `;

const Cards = () => {
    
    return (
          
        // <CardGroup>
<>
<Carousel
    additionalTransfrom={0}
    arrows
    autoPlay={true}
    autoPlaySpeed={3000}
    centerMode={true}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={true}
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={true}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >

            <SpinningCard
                frontImage='/pictures/cardPictures/mtutor.jpeg'
                frontTitle='Individualized instruction driven by a unique, adaptable three-step plan based on student needs.'
                backContent="
                Assess the student thoroughly to see where the student is lacking in their academics. 
                Create an individualized academic plan that will be adaptable to their progress. 
                One-on-One instruction at the students' skill level and pace. Students will meet with staff until they reassess at grade level."
                />

            <SpinningCard
                frontImage='/pictures/cardPictures/hands.jpg'
                frontTitle="Tutoring based on the students' immediate needs in their current classes."
                backContent="Some students may just need help with the schoolwork that they are currently working on in school. Most rural schools have very few, if any, tutoring programs in the school. Although there are online resources, many students that are already struggling have a hard time learning without in-person help."
                />
            
            <SpinningCard
                frontImage='/pictures/cardPictures/grad.jpeg'
                frontTitle="Credit retrieval for high school students."
                backContent="Many high school students have found themselves shy of credits for graduation by their Senior year. Soaring Eagle Educational Center will team with an accredited organization to help students make up their credits at their pace."
                /> 
            
            <SpinningCard
                frontImage='/pictures/cardPictures/Homeschooling.jpeg'
                frontTitle="Assist with students that are home schooling."
                backContent="The staff will also be able to assist families that are continuing to home school since the pandemic."
                />
            
            <SpinningCard
                frontImage='/pictures/cardPictures/study.jpeg'
                frontTitle="Study skills training."
                backContent="Students may need help getting organized, using their time wisely and learning how to study more effectively. We will offer workshops that families can tap into with ongoing support to make sure their student is successful."
                />

            <SpinningCard
                frontImage='/pictures/cardPictures/math.jpeg'
                frontTitle="Summer Math Bridges class."
                backContent="We will be offering summer math courses for students to maintain their math skills over the summer and get a preview of what to expect in their upcoming math classes."
                />

            
            <SpinningCard
                frontImage='/pictures/cardPictures/just_ahead.jpeg'
                frontTitle="Other workshops."
                backContent="We will also have workshops for families that need help with FAFSA, college applications and essay writing."
                />
        
       
</Carousel>
</>
        // </CardGroup>
       
       )
    };
    
    export default Cards;