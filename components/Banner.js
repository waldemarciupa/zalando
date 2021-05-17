import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import ButtonLink from '../components/ButtonLink'

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

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding-right: 0;
    } 
`

const StyledTextWrapper = styled.div`
    flex-basis: 41.66667%;
    max-width: 41.66667%;
    margin-top: 36px;

    @media (max-width: 768px) {
        margin-top: 0;
        margin-bottom: 24px;
        flex-basis: 100%;
        max-width: 100%;
    } 
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

const Banner = ({ title, text, background, href }) => {

    return (
        <StyledBanner background={background}>
            <Link href={href} passHref>
                <a>
                    <StyledBannerContainer>
                        <StyledTextWrapper>
                            <StyledTitle>
                                {title}
                            </StyledTitle>
                            <StyledText>
                                {text}
                            </StyledText>
                            <ButtonLink />
                        </StyledTextWrapper>
                        <StyledImage
                            src="/images/banner_1.webp"
                            width={600}
                            height={289}
                            alt="Odkryj teraz"
                        />
                    </StyledBannerContainer>
                </a>
            </Link>
        </StyledBanner>
    )
}

export default Banner