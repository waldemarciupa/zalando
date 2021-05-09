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
    position: relative;
`

const StyledLogoImage = styled(Image)`
    width: 100%;
`

const StyledCardDesc = styled.div`
    line-height: 1.25rem;
    height: 124px;
    padding-top: 8px;
`

const StyledBrand = styled.span`
    display: block;
    font-size: 14px;
    font-family: 'Lora', setIsLoginHover;
`

const StyledTitle = styled.div`
    font-size: 14px;
    margin-bottom: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* after 1 line show ... */
    -webkit-box-orient: vertical;
`

const StyledPrice = styled.div`
    font-size: 14px;
`

const StyledIcon = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 13%;
    text-align: center;
`

const ProductCard = ({ product }) => {
    const { API_URL } = process.env

    const image_url = `${API_URL}` + product.image[0].formats['medium'].url

    return (
        <StyledCard>
            <Link href='/products/[id]' as={`/products/${product.id}`} passHref>
                <StyledCardLink>
                    <StyledLogoImage width={300} height={400} src={image_url} />
                    <StyledIcon>
                        <Image
                            src="/images/wishlist.svg"
                            width={24}
                            height={24}
                            alt="logo"
                        />
                    </StyledIcon>
                </StyledCardLink>
            </Link>
            <Link href='/' passHref>
                <a>
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
                            {product.price.toFixed(2)} zł
                        </StyledPrice>
                    </StyledCardDesc>
                </a>
            </Link>
        </StyledCard>
    )
}

export default ProductCard