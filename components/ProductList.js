import styled from 'styled-components'
import ProductCard from '../components/ProductCard'

const StyledProductList = styled.div`
    width: 100%;
    min-height: 200px;
    background-color: hsl(203,62.3%,78.82%);
    display: flex;
    flex-wrap: no-wrap;
    padding: 20px 10px;
`

const ProductList = ({ products }) => {
    return (
        <StyledProductList>
            {products.map(product => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </StyledProductList>
    )
}

export default ProductList