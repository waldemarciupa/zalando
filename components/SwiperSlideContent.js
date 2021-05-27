import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    display: flex;
    padding-left: 18px;

    @media (max-width: 1025px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

const StyledContent = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    flex-grow: 1;

    @media (max-width: 1200px) {
        min-width: 50%;
    }
`

const StyledIcon = styled.div`
    padding-bottom: 32px;
`

const StyledParagraph = styled.p`
    color: #fff;
    font-size: ${(props) => props.small ? "1rem" : "1.25rem"};
    font-weight: 600;
    letter-spacing: -.2px;
    line-height: 1.75rem;
    font-weight: ${(props) => props.bold ? "700" : "400"};
`

const StyledCategoriesWrapper = styled.div`
    margin-bottom: 48px;
    flex-grow: 2;
    display: ${(props) => props.mobile ? "none" : "flex"};
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 991px) {
        margin-bottom: 16px;
    }

    @media (max-width: 767px) {
        display: ${(props) => props.mobile ? "flex" : "none"};
    }
`

const StyledCategoriesContent = styled.div`
    margin-top: 16px;
    margin-left: -8px;
`

const StyledLink = styled.a`
    display: inline-block;
    width: 100px;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: -.16px;
    line-height: 1.5rem;
    color: #1a1a1a;
    background-color: #fff;
    margin: 0 8px;
    outline: none;
    padding: 12px;
    transition: all .15s ease;
    text-align: center;

    &:hover {
        background-color: #a2a3a8;
    }

    &:focus {
        background-color: #a2a3a8;
    }
`

const SwiperSlideContent = ({ image, icon, title, desc, navigation }) => {
    return (
        <StyledContainer>
            <StyledCategoriesWrapper mobile>
                <StyledParagraph small bold>
                    Jaka kategoria mody Cię interesuje?
                    </StyledParagraph>
                <StyledCategoriesContent>
                    {
                        navigation.map(item => {
                            return (
                                <Link
                                    key={item.id}
                                    href={`/categories/${item.slug}`}
                                    passHref
                                >
                                    <StyledLink>
                                        {item.title}
                                    </StyledLink>
                                </Link>
                            )
                        })
                    }
                </StyledCategoriesContent>
            </StyledCategoriesWrapper>
            <Image
                src={image}
                width={693}
                height={500}
                alt=""
            />
            <StyledContent>
                <StyledIcon>
                    <Image
                        src={icon}
                        width={240}
                        height={40}
                        alt="icon"
                    />
                </StyledIcon>
                <StyledParagraph bold>{title}</StyledParagraph>
                <StyledParagraph>{desc}</StyledParagraph>
                <StyledCategoriesWrapper>
                    <StyledParagraph small bold>
                        Jaka kategoria mody Cię interesuje?
                    </StyledParagraph>
                    <StyledCategoriesContent>
                        {
                            navigation.map(item => {
                                return (
                                    <Link
                                        key={item.id}
                                        href={`/categories/${item.slug}`}
                                        passHref
                                    >
                                        <StyledLink>
                                            {item.title}
                                        </StyledLink>
                                    </Link>
                                )
                            })
                        }
                    </StyledCategoriesContent>
                </StyledCategoriesWrapper>
            </StyledContent>
        </StyledContainer>
    )
}

export default SwiperSlideContent