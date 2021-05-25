import SwiperSlideContent from './SwiperSlideContent'

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
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Scrollbar])

const SwiperSlider = () => {
    return (
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
            className="mySwiper"
        >
            <SwiperSlide style={{ background: "#0D6DFF" }} >
                <SwiperSlideContent
                    image="/images/slider1.jpg"
                    icon="/images/icon_slider_1.svg"
                    title="Więcej niż możesz sobie wyobrazić"
                    desc="Moda, kosmetyki, sport i dużo więcej" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#FE584D" }} >
                <SwiperSlideContent
                    image="/images/slider2.jpg"
                    icon="/images/icon_slider_2.svg"
                    title="Darmowa dostawa"
                    desc="Najlepsze rzeczy są za darmo, dostawa też" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#6328E0" }} >
                <SwiperSlideContent
                    image="/images/slider3.jpg"
                    icon="/images/icon_slider_3.svg"
                    title="Twoje ulubione marki"
                    desc="Obserwuj marki i bądź na bieżąco" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#4C8419" }} >
                <SwiperSlideContent
                    image="/images/slider4.jpg"
                    icon="/images/icon_slider_4.svg"
                    title="Zmiany na lepsze"
                    desc="Moda tworzona w duchu zrównoważonego rozwoju" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#0C8368" }} >
                <SwiperSlideContent
                    image="/images/slider5.jpg"
                    icon="/images/icon_slider_5.svg"
                    title="Przestrzeń dopasowana do Ciebie"
                    desc="Modne sugestie dostosowane do Twojego stylu" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSlider