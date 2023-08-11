import { Outlet } from "react-router-dom"


import { FZNavbar } from "./FunZone/FZNavbar"

export const FunZone = () => {


    return (
        <>
        <FZNavbar />
        <Outlet />
        
        </>
    )
}