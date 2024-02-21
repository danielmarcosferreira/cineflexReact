import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SchedulingDay() {
    return (
        <SchedulingDayStyle>
            <h3>Quinta-feira - 24/06/2021</h3>
            <div>
                <Link to={"/seats"}>
                    <button>15:00</button>
                </Link>
                <Link to={"/seats"}>
                    <button>19:00</button>
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