import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SessionDay from "./SessionDay"
import FooterSession from "./FooterSession"
import { URL } from "../../constants/url"


export default function SessionPage({ title }) {
    const { id } = useParams()
    const [sections, setSections] = useState([])
    const [movieTitle, setMovieTitle] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        const promise = axios.get(`${URL}/movies/${id}/showtimes`)

        promise.then(resp => {
            setImage(resp.data.posterURL)
            setMovieTitle(resp.data.title)
            setSections(resp.data.days)
        })

        promise.catch(err => console.log(err.response.data));
    }, [])

    return (
        <SelectMovieTimeContainer>
            <h2>Selecione o horário</h2>
            {sections.map((item) => <SessionDay
                key={item.id}
                id={item.id}
                weekday={item.weekday}
                date={item.date}
                showTimes={item.showtimes} />)}
            <FooterSession title={movieTitle} image={image} />
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