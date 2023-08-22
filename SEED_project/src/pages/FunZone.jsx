import { Outlet, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import { api } from "./utils";
import { createContext } from 'react';
// import { FZNavbar } from "./FZNavbar"
import './FunZone/funZoneStyles/exNav.css'

export const userContext = createContext();

export const FunZone = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const navToHome = () => navigate('/')
    const styles = {textDecoration: 'none'}

    


    const whoAmI = async() => {
        let token = localStorage.getItem("token")
        if (token){
            api.defaults.headers.common["Authorization"] = `Token ${token}`
            let response = await api.get("user/")
            setUser(response.data)
            
        } else {
            setUser(null)
            navigate("/funzone")
        }
    }
    useEffect(() => {
            whoAmI()
        },[])

    const logOut = async() => {
        let response = await api.post('user/logout/')
        if (response.status == 204){
            localStorage.removeItem('token')
            setUser(null)
            delete api.defaults.headers.common["Authorization"]
            navigate('/funzone')
        }
    }

    return (
        <>
            <div className="FZNavbar">
                <img src="/pictures/SoaringEagleLogo.png" alt="Logo"/>

                <nav className="FZnavLinks">
                    <Link to={'/'} style={styles} >Ed Center HomePage</Link>
                    
                    {user ?
                    <>
                        <Link to={'gameView'} style={styles} >GameView</Link>
                        <button onClick={logOut} >Log out</button>
                    </>
                    :
                    <>
                        <Link to={'/funzone'} style={styles}>LogIn</Link>
                        <Link to={'signup'} style={styles}>SignUp</Link>
                    </>}

                </nav>

            </div>
            {user ?<h2>welcome {user.username}</h2> : <div></div>}
            <userContext.Provider value={{user, setUser}}>
                <Outlet />
            </userContext.Provider>
        
        </>
    )
}