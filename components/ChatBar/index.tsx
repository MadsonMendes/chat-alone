import { KeyboardEventHandler } from 'react'
import styled from 'styled-components'

interface Props{
    onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> 
}

const Bar = styled.textarea`
margin-top: 1em;
display: flex;
border: none;
border-radius: 10px;
background-color: #EDEDED;
resize: none;
word-wrap: break-word;
overflow: auto;
width: 100%;
max-width: 23em;
min-height: 3em;
padding: 0.5em 0 0 0.5em;
font-family: 'Open Sans', sans-serif;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
&:focus-visible{
    border: none;
    outline: none;
}
`
export default function ChatBar({onKeyDown}:Props){
    return(
    <Bar 
    wrap="soft" 
    maxLength={400} 
    onKeyDown={onKeyDown} 
    placeholder="Message..."
    />
)
}