import styled from "styled-components"

export default function FooterMovieTime() {
    return (
        <FooterMovietimeStyle>
            <ImageFooter>
                <img src={"https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg"} />
            </ImageFooter>
            <h4>Enola Holmes</h4>
        </FooterMovietimeStyle>
    )
}

const FooterMovietimeStyle = styled.div`
    background-color: #DFE6ED;
    height: 120px;
    width: 100%;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    
    h4 {
        font-family: sans-serif;
        font-size: 26px;
        font-weight: 400;
    }
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