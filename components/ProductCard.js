import styled from 'styled-components'
import Image from 'next/image'
import API_URL from '../utils/urls'

const StyledCard = styled.div`
    flex-basis: 25%;
    padding-left: 8px;
    padding-right: 8px;
`

const StyledCardLink = styled.a`

`

const StyledLogoImage = styled(Image)`
    width: 100%;
`

const StyledCardDesc = styled.div`
    line-height: 1.25rem;
`

const StyledBrand = styled.span`
    display: block;
    font-size: 14px;
`

const StyledTitle = styled.div`
    font-size: 14px;
`

const StyledPrice = styled.div`
    font-size: 14px;
`

const ProductCard = ({ product }) => {
    const product_url = `${API_URL}` + product.image[0].formats['medium'].url;
    console.log(product_url)

    return (
        <StyledCard>
            <StyledCardLink>
                <StyledLogoImage width={300} height={400} src={product_url} />
            </StyledCardLink>
            <StyledCardDesc>
                <div>
                    <StyledBrand>
                        {product.brand}
                    </StyledBrand>
                    <StyledTitle>
                        {product.title}
                    </StyledTitle>
                </div>
                <StyledPrice>
                    {product.price}
                </StyledPrice>
            </StyledCardDesc>
        </StyledCard>
    )
}

export default ProductCard