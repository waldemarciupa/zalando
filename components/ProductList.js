import styled from 'styled-components'
import ProductCard from '../components/ProductCard'

const StyledProductList = styled.div`
    width: 100%;
    background-color: hsl(203,62.3%,78.82%);
`

const StyledProductListContainer = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-wrap: no-wrap;
    padding: 20px 10px;

    @media (max-width: 420px) {
        flex-direction: column;
        align-items: center;
    }
`

const ProductList = ({ products }) => {
    return (
        <StyledProductList>
            <StyledProductListContainer>
                {products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </StyledProductListContainer>
        </StyledProductList>
    )
}

export default ProductList