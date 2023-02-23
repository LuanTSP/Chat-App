import React from 'react'
import { signOut } from 'firebase/auth'
import styled from 'styled-components'
import { auth } from '../firebase'

function SignOut() {
  return (
    <Container>
        <button onClick={() => signOut(auth)}>Sign Out</button>
    </Container>
    
  )
}

export { SignOut }

const Container = styled.div`
  width: fit-content;
  height: calc(100% - 1rem);
  margin: 0.5rem 0;

  display: flex;
  align-items: center;

  button {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background: none;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 200ms ease;
    font-weight: bold;

    &:hover {
      background: ${props => props.theme.colors.primary};
      border: 2px solid ${props => props.theme.colors.accent};
      color: white;
      filter: brightness(85%);
    }
  }
`