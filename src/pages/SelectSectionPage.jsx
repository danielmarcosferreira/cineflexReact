import styled from "styled-components"
import SchedulingDay from "../components/SchedulingDay"
import FooterMovieTime from "../components/FooterMovieTime"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SelectSectionPage({ title }) {
    const { id } = useParams()
    const [sections, setSections] = useState([])
    const [movieTitle, setMovieTitle] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        requisition.then(resp => {
            setImage(resp.data.posterURL)
            setMovieTitle(resp.data.title)
            setSections(resp.data.days)
            console.log(resp.data);
        })

        requisition.catch(err => {
            console.log(err.response.data);
        })
    }, [])

    return (
        <SelectMovieTimeContainer>
            <h2>Selecione o horário</h2>
            {sections.map((item) => <SchedulingDay
                key={item.id}
                id={item.id}
                weekday={item.weekday}
                date={item.date}
                showTimes={item.showtimes} />)}
            <FooterMovieTime title={movieTitle} image={image} />
        </SelectMovieTimeContainer>
    )
}

const SelectMovieTimeContainer = styled.div`
    height: 100%;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;

    h2 {
        text-align: center;
        font-family: sans-serif;
        font-size: 34px;
        font-weight: lighter;
        padding-top: 20px;
    }
`