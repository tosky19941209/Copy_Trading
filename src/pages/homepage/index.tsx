import Cards from "../../components/dashboard/cards"
import GradientImg from "../../assets/gradient.svg"
import './index.css'
import PionexLogo from "../../assets/logo/pionex.png"
import KuCoinLogo from '../../assets/logo/kucoin.png'
import FsLogo from "../../assets/logo/fs.png";

const Title = () => {
    return (
        <div className={`flex xl:flex-row flex-col relative xl:pr-60 xl:pl-60 lg:mt-20   `}>
            <img
                className="absolute top-0 left-0 w-[100vw] h-[100%]"
                src={GradientImg} />
            <div className="xl:w-[50%] w-[100%] flex flex-col p-10 z-[11]">
                <p className="xl:text-[56px] md:text-[40px] text-[40px] text-center xl:text-left mt-10 text-[white] font-bold drop-shadow-[0_5px_2px_rgba(0,0,0,0.75)]  ">
                    Copy Trading
                </p>
                <p className="xl:text-[30px] md:text-[25px] text-[24px] text-center xl:text-left mt-10 text-[white] font-bold">
                    Join the World's Top Crypto Trading Experts
                </p>
                <div className=" mt-5 focus:outline-none xl:w-[400px] text-center xl:text-left flex xl:flex-row flex-col justify-between items-center gap-10">
                    <a href="https://copytrade.pineye.io/pro/auth/register/">
                        <button className="sign-up-style">
                            Sign Up
                        </button>
                    </a>
                    <button className="viewButton text-center">
                        View Guide
                    </button>
                </div>
            </div>
            <div className="flex justify-center  xl:pt-28 xl:w-[50%] w-[100%]">
                <Cards />
            </div>
        </div>
    )
}


const ScrollPart = () => {
    const logoList = [FsLogo, PionexLogo, KuCoinLogo]
    return (
        <div>
            <div className="flex justify-between items-center pl-10 pr-10 xl:pl-60 xl:pr-60 gap-5">
                <div className="h-[2px] w-full left-side" />
                <p className="text-[20px] lg:text-[30px] text-[white]">
                    Partners
                </p>
                <div className="h-[2px] w-full right-side" />
            </div>

            <div className="flex gap-10 pl-10 pr-10 md:pl-52 md:pr-52 xl:pl-72 xl:pr-72 mt-10 justify-between">
                {
                    logoList.map((item: string, idx: number) => (
                        <img
                            src={item}
                            key={idx}
                            className="xl:w-[200px] md:w-[100px] sm:w-[100px] w-[70px]"
                        />
                    ))
                }
            </div>

            <div className="flex justify-center mt-10 mb-10 items-center pl-10 pr-10 xl:pl-60 xl:pr-60">
                <div className="h-[2px] w-[50%] left-side" />
                <div className="h-[2px] w-[50%] right-side" />
            </div>
        </div>
    )
}
const HomePage = () => {

    return (
        <div>
            <Title />
            <ScrollPart />
        </div>
    )
}

export default HomePage