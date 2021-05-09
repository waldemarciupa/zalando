import axios from 'axios'

const Product = ({ product }) => {

    console.log(product);

    return (
        <h1>{product.title}</h1>
    )
}

export async function getServerSideProps(context) {
    const { API_URL } = process.env

    const { slug } = context.query

    const result = await axios.get(`${API_URL}/products?slug=${slug}`)
    const data = result.data

    return {
        props: {
            product: data[0]
        },
    }
}

export default Product