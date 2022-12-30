import styled from "styled-components"

interface Props {
    children: React.ReactNode
}

const BgStyle = styled.div`
width: 100%;
background: linear-gradient(151.11deg, #4CAA30 6.74%, #59C4EB 90.8%);
mix-blend-mode: screen;
overflow: auto;
`

export default function Background({ children }: Props) {
    return (
        <BgStyle>
            {children}
        </BgStyle>
    )
}