import styled from "styled-components"

export default function FooterSeats({ movieName, imagePoster, movieTime, movieDay }) {
    return (
        <FooterSeatsStyle>
            <ImageFooter>
                <img src={imagePoster} />
            </ImageFooter>

            <FooterText>
                <h4>{movieName}</h4>
                <h4>{movieDay} - {movieTime}</h4>
            </FooterText>
        </FooterSeatsStyle>
    )
}

const FooterSeatsStyle = styled.div`
    background-color: #DFE6ED;
    height: 120px;
    width: 100%;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
`

const ImageFooter = styled.div`
    background-color: white;
    width: 64px;
    height: 89px;
    margin: 0 20px;
    box-shadow: 0px 2px 4px 0px #0000001A;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 48px;
        height: 72px;
    }
`

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        font-family: sans-serif;
        font-size: 23px;
        font-weight: 400;
    }
`