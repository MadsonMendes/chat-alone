import styled from "styled-components";

interface Props{
    children: React.ReactNode
}

export const MessageContainer = styled.div`
max-width: 19em;
display: flex;
justify-content: flex-end;
background: white;
mix-blend-mode: screen;
`
const MessageText = styled.p`
text-align: justify;
padding: 0.5em 0.75em;
word-wrap: break-word;
overflow: auto;
border-radius: 10px 10px 0 10px;
margin: 0 0 0.25em 0;
background-color: black;
color: white;
`
export default function Message({children}: Props){
    return(
        <MessageText>
            {children}
        </MessageText>
    )
}