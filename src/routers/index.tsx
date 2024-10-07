import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom"
import SignUp from "./signup"
import Signin from "./signin"
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route path="login" element={<Signin />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers