import { Link } from "react-router-dom"
import Logo from "./logo"
import Follow from "./follow"

const Header = () => {
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
    return (
        <div className="flex justify-between items-center w-[100%]">
            <Logo />
            <div className="flex gap-5">
                {
                    router.map((item: string, idx: number) => (
                        <a href={item} key={idx}>
                            <p className="text-white">
                                {Content[idx]}
                            </p>
                        </a>
                    ))
                }
            </div>
            <Follow />
        </div>
    )
}

export default Header