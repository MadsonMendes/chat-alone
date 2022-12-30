import styled from 'styled-components'

interface Props{
    children: React.ReactNode
}

const Main = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column
`

export default function Container({children}: Props){
    return(
        <Main>
            {children}
        </Main>
    )
}