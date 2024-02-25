import styled from "styled-components"
import FooterSeats from "../components/FooterSeats"
import { useEffect, useState } from "react";
import axios from "axios"
import BuyerPart from "../components/BuyerPart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"



export default function SelectSeatsPage({ movies }) {
    const { id } = useParams()
    const [seats, setSeats] = useState([])
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [weekday, setWeekday] = useState()
    const [hour, setHour] = useState()

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)

        requisition.then(resp => {
            setSeats(resp.data.seats)
            setName(resp.data.movie.title)
            setImage(resp.data.movie.posterURL)
            setWeekday(resp.data.day.weekday)
            setHour(resp.data.name)
            console.log(resp.data);
        })

        requisition.catch(err => {
            console.log(err.response.data);
        })
    }, [])

    return (
        <SelectSeatsStyle>
            <h2>Selecione o(s) assento(s)</h2>
            <SeatsMapStyle>
                {seats.map((item) => <SeatButton key={item.id} color={"#C3CFD9"} border={"#7B8B99"}>{item.name}</SeatButton>)}
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
            <FooterSeats name={name} image={image} weekday={weekday} hour={hour}/>
        </SelectSeatsStyle>
    )
}

const SelectSeatsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 180px;
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