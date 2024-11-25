import YouTubeImg from "../../assets/follow/youtube-color-svgrepo-com.svg"
import TwitterImg from "../../assets/follow/twitter-svgrepo-com.svg"
import TelegramImg from "../../assets/follow/telegram-svgrepo-com.svg"

const Follow = () => {
    const ImgList = [YouTubeImg, TwitterImg, TelegramImg]
    return (
        <div className="flex gap-5 justify-center items-center">
            {
                ImgList.map((item: string, idx: number) => (
                    <img
                        src={item}
                        className="w-10"
                    />
                ))
            }
            <p>
                Follow
            </p>
        </div>
    )
}

export default Follow