import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { BsArrowRightSquareFill, BsChatLeftDotsFill } from 'react-icons/bs'
import { db } from '../firebase'
import { auth } from '../firebase'
import { query, collection, limit, addDoc, serverTimestamp, orderBy, onSnapshot } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Message } from './Message'
import { SignOut } from './SignOut'

function Chat() {
  const messagesRef = collection(db, "messages")
  const q = query(messagesRef, orderBy("time", 'desc'), limit(30))

  const [inputData, setInputData] = useState([])
  
  // new way >>>
  const [snapshot, loading, error] = useCollection(q)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getData = async () => {
      setMessages(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getData()
    console.log(messages)
  },[snapshot])
  // <<<
  
  // const [messages, setMessages] = useState([])
  // onSnapshot(q, (snapshot) => {
  //   setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  // })

  const dummy = useRef()

  const sendMessage = async () => {
    await addDoc(messagesRef,{
      text: inputData,
      userName: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      uid: auth.currentUser.uid,
      time: serverTimestamp(),
    })
    .then(() => {
      document.getElementById("#inputData").value = ""
      setInputData("")
      dummy.current.scrollIntoView({ behaviour: "smooth" })
    })
  }

  return (
    <Container>
      <ChatHeader>
        <BsChatLeftDotsFill />
        <SignOut />
      </ChatHeader>
      <ChatContents>
        <Messages style={{scrollBehavior: 'smooth'}}>
          { messages && messages.map((msgData) => <Message key={msgData.id} msgData={msgData} />)}
        </Messages>
        <div ref={dummy} />
      </ChatContents>
      <ChatControl onSubmit={(e) => {
        e.preventDefault()
        sendMessage()
      }}>
        <input id="#inputData" autoComplete='off' type="text" placeholder=' Your Message' onChange={(e) => setInputData(e.target.value)} />
        <button > <BsArrowRightSquareFill /> </button>
      </ChatControl>
    </Container>
  )
}

export { Chat }

const Container = styled.div`
    width: calc(100% - 1rem);
    height: calc(100vh - 2rem);

    margin-top: 1rem;
    background: white;

    display: flex;
    flex-direction: column;
    box-shadow: 0 0 6px rgba(0,0,0,0.5);
`

const ChatHeader = styled.div`
  height: 60px;
  width: 100%;
  background: ${props => props.theme.backgrounds.lineargrad_1};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }
`

const ChatContents = styled.div`
  height: calc(100% - 60px - 60px);
  background: ${props => props.theme.backgrounds.lineargrad_2};
  box-shadow: inset 0 0 6px black;
`

const Messages = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`

const ChatControl = styled.form`
  height: 60px;
  width: 100%;
  background: ${props => props.theme.backgrounds.lineargrad_1};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  svg {
    width: 40px;
    height: 40px;
    margin: 0 1rem 0 0.5rem;
  }

  input {
    margin: 0 0.5rem 0 1rem;
    padding: 0 1rem;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-size: 1.3rem;

    &:focus {
      outline: none;
    }
  }
`