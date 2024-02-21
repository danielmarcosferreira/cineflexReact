import styled from "styled-components"
import FooterSeats from "../components/FooterSeats"
import { useEffect, useState } from "react";
import axios from "axios"
import BuyerPart from "../components/BuyerPart";
import { Link } from "react-router-dom";


export default function SelectSeatsPage({ movies }) {
    const [seats, setSeats] = useState([])
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/showtimes/7/seats";

    useEffect(() => {
        const requisition = axios.get(URL)

        requisition.then(resp => {
            setSeats(resp.data.seats)
            console.log(seats);

        })

        requisition.catch(err => {
            console.log(err.response.data);
        })
    }, [])

    return (
        <SelectSeatsStyle>
            <h2>Selecione o(s) assento(s)</h2>
            <SeatsMapStyle>
                {seats.map((item) => <SeatButton color={"#C3CFD9"} border={"#7B8B99"}>{item.name}</SeatButton>)}
            </SeatsMapStyle>

            <SubtitleStyle>
                <SubtitleDiv>
                    <SeatButton color={"#1AAE9E"} border={"#0E7D71"} />
                    <p>Selecionado</p>
                </SubtitleDiv>
                <SubtitleDiv>
                    <SeatButton color={"#C3CFD9"} border={"#7B8B99"} />
                    <p>Disponível</p>
                </SubtitleDiv>
                <SubtitleDiv>
                    <SeatButton color={"#FBE192"} border={"#F7C52B"} />
                    <p>Indisponível</p>
                </SubtitleDiv>
            </SubtitleStyle>
            <BuyerPart />
            <Link to={"/success"}>
                <ButtonReserve>Reservar assento(s)</ButtonReserve>
            </Link>
            <FooterSeats />
        </SelectSeatsStyle>
    )
}

const SelectSeatsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
     h2 {
        text-align: center;
        font-family: sans-serif;
        font-size: 30px;
        font-weight: lighter;
        padding-top: 20px;
        margin: 80px 0 20px 0 ;
    }
`

const SeatsMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 8px ;
`

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
`
const ButtonReserve = styled.button`
    background-color: #E8833A;
    color: white;
    font-size: 17px;
    font-weight: 400;
    width: 225px;
    height: 40px;
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`