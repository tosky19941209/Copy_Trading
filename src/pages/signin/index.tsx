import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [referralId, setRerralId] = useState<string>("")
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSignIn = () => {

    }

    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-w-[500px] min-w-[300px] w-[50%] translate-y-1/4 flex flex-col justify-center items-center ">
                <p className="text-black text-[40px]">
                    Sign In
                </p>
                <p className="text-black mt-5">
                    Are you new User?
                    <Link to={"/signup"}>Sign Up</Link>
                </p>
                <div className="mt-5"></div>
                <input
                    className="max-w-[420px] w-full h-[50px] p-2 rounded-xl mt-5 mp-5 focus:outline-none bg-white text-black border border-[white]"
                    placeholder="Email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <div className="max-w-[420px] w-full relative">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        className="max-w-[420px] w-full h-[50px] p-2 rounded-xl mt-5 mp-5 focus:outline-none bg-white text-black border border-[white]"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <span onClick={togglePasswordVisibility} className="absolute right-4 top-9 cursor-pointer">
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div className="max-w-[420px] w-full relative mt-5 flex justify-between">
                    <div className="flex gap-4">
                        <input
                            type="checkbox"
                            className="w-[25px] h-[25px]"
                            style={{
                                accentColor:"white",
                                
                            }}
                        />
                        <p className="text-[black]">
                            Remember Me
                        </p>
                    </div>
                    <Link to={"/signin/forgot"}>
                        <p>
                            Forgot Password?
                        </p>
                    </Link>

                </div>


                <button
                    className="w-full max-w-[420px] mt-10 focus:outline-none bg-[#126090]"
                    onClick={() => handleSignIn()}
                >
                    Sign In
                </button>
            </div>
        </div>
    )

}

export default Login