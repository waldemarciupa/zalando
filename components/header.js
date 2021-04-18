import axios from 'axios'
import styled from 'styled-components'
import CustomButton from './button'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const StyledHeaderWrapperTop = styled.div`
    max-width: 1216px;
    height: 67px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`

const StyledMainCategoriesGroupWrapper = styled.div`
    flex-basis: 50%;

    @media (max-width: 1024px) {
        display: none;
    }
`

const StyledLink = styled.a`
    display: inline-block;
    line-height: 24px;
    color: #1a1a1a;
    padding: 6px 8px;
    font-weight: 700;

    &:hover {
        background: #efeff0;
    }
`

const StyledListItem = styled.li`
    display: inline;
`

const StyledLogoWrapper = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        justify-content: flex-start;
    }
`

const StyledLogoImage = styled(Image)`
    width: 130px;
`

const StyledButtonGroupWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 50%;
`

const StyledLoginButtonWrapper = styled.div`
    border: ${(props) => props.isHover ? "3px solid #1a1a1a" : "3px solid transparent"};
    border-bottom-color: transparent;
    position: relative;
`

const StyledCartButtonWrapper = styled.div`
    border: ${(props) => props.isHover ? "3px solid #1a1a1a" : "3px solid transparent"};
    border-bottom: none;
    margin-bottom: 2px;
    position: relative;
    background: #fff;
    z-index: 2;
`

const StyledButton = styled.a`
    display: flex;
    padding: 10px;
`

const StyledMiniBox = styled.div`
    position: absolute;
    top: 100%;
    right: -3px;
    border: 3px solid #1a1a1a;
    outline: none;
    background: #fff;
    color: #404040;
    width: 336px;
`

const StyledMiniLoginButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 16px;
`

const StyledMiniLoginTextWrapper = styled.div`
    padding: 0 16px 16px 28px;
`

const StyledLinkToRegister = styled.a`
    font-weight: 700;
    color: #6328e0;
`

const StyledMiniCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px ;
    background: ${props => props.top ? "#fff" : "#eee"};
`
const StyledMiniCartTitle = styled.span`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
`
const StyledMiniCartTopText = styled.span`
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: .5px;
    text-align: center;
    color: #1a1a1a;
    padding: 10px 24px 0;
`

const StyledHeaderWrapperBottom = styled.div`
    width: 100%;
    border-bottom: 1px solid #d0d1d3;

    div {
        max-width: 1216px;
        margin-left: auto;
        margin-right: auto;
        
        padding-left: 10px;
        padding-right: 10px;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    li {
        padding: 10px;
    }
`

const Header = () => {

    const [category, setCategory] = useState([]);
    const [isLoginHover, setIsLoginHover] = useState(false);
    const [isCartHover, setIsCartHover] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://localhost:1337/categories');
            setCategory(result.data);
            console.log(result.data);
        }

        fetchData()
    }, [])

    const toggleLoginHover = () => {
        setIsLoginHover(!isLoginHover)
    }

    const toggleCartHover = () => {
        setIsCartHover(!isCartHover)
    }

    return (
        <header>
            <StyledHeaderWrapperTop>
                <StyledMainCategoriesGroupWrapper>
                    <nav>
                        <ul>
                            {
                                category.map(category => {
                                    return (
                                        <StyledListItem key={category.id}>
                                            <Link href={`/categories/${category.id}`} passHref>
                                                <StyledLink >
                                                    {category.name}
                                                </StyledLink>
                                            </Link>
                                        </StyledListItem>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </StyledMainCategoriesGroupWrapper>
                <StyledLogoWrapper>
                    <Link href="/" passHref>
                        <a>
                            <StyledLogoImage
                                src="/images/logo.svg"
                                width={99}
                                height={20}
                                alt="logo"
                            />
                        </a>
                    </Link>
                </StyledLogoWrapper>
                <StyledButtonGroupWrapper>
                    <StyledLoginButtonWrapper onMouseEnter={toggleLoginHover} onMouseLeave={toggleLoginHover} isHover={isLoginHover}>
                        <Link href='/login' passHref>
                            <StyledButton >
                                <svg className="zds-icon" height="1em" width="1em" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-hidden="false" aria-labelledby="zaloguj-się-i5r3n" role="img"><title id="zaloguj-się-i5r3n">Zaloguj się</title><path d="M21.64 22.87a28.72 28.72 0 00-6.46-7.82c-2.32-1.9-4.04-1.9-6.37 0a28.74 28.74 0 00-6.45 7.82.75.75 0 001.29.76 27.26 27.26 0 016.11-7.42c.61-.59 1.4-.97 2.24-1.09.85.1 1.63.49 2.24 1.1a27.25 27.25 0 016.11 7.4.75.75 0 101.3-.75zM12 12a6 6 0 100-12 6 6 0 000 12zm0-10.5a4.5 4.5 0 11-.01 9.01A4.5 4.5 0 0112 1.5z"></path></svg>
                            </StyledButton>
                        </Link>
                        {
                            isLoginHover && <StyledMiniBox>
                                <StyledMiniLoginButtonWrapper>
                                    <CustomButton href='/login' name='Zaloguj się' />
                                </StyledMiniLoginButtonWrapper>
                                <StyledMiniLoginTextWrapper>
                                    <Link href='/register' passHref>
                                        <StyledLinkToRegister >Jesteś nowym klientem? </StyledLinkToRegister>
                                    </Link>
                                    <span>Przejdź dalej</span>
                                </StyledMiniLoginTextWrapper>
                            </StyledMiniBox>
                        }
                    </StyledLoginButtonWrapper>
                    <div>
                        <Link href='/wardrobe' passHref>
                            <StyledButton >
                                <svg className="zds-icon" height="1em" width="1em" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-hidden="false" aria-labelledby="lista-życzeń-bfobg" role="img"><title id="lista-życzeń-bfobg">Lista życzeń</title><path d="M17.49 1.1l-.15.01A6.55 6.55 0 0012 3.91a6.57 6.57 0 00-5.37-2.8A6.4 6.4 0 00.09 7.44c0 7.67 11.03 15.03 11.5 15.34a.75.75 0 00.82 0c.47-.31 11.5-7.67 11.5-15.36a6.43 6.43 0 00-6.42-6.3zM12 21.24c-1.98-1.4-10.4-7.7-10.4-13.79A4.93 4.93 0 016.6 2.62a5.03 5.03 0 014.69 3.15c.22.57 1.16.57 1.39 0a5.08 5.08 0 014.7-3.16h.01a4.92 4.92 0 015 4.82c0 6.09-8.42 12.4-10.4 13.8z"></path></svg>
                            </StyledButton>
                        </Link>
                    </div>
                    <StyledCartButtonWrapper onMouseEnter={toggleCartHover} onMouseLeave={toggleCartHover} isHover={isCartHover}>
                        <Link href='/cart' passHref>
                            <StyledButton >
                                <svg className="zds-icon" height="1em" width="1em" focusable="false" fill="currentColor" viewBox="0 0 24 24" aria-hidden="false" aria-labelledby="koszyk-jop7z" role="img"><title id="koszyk-jop7z">Koszyk</title><path d="M21.2 8.71a2.98 2.98 0 00-3-2.72h-.94v-.76a5.26 5.26 0 00-10.52 0V6H5.8A2.98 2.98 0 002.81 8.7L1.7 20.73V21a3 3 0 003 3l14.6-.03h.26a3 3 0 002.72-3.27l-1.1-11.99zM8.24 5.23a3.75 3.75 0 017.5 0V6h-7.5v-.76zM19.3 22.47l-14.6.03a1.5 1.5 0 01-1.49-1.63l1.1-12.02c.06-.77.7-1.37 1.48-1.36h.95v2.25a.75.75 0 001.5 0V7.49h7.51v2.25a.75.75 0 101.5 0V7.49h.96c.77 0 1.42.59 1.49 1.36l1.09 12v.12c0 .83-.66 1.5-1.49 1.5z"></path></svg>
                            </StyledButton>
                        </Link>

                        {
                            isCartHover && <StyledMiniBox>
                                <StyledMiniCartWrapper top>
                                    <StyledMiniCartTitle>Twój koszyk jest pusty</StyledMiniCartTitle>
                                    <StyledMiniCartTopText>Daj się zainspirować i wypełnij go najnowszymi trendami.</StyledMiniCartTopText>
                                </StyledMiniCartWrapper>
                                <StyledMiniCartWrapper>
                                    <StyledMiniCartTitle>
                                        Nie wiesz od czego zacząć?
                                    </StyledMiniCartTitle>
                                    <CustomButton href='/new' name="Zobacz nowości" />
                                </StyledMiniCartWrapper>
                            </StyledMiniBox>
                        }
                    </StyledCartButtonWrapper>
                </StyledButtonGroupWrapper>
            </StyledHeaderWrapperTop>
            <StyledHeaderWrapperBottom>
            </StyledHeaderWrapperBottom>
        </header>
    )
}

export default Header