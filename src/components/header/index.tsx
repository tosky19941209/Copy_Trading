// import { Link } from "react-router-dom"
import Logo from "./logo"
import Follow from "./follow"
// import setBodyColor from "../setbodycolor"
// import SideBarImg from "../../assets/setting.svg"
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

    // const [isSidebar, setSideBar] = useState<boolean>(false)
    // const handleLinkClick = (item: any) => {
    //     // if (item === '/')
    //     //     setBodyColor("#6bbef1")
    //     // else setBodyColor("#cdd2d5")
    // };

    // useEffect(() => {
    //     const pathname = window.location.pathname;
    //     console.log("pasth ==>", pathname)
    //     handleLinkClick(pathname)
    // }, [])

    return (
        <div className="relative">
            <div className="flex justify-between items-center w-[100%] pl-10 pr-10 md:pl-32 md:pr-32 lg:pl-60 lg:pr-60 pt-10">
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
                <div className="md:block ">
                    <Follow />
                </div>
                {/* <div className="md:hidden block">
                    <img
                        src={SideBarImg}
                        className="w-[40px] cursor-pointer"
                        onClick={() => setSideBar(!isSidebar)}
                    />
                </div> */}
            </div>
            <div className="flex justify-center mt-3 mb-10 items-center pl-10 pr-10 xl:pl-40 xl:pr-40">
                <div className="h-[1px] w-[50%] left-side" />
                <div className="h-[1px] w-[50%] right-side" />
            </div>

            {/* <div className="absolute top-0 left-0 w-[]">
                Sidebar
            </div> */}

        </div>
    )
}

export default Header