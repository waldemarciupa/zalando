import API_URL from '../utils/urls'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const Home = ({ products }) => {

  console.log(products);

  return (
    <div>
      <h1>Home</h1>
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  const result = await axios.get(`${API_URL}/products`)
  const data = result.data

  return {
    props: {
      products: data
    },
  }
}

export default Home