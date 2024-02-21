import styled from "styled-components"

export default function Header() {
    return (
        <Title>
            <h1>CINEFLEX</h1>
        </Title>
    )
}

const Title = styled.div`
    background-color: #C3CFD9;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    h1 {
        color: #E8833A;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 34px;
    }
`