import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const StyledCard = styled.div`
    flex-basis: 25%;
    padding-left: 8px;
    padding-right: 8px;
`

const StyledCardLink = styled.a`
    display: inline-block;
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
    const { API_URL } = process.env

    const image_url = `${API_URL}` + product.image[0].formats['medium'].url

    return (
        <StyledCard>
            <Link href='/' passHref>
                <StyledCardLink>
                    <StyledLogoImage width={300} height={400} src={image_url} />
                </StyledCardLink>
            </Link>
            <Link href='/' passHref>
                <StyledCardLink>
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
                </StyledCardLink>
            </Link>
        </StyledCard>
    )
}

export default ProductCard