import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cards";
import firCard from "../../assets/cards/1.png";
import secCard from "../../assets/cards/2.png";
import thirdCard from "../../assets/cards/3.png";

const Cards = () => {
  return (
    <div className="md:w-[500px] w-[70vw]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        <SwiperSlide>
          <img src={firCard} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secCard} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdCard} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cards;
