// import { Link } from "react-router-dom"
import Logo from "./logo"
// import Follow from "./follow"
import { useEffect } from "react"
import setBodyColor from "../setbodycolor"

const Header = () => {

    // const [domain, setDomain] = useState<string>("/")
    // const router = [
    //     "/",
    //     "/signup",
    //     "/signin"
    // ]

    // const Content = [
    //     "HomePage",
    //     "Sign Up",
    //     "Sign In"
    // ]

    const handleLinkClick = (item: any) => {
        if (item === '/')
            setBodyColor("#6bbef1")
        else setBodyColor("#cdd2d5")
    };

    useEffect(() => {
        const pathname = window.location.pathname;
        console.log("pasth ==>", pathname)
        handleLinkClick(pathname)
    }, [])

    return (
        <div className="flex justify-center md:justify-between items-center w-[100%] md:pl-32 lg:pl-60 pt-10">
            <div className="">
                <Logo />
            </div>
            <div className="flex gap-10">
                {/* {
                    router.map((item: string, idx: number) => (
                        <Link
                            to={item}
                            key={idx}
                            onClick={() => handleLinkClick(item)}>
                            <p className="text-black">
                                {Content[idx]}
                            </p>
                        </Link>
                    ))
                } */}
            </div>
            {/* <div className="md:block hidden"> */}
            {/* <Follow /> */}
            {/* </div> */}
        </div>
    )
}

export default Header