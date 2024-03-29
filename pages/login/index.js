import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import CustomButton from './../../components/Button'

const StyledContainer = styled.div`
    max-width: 1216px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 64px;
`

const StyledLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 33.33%;
    margin: 0 auto;
`

const StyledLoginTitle = styled.h3`
    font-size: 1.75rem;
    letter-spacing: -.28px;
    line-height: 2rem;
    font-weight: 600;
`

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyledLoginRow = styled.div`
    padding: 12px 0;
    width: 100%;
    position: relative;

    &:focus-within label {
        background: #000;
        color: #fff
    }
`

const StyledLoginLabel = styled.label`
    display: inline-block;
    font-size: .75rem;
    line-height: 1rem;
    letter-spacing: 0;
    padding: 4px 8px;
    border: 1px solid #1a1a1a;
    border-bottom: none;
`

const StyledLoginInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px 12px;
    font-size: 1rem;
    letter-spacing: -.16px;
    line-height: 1.5rem;
    font-weight: 400;
    border: 1px solid #1a1a1a;
    border-radius: 0;

    &:focus {
        outline: none;
        box-shadow: inset 0 0 0 1px #1a1a1a;
    }
`

const StyledPasswordButton = styled.button`
    position: absolute;
    bottom: 18px;
    right: 5px;
    background: transparent;
    border: none;
    cursor: pointer;
`

const styledRegisterWrapper = styled.div``

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = (event) => {
        event.preventDefault()
        setPasswordVisible(!passwordVisible)
    }

    return (
        <StyledContainer>
            <StyledLoginWrapper>
                <StyledLoginTitle>Witaj ponownie</StyledLoginTitle>
                <StyledLoginForm>
                    <StyledLoginRow>
                        <StyledLoginLabel
                            htmlFor="login_email">
                            Adres e-mail
                        </StyledLoginLabel>
                        <StyledLoginInput
                            type="email"
                            id="login_email"
                            name="login_email"
                            placeholder="Adres e-mail"
                            required />
                    </StyledLoginRow>
                    <StyledLoginRow>
                        <StyledLoginLabel
                            htmlFor="login_password">
                            Hasło
                        </StyledLoginLabel>
                        <StyledLoginInput
                            type={passwordVisible ? "text" : "password"}
                            id="login_password"
                            name="login_password"
                            placeholder="Hasło"
                            required />
                        <StyledPasswordButton onClick={togglePasswordVisibility}>
                            <Image width={24} height={24} src='/images/show_pass.png' />
                        </StyledPasswordButton>
                    </StyledLoginRow>
                    <StyledLoginRow>
                        <CustomButton
                            whiteColor
                            wide
                            isBlack
                            href='/login'
                            name='Zaloguj się' />
                    </StyledLoginRow>
                </StyledLoginForm>
            </StyledLoginWrapper>
        </StyledContainer>
    )
}

export default Login