import styled from "styled-components"

export default function FinalizationPage() {
    return (
        <FinalizedPageContainer>
            <h2>Pedido feito com sucesso!</h2>
            <FinalizationComponent>
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </FinalizationComponent>
            <FinalizationComponent>
                <h3>Ingressos</h3>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </FinalizationComponent>
            <FinalizationComponent>
                <h3>Filme e sessão</h3>
                <p>Nome: João da Silva Sauro </p>
                <p>CPF: 123.456.789-10</p>
            </FinalizationComponent>

            <ButtonBottom>Voltar para Home</ButtonBottom>
        </FinalizedPageContainer>
    )
}

const FinalizedPageContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #247A6B;
        font-size: 24px;
        padding: 0 130px;
    }
`

const FinalizationComponent = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: 20px;

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