import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SessionDay({id, weekday, date, showTimes}) {
    return (
        <SchedulingDayStyle>
            <h3>{weekday} - {date}</h3>
            <div>
                <Link to={`/seats/${showTimes[0].id}`}>
                    <button>{showTimes[0].name}</button>
                </Link>
                <Link to={`/seats/${showTimes[1].id}`}>
                    <button>{showTimes[1].name}</button>
                </Link>
            </div>
        </SchedulingDayStyle>
    )
}

const SchedulingDayStyle = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h3 {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 20px;
        margin: 30px 0;
    }
    button {
        background-color: #E8833A;
        color: white;
        width: 82px;
        height: 43px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;
    }
`