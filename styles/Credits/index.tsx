import styled from "styled-components";
interface Props{
    state: boolean
}
const CreditsText = styled.h1`
color: #C0C0C0;
margin-top: 5em;    
font-size: 0.5em;
font-weight: 400
`
const CreditsLink = styled.a`
color: #C0C0C0;
margin-top: 5em;    
font-size: 0.5em;
font-weight: 400;
`

export default function Credits({state}: Props){
    if( state == true){
        return(
            <CreditsText>made by madson</CreditsText>
        )
    }
    else{
        return(
            <CreditsLink href="https://github.com/MadsonMendes/chat-alone">github repo</CreditsLink>
        )
    }
}