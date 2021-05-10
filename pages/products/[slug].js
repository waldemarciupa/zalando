import axios from 'axios'
import styled from 'styled-components'
import Image from 'next/image'

const Product = ({ product }) => {
    const { API_URL } = process.env

    const image_url = `${API_URL}` + product.image[0].formats['large'].url

    console.log(product);

    const StyledContainer = styled.div`
        max-width: 1216px;
        margin: 0 auto;
        display: flex;
    `

    const StyledImageWrapper = styled.div`
        flex-basis: 50%;
        max-width: 50%;
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

    return (
        <StyledContainer>
            <StyledImageWrapper>
                <StyledLogoImage width={600} height={900} src={image_url} />
            </StyledImageWrapper>

            <StyledContentWrapper>
                <StyledBrand>{product.brand}</StyledBrand>
                <h1>{product.title}</h1>
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