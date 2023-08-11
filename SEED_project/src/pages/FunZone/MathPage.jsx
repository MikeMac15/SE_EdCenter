import { useEffect, useState } from "react";
import './funZoneStyles/mathPage.css'


export const MathPage = () => {
    



    /////////////////////////////////////////////////MathLogic Addition///////////////////////////////////////////////////
    const [answer, setAnswer] = useState('');
    const [text, setText] = useState('');
    const [outcome, setOutcome] = useState('dns')
    const [x, setX] = useState(Math.floor(Math.random() * 100));
    const [y, setY] = useState(Math.floor(Math.random() * 100));
    const [z, setZ] = useState('')


    useEffect(() => {
        console.log(answer)
    }, [answer]);

    
    

    const addTwo = (x,y) => x + y;

    const mathGame = () => parseInt(text) === addTwo(x, y);

    const generateNewNumbers = () => {
        setAnswer('');
        setText('');
        setX(Math.floor(Math.random() * 100));
        setY(Math.floor(Math.random() * 100));
        setZ('');
        setOutcome('dns');
    }

    const correctAnswer = () => {
        setZ(text);
        setOutcome('win');
    }

    return (
        
        <>
        <div id="mathGame">
            <div className={outcome}>
                <h1>{x} + {y} = {z}</h1>
                <input type="text" placeholder="answer" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => setAnswer(mathGame() ? correctAnswer : 'Try Again')}>Check Answer</button>
                <button onClick={generateNewNumbers}>New Numbers</button>
            </div>
        </div>
        
        </>
    )
}