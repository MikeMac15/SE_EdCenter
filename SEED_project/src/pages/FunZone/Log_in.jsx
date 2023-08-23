import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { userContext } from "../FunZone";
import { api } from "../utils";
import './funZoneStyles/styleHomeZone.css'
import './funZoneStyles/logIn_signup.css'
import GameView from "./GameView";
export const Log_in = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();


    const logIn = async(e) => {
        e.preventDefault();
        console.log('username', userName);
        console.log('passwrd', password);
        let response = await api.post("user/login/", {
            email: userName,
            password: password
        });
        let user = response.data.user;
        let token = response.data.token;
        setUser(user);
        localStorage.setItem('token', token);
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        navigate('/funzone/gameView')
    }






    return (
        <div className="loginBackground">
            {!user ?
                <form onSubmit={(e) => logIn(e)}>
                    <h5>Log In</h5>
                    <input
                        type="email"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" />
                </form>
                : <GameView/>

            }









            {/* <div className="lglinks">
                <Link to={'mathPage'}>MATH Page</Link>
                <Link to={'gameView'}>SpacePage</Link>
            </div>
         */}
            
       
        </div>
       
    )
};

export default Log_in;