import axios from 'axios'
import getConfig from 'next/config'
import Header from '../components/header'
import '../styles/global.css'

function App({ Component, pageProps, navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <Component navigation={navigation} {...pageProps} />
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

App.getInitialProps = async () => {

  const res = await axios.get(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = res.data

  return { navigation }
}

export default App