import styled from "styled-components"
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { themes } from "./Context/Themes"
import { Header } from './components/Header'
import { Chat } from "./components/Chat"
import { SignIn } from "./components/SignIn"
import { auth } from "./firebase"
import { GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    font-family: "Poppins";
  }
`

const googleProvider = new GoogleAuthProvider()

function App() {
  
  const [currentTheme, setCurrentTheme] = useState("light")

  const toggleTheme = (theme) => {
    if (theme === "light") {
      setCurrentTheme("light")
    } else {
      setCurrentTheme("dark")
    }
  }
  
  const [user] = useAuthState(auth)

  return (
    
    <Container className="App">
      <GlobalStyles />
      <ThemeProvider theme={currentTheme === "dark" ? themes.dark : themes.light}>
        { user ? <></> : <Header user={user} /> }
        { user ? <Chat user={user} /> : <SignIn provider={googleProvider} /> }
      </ThemeProvider>
    </Container>
  )
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: linear-gradient(45deg, #8360c3, #2ebf91);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`