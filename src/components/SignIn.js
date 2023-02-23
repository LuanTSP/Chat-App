import React from 'react'
import styled from 'styled-components'
import { signInWithPopup } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../firebase'
import { BsChatLeftDotsFill } from 'react-icons/bs'

function SignIn({ provider }) {

  return (
    <Container>
        <p> Sign In </p>
        <StyledChatSVG />
        <button onClick={() => signInWithPopup(auth, provider)}>
            <StyledGoogleSVG /> Sign In with Google
        </button>
    </Container>
  )
}

export { SignIn }

const Container = styled.div`
    max-width: 500px;
    width: calc(100% - 4rem);
    height: calc(90vh - 8rem - 60px);
    background: ${props => props.theme.backgrounds.lineargrad_1};
    margin-top: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 8px black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    p {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        padding: 1rem 0;
        width: 100%;
        display: flex;
        justify-content: center;
        color: white;

        box-shadow: 0 0 20px -6px rgba(0,0,0,1);
    }

    button {
        max-width: 200px;
        width: 100%;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 2rem;
        border: none;
        background: ${props => props.theme.backgrounds.lineargrad_2};
        color: white;
        box-shadow: 0 0 6px rgba(0,0,0,0.5);
        transition: filter 150ms ease;

        &:hover {
            filter: saturate(2);
        }
    }    
`

const StyledChatSVG = styled(BsChatLeftDotsFill)`
    height: 70px;
    width: 70px;
    margin-bottom: 2rem;
    color: white;
`

const StyledGoogleSVG = styled(FcGoogle)`
    width: 32px;
    height: 32px;
    margin-right: 1rem;
`