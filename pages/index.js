import axios from 'axios'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'

const Home = ({ products }) => {

  return (
    <div>
      <Banner
        background="#47AAB0"
        title='Nowości tygodnia'
        text='Kolekcje na czasie' />
      <ProductList products={products} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { API_URL } = process.env

  const result = await axios.get(`${API_URL}/products`)
  const data = result.data

  return {
    props: {
      products: data
    },
  }
}

export default Home