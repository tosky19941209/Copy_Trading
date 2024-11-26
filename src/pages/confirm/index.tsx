import { useState } from "react"

const Confirm = () => {
    const [verificationCode, setVerificationCode] = useState<string>("")
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <p className="text-black text-[35px]">
                Verificiation
            </p>
            <p className="text-black">
                A verification code has been sent to { }.
            </p>
            <p className="text-black">
                Enter the verification code to activate your account.
            </p>
            <input
                type="text"
                className="bg-white text-black border"
                value={verificationCode}
                onChange={(e: any) => setVerificationCode(e.target.value)}
            />
        </div>
    )
}

export default Confirm