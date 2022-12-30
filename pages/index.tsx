import { KeyboardEvent, useEffect, useState } from "react"
import Background from "../components/Background"
import ChatBar from "../components/ChatBar"
import Message, { MessageContainer } from "../components/Message"
import { ChatContainer } from "../styles/ChatContainer"
import Container from "../styles/Container"
import Credits from "../styles/Credits"

export default function Home() {
  useEffect(() => {
    console.log('Type "github" to check repo')
  }, [])

  const [CreditsState, setCreditsState] = useState(true)
  const [Messages, setMessages] = useState(['Chat alone!'])
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      if (e.target.value == '') {
        e.preventDefault()
      }
      else if (e.target.value == 'github' || e.target.value == 'Github') {
        e.preventDefault()
        setMessages([...Messages, e.target.value])
        setCreditsState(false)
        e.target.value = ''
      }
      else {
        e.preventDefault()
        setMessages([...Messages, e.target.value])
        e.target.value = ''      
      }
    }
  }
  if (Messages.length > 10) {
    Messages.shift()
  }

  return (
    <Container>
      <ChatContainer>
        <Background>
          {Messages.map((e, i) => {
            return (
              <MessageContainer key={i}>
                <Message>
                  {e}
                </Message>
              </MessageContainer>
            )
          })}
        </Background>
        <ChatBar onKeyDown={handleKeyPress} />
      </ChatContainer>
      <Credits state={CreditsState} />
    </Container>
  )
}
