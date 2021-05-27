import SwiperSlider from '../components/SwiperSlider'
import BrandSection from '../components/BrandsSection'
const Home = ({ navigation }) => {

  return (
    <div>
      <SwiperSlider navigation={navigation} />
      <BrandSection navigation={navigation} />
    </div>
  )
}

export default Home