import styled from 'styled-components'

const StyledCard = styled.div`

`

const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <StyledCard>
            {product.title}
        </StyledCard>
    )
}

export default ProductCard