import Image from 'next/image'
import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
`

const SwiperSlideContent = ({ url, title, desc }) => {
    return (
        <StyledContainer>
            <Image
                src={url}
                width={699}
                height={503}
                alt=""
            />
            <p>{title}</p>
            <p>{desc}</p>
        </StyledContainer>
    )
}

export default SwiperSlideContent