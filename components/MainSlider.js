import Image from 'next/image'
import styled from 'styled-components'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectFade, Navigation, Scrollbar
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Scrollbar]);

export default function MainSlider() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                scrollbar={{
                    "hide": true
                }}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                className="mySwiper">
                <SwiperSlide style={{ background: "#0D6DFF" }}>
                    <Image
                        src="/images/slider1.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide style={{ background: "#FE584D" }}>
                    <Image
                        src="/images/slider2.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide style={{ background: "#6328E0" }}>
                    <Image
                        src="/images/slider3.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide style={{ background: "#4C8419" }}>
                    <Image
                        src="/images/slider4.jpg"
                        width={699}
                        height={503}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide style={{ background: "#0C8368" }}>
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