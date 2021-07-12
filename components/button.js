import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.a`
    margin-top: 16px;
    border: 3px solid #1a1a1a;
    background: ${(props) => props.isBlack ? "#000" : "#fff"};
    color: ${(props) => props.whiteColor ? "#fff" : "#1a1a1a"};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0;
    display: inline-block;
    width: ${(props) => props.wide ? "100%" : "80%"};
    text-align: center;
    transition: all .2s ease-in-out;

    &:hover {
        background: ${(props) => props.isBlack ? "#fff" : "#000"};
        color: ${(props) => props.whiteColor ? "#000" : "#fff"};
    }
`

const CustomButton = ({ href, name, isBlack, wide, whiteColor }) => {
    // Must add passHref to Link
    return (
        <Link href={href} passHref>
            <Button isBlack={isBlack} wide={wide} whiteColor={whiteColor}>
                {name}
            </Button>
        </Link >
    )
}


export default CustomButton