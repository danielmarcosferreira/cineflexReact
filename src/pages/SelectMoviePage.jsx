import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "../components/MovieCard"

export default function SelectMoviePage() {
    const [movies, setMovies] = useState([])
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"

    useEffect(() => {
        const requisition = axios.get(URL)

        requisition.then(resp => {
            setMovies(resp.data)
        })

        requisition.catch(err => {
            console.log(err.response.data)
        })
    }, [])

    return (
        <SelectMovieContainer>
            <h2>Selecione o filme</h2>
            <MovieCardContainer>
                {movies.map((item) => <MovieCard image={item.posterURL} />)}
            </MovieCardContainer>
        </SelectMovieContainer>
    )
}

const SelectMovieContainer = styled.div`
    height: 110px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-family: sans-serif;
        font-size: 34px;
        font-weight: lighter;
        padding: 35px 0;
    }
`

const MovieCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
`