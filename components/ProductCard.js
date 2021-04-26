import styled from 'styled-components'

const StyledCard = styled.div`

`

const ProductCard = ({ product }) => {
    return (
        <StyledCard>
            {product.title}
        </StyledCard>
    )
}

export default ProductCard