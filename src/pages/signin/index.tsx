import { useEffect } from "react"
import { showToast } from "../../helper"
import { useUtilContext } from "../../hooks"
const Login = () => {
    const { sidebarNumber, setSidebarNumber } = useUtilContext()
    
    const showNotify = () => {
        setSidebarNumber(199)
        showToast("success", "Hello")
    }

    useEffect(() => {
        console.log(sidebarNumber)
    }, [sidebarNumber])

    return <div>
        <p>
            loginsdfsdf
        </p>
        <button
            onClick={() => showNotify()}
        >
            showNotify
        </button>
    </div >
}

export default Login