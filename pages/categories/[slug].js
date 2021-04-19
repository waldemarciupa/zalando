import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../../components/layout'

const CategoryPage = () => {
    const router = useRouter()

    useEffect(() => {
        console.log(router);
    }, []);

    return (
        <Layout>
            <h1>{router.query.slug}</h1>
        </Layout>
    )
}

export default CategoryPage