import { useEffect, useState, useContext } from "react";
import './funZoneStyles/mathPage.css'
import { userContext } from "../FunZone";
import { api } from "../utils";




export const MathPage = () => {
    const {user} = useContext(userContext);
    const [scores, setScores] = useState([])
   
    ////////////////////////////////////// { Backend top5 call } ////////////////////////////////////
    //
    // 'api/math/'
    //           'allscores/'  get/post
    //           'top5scores/' get
    // http://127.0.0.1:8000/api/math/top5scores

    const getTop5 = async() => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
                console.error('no token found');
                return;
            }
            api.defaults.headers.common["Authorization"] = `Token ${token}`

            let response = await api.get('math/allscores/')
            setScores(response.data.scores)
        } catch (error) {
            console.error('Error fetching scores', error)
        }
    }

    useEffect(()=> {
        
            getTop5()
            
            console.log('user',user)
            console.log('scores',scores)

            

       
    },[user])


    ////////////////////////////////////// { post score function } ////////////////////////////////////
    const postMathScore = async (e) => {
        e.preventDefault();
        
        try{
            const token = localStorage.getItem('token');
            if (!token){
                console.error("no token found")
                return;
            }
            api.defaults.headers.common["Authorization"] = `Token ${token}`
            api.defaults.headers.common["Content-Type"] = 'application/json'

            const response = await api.post("math/allscores/", {
                'score_value': count,
                'timestamp': new Date().toISOString
            })

            console.log('score added:', response.data);
        } catch (error){
            console.error('error adding score', error)
        }
    }



    ////////////////////////////////////// { MathGame logic } ////////////////////////////////////
    //
    //
    // const [newNumBtn, setNewNumBtn] = useState(false)
    const [text, setText] = useState('');
    const [multiplier, setMultiplier] = useState(10)
    const [x, setX] = useState(Math.floor(Math.random() * multiplier));
    const [y, setY] = useState(Math.floor(Math.random() * multiplier));
    const [z, setZ] = useState('');
    const [showBtn, setShowBtn] = useState(true);
    const [replayBtn, setReplayBtn] = useState(false)
    const [count, setCount] = useState(0);


  

    const addTwo = (x,y) => x + y;

    const mathGame = () => parseInt(text) === addTwo(x, y);

    const generateNewNumbers = () => {
        //if correct
 
        if(count + 1 >= 15){
            setMultiplier(100);
        } 
        else if ( count + 1 >= 10){
            setMultiplier(50);
        }
        else if ( count + 1 >= 5){
            setMultiplier(20);
        }
       
        //     /////////// add in multiplication
        // if count = 50 game over user wins
        
        setShowBtn(true)
        // setNewNumBtn(false);

        setText('');
        setX(Math.floor(Math.random() * multiplier));
        setY(Math.floor(Math.random() * multiplier));
        setZ('');
    }
    
    const correctAnswer = () => {
        setZ(text);
        setCount(count + 1);
        setShowBtn(false);
        // setNewNumBtn(true);
        setTimeout(() => {
            generateNewNumbers();
        }, 600);
    };
    
    const wrongAnswer = () => {
        setZ( ' sorry wrong answer.');
        setShowBtn(false);
        setReplayBtn(true)
    }

    const resetGame = () => {
        setCount(0);
        setMultiplier(10);
        setShowBtn(true);
        setReplayBtn(false)
        setX(Math.floor(Math.random() * 10));
        setY(Math.floor(Math.random() * 10));
        setZ('');
        setText('');
    }

    return (
        
        <>
        <div className="background">

            <div className="mathGame">
                <div className="top5">
                    {scores.length !== 0 
                            ? scores.map((score, index)=>(
                                <div key= {index}>
                                    Score: {score.score_value}, Time: {score.timestamp}
                                </div>
                            ))
                            : 'non' 
                }
                </div>
                    <div className="answerCount">
                        Correct answers: {count}
                    </div>
                    <div className="equation">
                        {x} + {y} = {z}
                    </div>
                    { !replayBtn
                        &&
                    <input className="inputMath" type="text" placeholder="answer" value={text}
                     onChange={(e) => setText(e.target.value)}
                     onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                                if (mathGame()) {
                                    correctAnswer();
                                } else {
                                    wrongAnswer();
                                }
                            
                        }
                     }} />}
                    {showBtn && <button className="button" onClick={mathGame() ? correctAnswer  : wrongAnswer}>Check Answer</button>}
                   {/* {newNumBtn && <button className="button" onClick={generateNewNumbers}>New Numbers</button>} */}
                   {replayBtn && <button className="button" onClick={resetGame} >Play Again?</button> }
                     <button onClick={postMathScore}>post score</button>
            </div>
            
        </div>
        </>
    )
}