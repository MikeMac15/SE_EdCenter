import { useEffect, useState } from "react";
import './funZoneStyles/mathPage.css'


export const MathPage = () => {
    



    /////////////////////////////////////////////////MathLogic Addition///////////////////////////////////////////////////
    const [answer, setAnswer] = useState('');
    const [resetText, setResetText] = useState('New Numbers')
    const [text, setText] = useState('');
    const [outcome, setOutcome] = useState('dns');
    const [multiplier, setMultiplier] = useState(10)
    const [x, setX] = useState(Math.floor(Math.random() * multiplier));
    const [y, setY] = useState(Math.floor(Math.random() * multiplier));
    const [z, setZ] = useState('');
    const [tof, setToF] = useState(false);
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log(win, x,y)
        
        console.log(multiplier)
      
    }, [tof,count]);

    
    

    const addTwo = (x,y) => x + y;

    const mathGame = () => parseInt(text) === addTwo(x, y);

    const generateNewNumbers = () => {
        //if correct
        if (win) {
            setToF(false)
        } else {
            setCount(0);
            setToF(false)
        }
        if(count >= 5){
            setMultiplier(20);
        } 
        if ( count >= 10){
            setMultiplier(50);
        }
        if ( count >= 15){
            setMultiplier(100);
        }
        if ( count >= 25){
            setMultiplier(10);
            /////////// add in multiplication
        }
        // if count = 50 game over user wins
        

        setAnswer('');
        setText('');
        setX(Math.floor(Math.random() * multiplier));
        setY(Math.floor(Math.random() * multiplier));
        setZ('');
        setOutcome('dns');
        
        
        
        //if incorrect
        
    }
    
    const correctAnswer = () => {
        setZ(text);
        setCount(count + 1);
        setOutcome('win');
        setWin(true);
        setToF(true);
        setResetText('New Numbers')
    }
    
    const wrongAnswer = () => {
        setOutcome('loss');
        setWin(false)
        setZ( ' sorry wrong answer.');
        setResetText('Start over')
        setToF(true);
    }

    return (
        
        <>
        <div id="mathGame">
            <div className={outcome}>
                <h2>Correct answers: {count}</h2>
                <h1>{x} + {y} = {z}</h1>
                <input type="text" placeholder="answer" value={text} onChange={(e) => setText(e.target.value)} />
                <button hidden={tof} onClick={() => setAnswer(mathGame() ? correctAnswer  : wrongAnswer)}>Check Answer</button>
                <button onClick={generateNewNumbers}>{resetText}</button>
            </div>
        </div>
        
        </>
    )
}