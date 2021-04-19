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

        </Layout>
    )
}

export default CategoryPage