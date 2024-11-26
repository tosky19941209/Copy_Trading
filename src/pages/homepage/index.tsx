import Cards from "../../components/dashboard/cards"
import GradientImg from "../../assets/gradient.svg"

const HomePage = () => {

    return (
        <div className={`flex xl:flex-row flex-col relative xl:pr-20 xl:pl-20`}>
            <img
                className="absolute top-0 left-0 w-[100vw] h-[100%]"
                src={GradientImg} />
            <div className="xl:w-[50%] w-[100%] flex flex-col p-10 z-[11]">
                <p className="xl:text-[65px] md:text-[40px] text-[30px] text-center xl:text-left mt-10 text-[white]">
                    Copy Trading
                </p>
                <p className="xl:text-[45px] md:text-[30px] text-[20px] text-center xl:text-left mt-10 text-[white]">
                    Join the World's Top Crypto Trading Experts
                </p>
                <div className=" mt-5 focus:outline-none xl:w-[300px] text-center xl:text-left">
                    <a href="https://copytrade.pineye.io/pro/auth/register/">
                        <button className="sign-up-style">
                            Sign Up
                        </button>
                    </a>
                </div>

            </div>
            <div className="flex justify-center  xl:pt-28 xl:w-[50%] w-[100%]">
                <Cards />
            </div>
        </div>
    )
}

export default HomePage