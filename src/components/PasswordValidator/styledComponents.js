import styled from 'styled-components'

export const Homebgcontainer = styled.div`
    background-color: #24263c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const PasswordContainer = styled.div`
    background-color: #383a4e;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px){
        width: 50vw;
    }
`
export const Heading = styled.h1`
    font-family: Roboto;
    color: #ffffff;
    font-size: 30px;
`
export const ParaText = styled.p`
    color: #ffffff;
    font-family: Roboto;
    font-size: 17px;
`
export const Input = styled.input`
    padding: 7px;
    width: 75%;
    padding-left: 11px;
    outline: none;
`
export const ErrorMsg = styled.p`
    font-family: Roboto;
    color: #ef4444;
`
