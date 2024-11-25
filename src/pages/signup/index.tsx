import { useState } from "react"

const SignUp = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirm, setConfirm] = useState<string>("")
    return (
        <div className="w-[100%] flex items-center bg-red-200 h-10">
            {/* <div className="max-w-[500px] bg-red-100">
                <p>
                    Sign up
                </p>
                <p>
                    Already have an account?
                    <a href="/login">
                        Log in
                    </a>
                </p>

                <input
                    className="max-w-[420px] h-[50px] p-2 rounded-xl"
                    placeholder="Email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <input
                    placeholder="Email"
                    value={confirm}
                    onChange={(e: any) => setConfirm(e.target.value)}
                />
            </div> */}

        </div>
    )
}

export default SignUp