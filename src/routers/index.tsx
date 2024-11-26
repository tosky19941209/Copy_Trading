import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom"
import SignUp from "../pages/signup"
import Signin from "../pages/signin"
import Dashboard from "../pages/dashboard";
import RequireAuth from "../components/isauth";
import HomePage from "../pages/homepage";
import Layout from "../layout";
import Confirm from "../pages/confirm";
const Routers = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Layout>
                    <HomePage />
                </Layout>
            )
        }
        ,
        {
            path: "/dashboard",
            element: (
                <Layout>
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                </Layout>
            )
        },
        {
            path: "/signin",
            element:
                <Layout>
                    <Signin />
                </Layout>,
        },
        {
            path: "/signup",
            element:
                <Layout>
                    <SignUp />
                </Layout>,
        },
        {
            path: "/confirm",
            element: <Confirm />
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Routers

