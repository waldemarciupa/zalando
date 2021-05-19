import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

const CategoryPage = ({ products }) => {
    const router = useRouter()

    useEffect(() => {
        console.log(router);
        console.log(router.query.slug);
    }, []);

    return (
        <>
            <h1>{router.query.slug}</h1>
            <Banner
                background="#47AAB0"
                title='Nowości tygodnia'
                text='Kolekcje na czasie'
                href='/nowosci' />
            <ProductList products={products} />
        </>
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

export default CategoryPage