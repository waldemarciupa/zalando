import axios from 'axios'
import ProductList from '../components/ProductList'

const Home = ({ products }) => {

  console.log(products);

  return (
    <div>
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