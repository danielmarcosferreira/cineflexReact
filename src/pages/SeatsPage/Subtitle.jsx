import styled from "styled-components"
import { seatColors } from "../../constants/colors"

export default function Subtitle () {
    const {selected, available, unavailable} = seatColors
    return (
        <SubtitleStyle>
            <SubtitleDiv>
                <SeatButton color={selected.background} border={selected.border} />
                <p>Selecionado</p>
            </SubtitleDiv>
            <SubtitleDiv>
                <SeatButton color={available.background} border={available.border} />
                <p>Disponível</p>
            </SubtitleDiv>
            <SubtitleDiv>
                <SeatButton color={unavailable.background} border={unavailable.border} />
                <p>Indisponível</p>
            </SubtitleDiv>
        </SubtitleStyle>
    )
}

const SubtitleStyle = styled.div`
    display: flex;
    justify-content: center;
`

const SubtitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
`

const SeatButton = styled.button`
    background-color: ${props => props.color};
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 50%;
    border: 1px solid ${props => props.border};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`