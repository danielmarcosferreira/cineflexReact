import { useEffect, useState } from "react";
import styled from "styled-components"
import { seatColors } from "../../constants/colors";

export default function Seat({ seat, handleSeats, isSelected }) {
    const [status, setStatus] = useState("selected")

    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (seat.isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected])

    return (
        <SeatItem status={status} onClick={() => handleSeats(seat)}>
            {seat.name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
    background-color: ${props => seatColors[props.status].background};
    border: 1px solid ${props => seatColors[props.status].border};
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`