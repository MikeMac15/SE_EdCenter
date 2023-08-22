import { useEffect, useState, useContext } from "react";
import { userContext } from "../FunZone.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "../utils.jsx"

export const Sign_up = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(user)
    }, [userName, password])

    const signUp = async(e) => {
        e.preventDefault();
        // http://127.0.0.1:8000/api
        let response = await api.post("user/signup/", {
            email: userName,
            password: password
        });

        let user = response.data.user;
        let token = response.data.token;
        setUser(user);
        localStorage.setItem("token", token);
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        navigate("/funzone/gameView");
    }
  // {"user": {"email": user.email}, "token": token.key}, status=HTTP_201_CREATED


    return (
        <form onSubmit={(e) => signUp(e)}>
            <h5>Sign Up</h5>
            <input 
            type='email'
            value={userName}
            onChange={(e) => setUserName(e.target.value)} />
            <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <input type= 'submit' />
        </form>
    )
};

export default Sign_up;