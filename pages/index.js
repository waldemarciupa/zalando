import SwiperSlider from '../components/SwiperSlider'
import BrandSection from '../components/BrandsSection'
const Home = ({ navigation, brands }) => {

  return (
    <div>
      <SwiperSlider navigation={navigation} />
      <BrandSection brands={brands} />
    </div>
  )
}

export default Home