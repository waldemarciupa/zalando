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
                    url="/images/slider1.jpg"
                    title="Więcej niż możesz sobie wyobrazić"
                    desc="Moda, kosmetyki, sport i dużo więcej" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#FE584D" }} >
                <SwiperSlideContent
                    url="/images/slider2.jpg"
                    title="Darmowa dostawa"
                    desc="Najlepsze rzeczy są za darmo, dostawa też" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#6328E0" }} >
                <SwiperSlideContent
                    url="/images/slider3.jpg"
                    title="Twoje ulubione marki"
                    desc="Obserwuj marki i bądź na bieżąco" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#4C8419" }} >
                <SwiperSlideContent
                    url="/images/slider4.jpg"
                    title="Zmiany na lepsze"
                    desc="Moda tworzona w duchu zrównoważonego rozwoju" />
            </SwiperSlide>
            <SwiperSlide style={{ background: "#0C8368" }} >
                <SwiperSlideContent
                    url="/images/slider5.jpg"
                    title="Przestrzeń dopasowana do Ciebie"
                    desc="Modne sugestie dostosowane do Twojego stylu" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSlider