import API_URL from '../utils/urls'
import axios from 'axios'

const Home = ({ categories }) => {

  console.log(categories);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const result = await axios.get(`${API_URL}/categories`)
  const data = result.data

  return {
    props: {
      categories: data
    },
  }
}

export default Home