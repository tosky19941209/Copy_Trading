import YouTubeImg from "../../assets/follow/youtube-color-svgrepo-com.svg"
import TwitterImg from "../../assets/follow/twitter-svgrepo-com.svg"
// import TelegramImg from "../../assets/follow/telegram-svgrepo-com.svg"
import FaceBookImg from "../../assets/follow/facebook_Logo.svg"
const Follow = () => {
    const ImgList = [YouTubeImg, TwitterImg, FaceBookImg]
    // const ImgList = [FaceBookImg]
    return (
        <div className="flex gap-3 md:gap-5 justify-center items-center border rounded-[30px] p-2 border-2   ">
            {
                ImgList.map((item: string, idx: number) => (
                    <img
                        src={item}
                        className="md:w-10 w-7"
                        key={idx}
                    />
                ))
            }
            <p>
                Follow Us
            </p>
        </div>
    )
}

export default Follow