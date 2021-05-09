import axios from 'axios'

const Product = ({ product }) => {
    console.log(product);

    return (
        <h1>{product.title}</h1>
    )
}

export async function getServerSideProps(context) {
    const { API_URL } = process.env

    const { id } = context.query

    const result = await axios.get(`${API_URL}/products/${id}`)
    const data = result.data

    return {
        props: {
            product: data
        },
    }
}

export default Product