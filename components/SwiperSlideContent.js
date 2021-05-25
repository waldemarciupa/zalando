import Image from 'next/image'
import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    display: flex;
`

const StyledImageWrapper = styled.div`
    flex-basis: 50%;
`

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`

const StyledIcon = styled.div`
    padding-bottom: 16px;
`

const SwiperSlideContent = ({ image, icon, title, desc }) => {
    return (
        <StyledContainer>
            <StyledImageWrapper>
                <Image
                    src={image}
                    width={693}
                    height={500}
                    alt=""
                />
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledIcon>
                    <Image
                        src={icon}
                        width={240}
                        height={40}
                        alt="icon"
                    />
                </StyledIcon>
                <p>{title}</p>
                <p>{desc}</p>
            </StyledTextWrapper>
        </StyledContainer>
    )
}

export default SwiperSlideContent