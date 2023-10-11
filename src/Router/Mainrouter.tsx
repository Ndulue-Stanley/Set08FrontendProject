import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout/Layout'
import MainPage from '../Pages/Main'
import Registration from '../Auth/Registration'
import RSVP from '../Auth/RSVP'

export const Mainrouter = createBrowserRouter([
    {
        path: '/' ,
        element: <Layout/>,
        children: [
            {
                index: true,
                element : <MainPage/>
            },
        ],
    },
    {
        path: '/register',
        element: <Registration/>
    },
    {
        path: '/rsvp',
        element: <RSVP/>
    }
])