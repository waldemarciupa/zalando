import styled from 'styled-components'
import Link from 'next/link'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin: 0 auto 32px;
`

const StyledTitle = styled.h2`
    font-size: 1.75rem;
    letter-spacing: -.28px;
    line-height: 2rem;
    font-weight: 600;
    margin: 32px 0;
    padding-left: 8px;
`

const StyledBrandsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledBrandItem = styled.div`
    flex-basis: 25%;
    max-width: 25%;
    padding-left: 8px;
    padding-right: 8px;
`

const BrandSection = ({ brands }) => {
    return (
        <section>
            <StyledContainer>
                <StyledTitle>Popularne marki w działach odzież i obuwie</StyledTitle>
                <StyledBrandsContainer>
                    {brands.map(brand => {
                        return (
                            <StyledBrandItem>
                                <Link href={`/brands/${brand.id}`} passHref>
                                    <a>
                                        {brand.title}
                                    </a>
                                </Link>
                            </StyledBrandItem>
                        )
                    })}
                </StyledBrandsContainer>
            </StyledContainer>
        </section>
    )
}

export default BrandSection