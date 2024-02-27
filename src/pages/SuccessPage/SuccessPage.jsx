import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage({ name, cpf, movieName, movieDay, movieTime }) {
    return (
        <FinalizedPageContainer>
            <h2>Pedido feito com sucesso!</h2>
            <FinalizationComponent>
                <h3>Filme e sessão</h3>
                <p>{movieName}</p>
                <p>{movieDay} {movieTime}</p>
            </FinalizationComponent>
            <FinalizationComponent>
                <h3>Ingressos</h3>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </FinalizationComponent>
            <FinalizationComponent>
                <h3>Filme e sessão</h3>
                <p>Nome: {name} </p>
                <p>CPF: {cpf}</p>
            </FinalizationComponent>

            <Link to={"/"}>
                <ButtonBottom>Voltar para Home</ButtonBottom>
            </Link>
        </FinalizedPageContainer>
    )
}

const FinalizedPageContainer = styled.div`
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #247A6B;
        font-size: 30px;
        padding: 0 100px;
        text-align: center;
    }
`

const FinalizationComponent = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: 15px;

    h3 {
        font-size: 25px;
        margin: 10px 0;
    }

    p {
        margin-bottom: 2px;
        color: #293845;
    }
`

const ButtonBottom = styled.button`
    background-color: #E8833A;
    color: white;
    font-size: 17px;
    font-weight: 400;
    width: 225px;
    height: 40px;
    margin-top: 60px;
    border-radius: 5px;
    border: none;
    cursor: pointer;   
`