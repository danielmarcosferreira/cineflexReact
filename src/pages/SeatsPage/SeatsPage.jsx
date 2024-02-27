import styled from "styled-components"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import FooterSeats from "./FooterSeats"
import BuyerForm from "./BuyerForm";
import Seat from "./Seat";
import { URL } from "../../constants/url";
import Subtitle from "./Subtitle";

export default function SeatsPage({
    setName,
    setCpf,
    setMovieName,
    movieName,
    setMovieTime,
    movieTime,
    setMovieDay,
    movieDay,
    imagePoster,
    setImagePoster }) {
    const { id } = useParams()
    const [seats, setSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])



    useEffect(() => {
        const promise = axios.get(`${URL}/showtimes/${id}/seats`)

        promise.then(resp => {
            setSeats(resp.data.seats)
            setMovieName(resp.data.movie.title)
            setImagePoster(resp.data.movie.posterURL)
            setMovieDay(resp.data.day.weekday)
            setMovieTime(resp.data.name)
        })

        promise.catch(err => {
            console.log(err.response.data);
        })
    }, [])

    function handleSeats(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento nao esta disponivel!")
        } else {
            const isSelected = selectedSeats.some(s => seat.id === s.id)
            if (isSelected) {
                const newList = selectedSeats.filter(s => seat.id !== s.id)
                setSelectedSeats(newList)
            } else {
                setSelectedSeats([...selectedSeats, seat])
            }
        }
    }

    if (!seats) {
        return <div>Carregando...</div>
    }

    return (
        <SelectSeatsStyle>
            <h2>Selecione o(s) assento(s)</h2>

            <SeatsMapStyle>
                {seats.map((seat) => <Seat
                    key={seat.id}
                    seat={seat}
                    handleSeats={handleSeats}
                    isSelected={selectedSeats.some((s) => seat.id === s.id)}
                >{seat.name}</Seat>)}
            </SeatsMapStyle>

            <Subtitle />

            <BuyerForm
                setName={setName}
                setCpf={setCpf}
                selectedSeats={selectedSeats}/>

            <FooterSeats
                movieName={movieName}
                imagePoster={imagePoster}
                movieTime={movieTime}
                movieDay={movieDay} />
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
