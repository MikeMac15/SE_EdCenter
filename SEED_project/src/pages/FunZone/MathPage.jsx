import { useEffect, useState, useContext } from "react";
import './funZoneStyles/mathPage.css'
import { userContext } from "../FunZone";
import { api } from "../utils";




export const MathPage = () => {
    const {user} = useContext(userContext);
    const [scores, setScores] = useState([])
    
    const top5scores = scores.sort((a,b)=> b.score_value-a.score_value).slice(0,5);

    ////////////////////////////////////// { Backend top5 call } ////////////////////////////////////
    const [z, setZ] = useState('');
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

            

       
    },[])


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

            setZ('score added');
        } catch (error){
            setZ('error adding score')
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
                <div className="top5">
                    <h2>Top 5 Scores Leaderboard</h2>
                    <ol>
                        {scores.length !== 0
                                ? top5scores.map((score, index)=>(
                                        <li key= {index}>
                                            User: {score.username} / Score: {score.score_value} / Time: {score.timestamp}

                                        </li>
                                    
                                ))
                                : <li>no scores</li> 
                        }
                    </ol>
                </div>

            <div className="mathGame">
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