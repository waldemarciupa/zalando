import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const StyledBanner = styled.div`
    background: ${props => props.background};
`

const StyledBannerContainer = styled.div`
    max-width: 1216px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
    max-width: 1216px;
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
`

const StyledTextWrapper = styled.div`
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    margin-top: 36px;
`

const StyledTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -.24px;
    line-height: 2rem;
`

const StyledText = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -.24px;
    line-height: 2rem;
`

const StyledImage = styled(Image)`
    flex-basis: 58.33333%;
    max-width: 58.33333%;
    margin-top: 24px;
`

const Banner = ({ title, text, background }) => {

    return (
        <StyledBanner background={background}>
            <StyledBannerContainer>
                <StyledTextWrapper>
                    <StyledTitle>
                        {title}
                    </StyledTitle>
                    <StyledText>
                        {text}
                    </StyledText>
                </StyledTextWrapper>
                <StyledImage
                    src="/images/banner_1.webp"
                    width={600}
                    height={289}
                    alt="Odkryj teraz"
                />
            </StyledBannerContainer>
        </StyledBanner>
    )
}

export default Banner