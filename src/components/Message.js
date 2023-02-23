import React from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'

function Message({ msgData }) {
  return (
    <Container msgUid={msgData.uid} currUid={auth.currentUser.uid}>
        <Image photoURL={msgData.photoURL} />
        <Baloon >
          { msgData.text }
        </Baloon>
    </Container>
  )
}

export { Message };

const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0.5rem 0.5rem;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: ${props => props.msgUid === props.currUid ? "row-reverse" : "row"};
    gap: 1rem;
`

const Image = styled.div`
    background: url(${props => props.photoURL});
    background-position: center;
    background-size: cover;

    border: solid 2px ${props => props.theme.colors.accent};
    border-radius: 50%;

    width: 40px;
    height: 40px;

`

const Baloon = styled.div`
    width: fit-content;
    max-width: 250px;
    padding: 0.5rem;
    overflow-wrap: break-word;

    background: ${props => props.theme.backgrounds.lineargrad_1};
    color: white;
    border-radius: 3px;
`