import styled from 'styled-components'
import Link from 'next/link'

const StyledButton = styled.div`
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: transparent;
    transition: border .15s ease-in-out;
    /* cursor: pointer; */
    width: 120px;
    height: 28px;
    margin-top: 24px;
    

    &:hover {
        border-color: #1a1a1a;
    }
`

const StyledButtonText = styled.span`
    font-size: 1rem;
    letter-spacing: -.16px;
    line-height: 1.5rem;
    font-weight: 700;
`

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
`

const ButtonLink = ({ href }) => {

    return (
        <StyledButton>
            <Link href={href} passHref>
                <StyledLink>
                    <StyledButtonText>Odkryj teraz</StyledButtonText>
                    <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </StyledLink>
            </Link>
        </StyledButton>
    )
}

export default ButtonLink