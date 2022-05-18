import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Methodology from "./pages/Methodology";
import Question from "./pages/Question";

export const publicRoutes = [
    {
        path: '/methodology',
        Component: Methodology
    },
    {
         path: '/login',
         Component: Auth
     },
     {
        path: '/registration',
        Component: Auth
    },
    {
         path: '/main',
         Component: Main
     },
     {
         path: '/question' + '/:id',
         Component: Question
     },
     {
        path: '/question',
        Component: Question
    },
]