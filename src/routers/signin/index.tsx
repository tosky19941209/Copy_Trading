import React, { useEffect } from "react"
import { showToast } from "../../helper"
import { useUtilContext } from "../../hooks"
const Login = () => {
    const { sidebarNumber, setSidebarNumber } = useUtilContext()
    const showNotify = () => {
        showToast("success", "Hello")
    }

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