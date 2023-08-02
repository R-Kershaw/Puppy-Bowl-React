import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/Navbar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/newPlayer" element={<NewPlayerForm />} />
      </Routes>
    </>
  )
}
