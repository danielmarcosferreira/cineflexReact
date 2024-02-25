import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SelectMoviePage from "./pages/SelectMoviePage"
import SelectSectionPage from "./pages/SelectSectionPage"
import GlobalStyle from "./styles/GlobalStyle"
import SelectSeatsPage from "./pages/SelectSeatsPage"
import FinalizationPage from "./pages/FinalizationPage"
import { useState } from "react"

function App() {
  const [name, setName] = useState()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<SelectMoviePage/>} />
        <Route path="/section/:id" element={<SelectSectionPage/>} />
        <Route path="/seats/:id" element={<SelectSeatsPage />} />
        <Route path="/success" element={<FinalizationPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
