import { Link } from "react-router-dom"
import styled from "styled-components"

export default function MovieCard({ image }) {
    return (
        <MovieCardStyle>
            <Link to={"/section"}>
                <img src={image} />
            </Link>
        </MovieCardStyle>
    )
}

const MovieCardStyle = styled.div`
    width: 145px;
    height: 209px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    cursor: pointer;
    
    img {
        width: 129px;
        height: 193px;
    }
`
