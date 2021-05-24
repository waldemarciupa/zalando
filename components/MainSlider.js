import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    EffectFade, Navigation, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

export default function MainSlider() {

    return (
        <>
            <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide>
                    <Image
                        src="/images/slider1.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/slider2.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/slider3.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/slider4.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/slider5.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}