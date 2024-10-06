import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom"
import SignUp from "./signup"
import Signin from "./signin"
import { UtilContextProvider } from "../contexts"
import ToastProvider from "../provider/index"
const ProjectRouter = () => {
    return (
        <UtilContextProvider>
            <ToastProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" >
                            <Route path="login" element={<Signin />} />
                            <Route path="signup" element={<SignUp />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ToastProvider>
        </UtilContextProvider>
    )
}

export default ProjectRouter