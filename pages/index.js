import API_URL from '../utils/urls'
import axios from 'axios'

const Home = ({ products }) => {

  console.log(products);

  return (
    <div>
      <h1>Home</h1>
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