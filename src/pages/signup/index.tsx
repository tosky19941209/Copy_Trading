import { useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { showToast } from "../../helper"
import { Link } from "react-router-dom"

const SignUp = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirm, setConfirm] = useState<string>("")
    const [referralId, setRerralId] = useState<string>("")
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSignUp = async () => {
        if (password !== confirm) {
            showToast("error", "password and confirm is not same.")
            return
        }


    }
    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-w-[500px] min-w-[300px] w-[50%] translate-y-1/4 flex flex-col justify-center items-center ">
                <p className="text-black text-[40px]">
                    Sign up
                </p>
                <p className="text-black mt-5">
                    Already have an account?
                    <Link to={"/signin"}>Log in</Link>
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

                <input
                    type={isPasswordVisible ? "text" : "password"}
                                 className="max-w-[420px] w-full h-[50px] p-2 rounded-xl mt-5 mp-5 focus:outline-none bg-white text-black border border-[white]"
                    placeholder="Confirm"
                    value={confirm}
                    onChange={(e: any) => setConfirm(e.target.value)}
                />

                <input
                    type={"password"}
                          className="max-w-[420px] w-full h-[50px] p-2 rounded-xl mt-5 mp-5 focus:outline-none bg-white text-black border border-[white]"
                    placeholder="Referral ID"
                    value={referralId}
                    onChange={(e: any) => setRerralId(e.target.value)}
                />
                <button
                    className="w-full max-w-[420px] mt-10 focus:outline-none bg-[#126090]"
                    onClick={() => handleSignUp()}
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default SignUp