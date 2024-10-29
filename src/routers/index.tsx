import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom"
import SignUp from "../pages/signup"
import Signin from "../pages/signin"
import Dashboard from "../pages/dashboard";
import RequireAuth from "../components/isauth";
const Routers = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <RequireAuth>
                    <Dashboard />
                </RequireAuth>
            )
        },
        {
            path: "/login",
            element: <Signin />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Routers

