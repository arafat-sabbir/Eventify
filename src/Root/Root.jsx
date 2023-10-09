import { createBrowserRouter } from 'react-router-dom';
import Pages from '../Pages/Pages';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import ErrorPage from '../Pages/ErrorPage/ErrorElement';
import ServiceDetail from '../Pages/ServiceDetail/ServiceDetail';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import About from '../Pages/About/About';
import ContactUs from '../Pages/Contact/ContactUs';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Pages></Pages>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/service/detail/:id',
                loader: () => fetch('/service.json'),
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
            },
            {
                path:'/contactUs',
                element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path:'/about',
                element:<PrivateRoute> <About></About> </PrivateRoute>
            },
        ]
    }
])
export default routes;