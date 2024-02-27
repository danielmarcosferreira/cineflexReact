import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import MoviesPage from "./pages/HomePage/MoviesPage"
import SessionPage from "./pages/SessionsPage/SessionPage"
import GlobalStyle from "./styles/GlobalStyle"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"


function App() {
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [movieName, setMovieName] = useState("")
  const [movieTime, setMovieTime] = useState("")
  const [movieDay, setMovieDay] = useState("")
  const [imagePoster, setImagePoster] = useState("")

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MoviesPage />} />

        <Route path="/section/:id" element={<SessionPage />} />

        <Route path="/seats/:id" element={<SeatsPage
          setName={setName}
          setCpf={setCpf}
          movieName={movieName}
          setMovieName={setMovieName}
          movieTime={movieTime}
          setMovieTime={setMovieTime}
          movieDay={movieDay}
          setMovieDay={setMovieDay}
          imagePoster={imagePoster}
          setImagePoster={setImagePoster} />} />

        <Route path="/success" element={<SuccessPage
          name={name}
          cpf={cpf}
          movieName={movieName}
          movieDay={movieDay}
          movieTime={movieTime} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
