import { createBrowserRouter } from 'react-router-dom';
import Pages from '../Pages/Pages';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import ErrorPage from '../Pages/ErrorPage/ErrorElement';


const routes = createBrowserRouter([
    {
        path:'/',
        element:<Pages></Pages>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
   ])
export default routes;