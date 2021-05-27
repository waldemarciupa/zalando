import axios from 'axios'
import getConfig from 'next/config'
import Header from '../components/header'
import '../styles/global.css'

function App({ Component, pageProps, navigation, brands }) {
  return (
    <>
      <Header navigation={navigation} />
      <Component navigation={navigation} brands={brands} {...pageProps} />
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

App.getInitialProps = async () => {

  const res = await axios.get(`${publicRuntimeConfig.API_URL}/navigations`)
  const brandRes = await axios.get(`${publicRuntimeConfig.API_URL}/brands`)
  const navigation = res.data
  const brands = brandRes.data

  return { navigation, brands }
}

export default App