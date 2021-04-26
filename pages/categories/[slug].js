import { useRouter } from 'next/router'
import { useEffect } from 'react'

const CategoryPage = () => {
    const router = useRouter()

    useEffect(() => {
        console.log(router);
    }, []);

    return (
        <h1>{router.query.slug}</h1>
    )
}

export default CategoryPage