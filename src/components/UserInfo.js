import React from 'react'
import styled from 'styled-components'

function UserInfo({ user }) {
  return (
    <Container>
        <UserImg user={user}/> { user.displayName }
    </Container>
  )
}

export { UserInfo }

const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
`

const UserImg = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 1rem;

    background: url(${props => props.user.photoURL});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.accent};

`