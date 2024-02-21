import styled from "styled-components"
import SchedulingDay from "../components/SchedulingDay"
import FooterMovieTime from "../components/FooterMovieTime"
import axios from "axios"
import { useEffect, useState } from "react"

export default function SelectSectionPage() {
    const [sections, setSections] = useState([])
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes";

    useEffect(() => {
        const requisition = axios.get(URL)

        requisition.then(resp => {
            setSections(resp.data.days)
            console.log(sections);

        })

        requisition.catch(err => {
            console.log(err.response.data);
        })
    }, [])

    return (
        <SelectMovieTimeContainer>
            <h2>Selecione o horário</h2>
            <SchedulingDay />
            <SchedulingDay />

            <FooterMovieTime />
        </SelectMovieTimeContainer>
    )
}

const SelectMovieTimeContainer = styled.div`
    height: 110px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
        font-family: sans-serif;
        font-size: 34px;
        font-weight: lighter;
        padding-top: 20px;
    }
`