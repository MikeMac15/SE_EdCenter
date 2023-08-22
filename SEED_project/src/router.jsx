import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage.jsx"
import { FunZone } from "./pages/FunZone";
import { MathPage } from "./pages/FunZone/MathPage";
import GameView from "./pages/FunZone/GameView";
import Log_in from "./pages/FunZone/Log_in";
import Sign_up from "./pages/FunZone/Sign_up";
import SpacePage from "./pages/FunZone/SpacePage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
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
                path: 'spacePage',
                element: <SpacePage/> // fix these
            }
        ]
    }
]);