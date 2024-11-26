import { Link, useParams } from "react-router-dom"
import Logo from "./logo"
import Follow from "./follow"
import { useEffect, useState } from "react"
import setBodyColor from "../setbodycolor"

const Header = () => {

    const [domain, setDomain] = useState<string>("/")
    const router = [
        "/",
        "/signup",
        "/signin"
    ]

    const Content = [
        "HomePage",
        "Sign Up",
        "Sign In"
    ]


    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname === '/')
            setBodyColor("#6bbef1")
        else setBodyColor("#cdd2d5")
    }, [])

    return (
        <div className="flex justify-center md:justify-between items-center w-[100%] p-10">
            <div className="md:block hidden">
                <Logo />
            </div>
            <div className="flex gap-10">
                {
                    router.map((item: string, idx: number) => (
                        <a
                            href={item}
                            key={idx}
                        >
                            <p className="text-black">
                                {Content[idx]}
                            </p>
                        </a>
                    ))
                }
            </div>
            {/* <div className="md:block hidden"> */}
            {/* <Follow /> */}
            {/* </div> */}
        </div>
    )
}

export default Header