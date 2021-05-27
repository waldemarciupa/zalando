import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin: 32px auto 0;
`

const StyledTitle = styled.h2`
    font-size: 1.75rem;
    letter-spacing: -.28px;
    line-height: 2rem;
    font-weight: 600;
`

const BrandSection = () => {
    return (
        <section>
            <StyledContainer>
                <StyledTitle>Popularne marki w działach odzież i obuwie</StyledTitle>
            </StyledContainer>
        </section>
    )
}

export default BrandSection