import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SelectMoviePage from "./pages/SelectMoviePage"
import SelectMovieTimePage from "./pages/SelectMovieTimePage"
import GlobalStyle from "./styles/GlobalStyle"
import SelectSeatsPage from "./pages/SelectSeatsPage"
import FinalizationPage from "./pages/FinalizationPage"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<SelectMoviePage />} />
        {/* <Route path="/" element={<SelectMovieTimePage />} /> */}
        {/* <Route path="/" element={<SelectSeatsPage />} /> */}
        {/* <Route path="/" element={<FinalizationPage />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
