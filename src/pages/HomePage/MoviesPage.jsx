import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "./MovieCard"
import { URL } from "../../constants/url"

export default function MoviesPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get(`${URL}/movies`)

        promise.then(resp => setMovies(resp.data))

        promise.catch(err => console.log(err.response.data))
    }, [])

    if (!movies) {
        return <div>Carregando ....</div>
    }

    return (
        <SelectMovieContainer>
            <h2>Selecione o filme</h2>
            <MovieCardContainer>
                {movies.map((item) => <MovieCard key={item.id} movie={item} />)}
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
        padding: 30px 0 0 0;
    }
`

const MovieCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2px;
`