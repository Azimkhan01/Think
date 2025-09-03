import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Layout from "./components/Layout"
import Kitchen from "./page/Kitchen"
import Work from "./page/Work"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/kitchen" element={<Layout><Kitchen/></Layout>} />
        <Route path="/work" element={<Layout><Work/></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App