import axios from 'axios'

const Cart = ({ products, authData }) => {
    console.log(products, authData);
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env

    const loginInfo = {
        identifier: 'john@example.com',
        password: '111111'
    }

    const login = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify(loginInfo)
    })

    const loginResponse = await login.json()

    const res = await fetch(`${API_URL}/carts`, {
        headers: {
            Authorization: `Bearer ${loginResponse.jwt}`
        }
    })
    const data = await res.json()

    return {
        props: {
            products: data,
            authData: loginResponse
        }
    }
}

export default Cart