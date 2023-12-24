import ReactDOM from 'react-dom/client'
import Root from './pages/root';
import WithButton from './pages/withButton'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
    },
    {
        path: "/with-button",
        element: <WithButton/>,
    },
    {
        path: "/height-calc",
        element: 'sdfsdwith button',
    },
    {
        path: "/infinit-lib",
        element: '/infinit-lib',
    },
    {
        path: "/intersection",
        element: '/intersection',
    },
    {
        path: "/virtual-window",
        element: '/virtual-window',
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
