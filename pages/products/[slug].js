import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin: 24px auto 0;
    display: flex;
`

const StyledImageWrapper = styled.div`
    flex-basis: 50%;
    max-width: 50%;
    display: flex;
`

const StyledThumbnailsWrapper = styled.ul`
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    padding-left: 8px;
    padding-right: 8px;
`

const StyledThumbnail = styled.li`
    margin-bottom: 8px;
    cursor: pointer;
    border: 2px solid #1a1a1a;
    border: ${(props) => props.isBorder ? "2px solid #1a1a1a;" : "2px solid transparent"};

    div {
        display: block !important;
    }
`

const StyledMainImageWrapper = styled.div`
    flex-basis: 83.3333%;
    max-width: 83.3333%;
`

const StyledLogoImage = styled(Image)`
    width: 100%;
`

const StyledContentWrapper = styled.div`
    flex-basis: 40%;
    max-width: 40%;
    margin-left: 10%;
`

const StyledBrand = styled.span`
    font-size: 1.75rem;
    letter-spacing: -.28px;
    line-height: 2rem;
`

const StyledTitle = styled.h1`
    font-size: 1.75rem;
    letter-spacing: -.28px;
    line-height: 2rem;
    padding-top: 4px;
    font-weight: 600;
`

const StyledPrice = styled.div`
    margin-top: 8px;
    font-size: 1.375rem;
    letter-spacing: -.22px;
    line-height: 1.75rem;
    font-weight: 400;

    span {
        font-size: .875rem;
        line-height: 1.25rem;
        margin-left: 8px;
        color: #66676e;
    }
`

const Product = ({ product }) => {
    const { API_URL } = process.env
    const image_url = `${API_URL}` + product.image[0].formats['large'].url

    const [image, setImage] = useState(image_url)
    const [isBorder, setIsBorder] = useState()

    const handleChangeImage = (e) => {
        const thumbId = e.target.dataset.id
        const thumbFilteredById = product.image.filter(function (e) {
            return e.id == thumbId
        })
        const thumbSelectedUrl = `${API_URL}` + thumbFilteredById[0].formats['large'].url
    }

    return (
        <StyledContainer>
            <StyledImageWrapper>
                <StyledThumbnailsWrapper>
                    {product.image.map((thumb, index) => {
                        return (
                            <StyledThumbnail isBorder={index === 0 && true} key={thumb.id}>
                                <Image data-id={thumb.id} onMouseEnter={handleChangeImage} width={84} height={120} src={`${API_URL}` + thumb.formats['thumbnail'].url} />
                            </StyledThumbnail>
                        )
                    }
                    )}
                </StyledThumbnailsWrapper>
                <StyledMainImageWrapper>
                    <StyledLogoImage width={600} height={900} src={image} />
                </StyledMainImageWrapper>
            </StyledImageWrapper>

            <StyledContentWrapper>
                <StyledBrand>{product.brand}</StyledBrand>
                <StyledTitle>{product.title}</StyledTitle>
                <StyledPrice>{product.price.toFixed(2)} zł
                    <span> w tym VAT </span>
                </StyledPrice>
            </StyledContentWrapper>
        </StyledContainer>
    )
}

export async function getServerSideProps(context) {
    const { API_URL } = process.env
    const { slug } = context.query
    const result = await axios.get(`${API_URL}/products?slug=${slug}`)
    const data = result.data

    return {
        props: {
            product: data[0]
        },
    }
}

export default Product