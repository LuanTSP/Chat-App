import React from 'react'
import styled from 'styled-components'
import { SignOut } from './SignOut'
import { UserInfo } from './UserInfo'

function Header({ user }) {
  return (
    <Container>
        <nav>
            { user ? <UserInfo user={user}/> : "Welcome to the Chat-Room"}
            { user ? <SignOut user={user}/> : (<></>) }
        </nav>
    </Container>
  )
}

export { Header }

const Container = styled.div`
    height: 60px;
    width: 100%;

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 0 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
    }
    
    display: flex;
    justify-content: space-around;

    background: ${props => props.theme.backgrounds.lineargrad_1};
    box-shadow: 0 8px 6px -6px rgba(0,0,0,0.5);
`