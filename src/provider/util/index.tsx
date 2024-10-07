import { useState, useMemo, useEffect } from "react"
import UtilContext from "../../contexts"

const UtilContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarNumber, setSidebarNumber] = useState<number>(0)
    const init = () => {
    }

    const value = useMemo(() => ({
        sidebarNumber: sidebarNumber,
        setSidebarNumber: setSidebarNumber
    }), [
        sidebarNumber,
        setSidebarNumber
    ])

    useEffect(() => {
        init();
    }, [])

    return (
        <UtilContext.Provider value={value}>
            {children}
        </UtilContext.Provider>
    )
}

export default UtilContextProvider