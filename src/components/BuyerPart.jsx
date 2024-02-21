import styled from "styled-components"

export default function BuyerPart() {
    return (
        <>
            <InputsStyle>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome ..." />
            </InputsStyle>
            <InputsStyle>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF ..." />
            </InputsStyle>
        </>
    )
}

const InputsStyle = styled.div`
    width: 350px;
    margin: 25px 10px 0 10px;
    display: flex;
    flex-direction: column;
    
    p {
        font-size: 18px;
    }

    input {
        height: 35px;
        margin-top: 3px;
        border: 1px solid #D4D4D4;
        &::placeholder {
            color: #AFAFAF;
            font-size: 18px;
            padding-left: 10px;
        }
    }
`

