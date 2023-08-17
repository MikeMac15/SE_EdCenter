import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage.jsx"
import About from "./pages/AboutSEED/about";
import { FunZone } from "./pages/FunZone";
import { MathPage } from "./pages/FunZone/MathPage";
import GameView from "./pages/FunZone/GameView";
import { SpacePage } from "./pages/FunZone/SpacePage";
import Log_in from "./pages/FunZone/Log_in";
import Sign_up from "./pages/FunZone/Sign_up";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <About />
            },
            
        ]


    },
    {
        path: '/funzone',
        element: <FunZone />,
        children: [
            {
                index: true,
                element: <Log_in />
            },
            {
                path: 'gameView',
                element: <GameView />
            },
            {
                path: 'signup',
                element: <Sign_up />
            },
            {
                path: 'mathPage',
                element: <MathPage />

            },
            {
                path: 'sciencePage',
                element: <SpacePage />
            }
        ]
    }
]);