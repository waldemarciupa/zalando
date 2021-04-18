import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.a`
    margin-top: 16px;
    border: 3px solid #1a1a1a;
    background: #fff;
    color: #1a1a1a;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0;
    display: inline-block;
    width: 80%;
    text-align: center;
    transition: all .2s ease-in-out;

    &:hover {
        background: #000;
        color: #fff; 
    }
`

const CustomButton = ({ href, name }) => {
    // Must add passHref to Link
    return (
        <Link href={href} passHref>
            <Button>
                {name}
            </Button>
        </Link >
    )
}


export default CustomButton