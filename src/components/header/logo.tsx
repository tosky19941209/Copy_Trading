import LogoImg from "../../assets/logo.png"

const Logo = () => {
    return (
        <div>
            <img
                className="lg:w-28 w-20"
                src={LogoImg}
            />
        </div>
    )
}

export default Logo