import './App.css'
import AllPlayers from './components/AllPlayers.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  const cohortName = '2302-ACC-PT-WEB-PT-A';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/players" element={<AllPlayers APIURL={APIURL} />} />
        <Route path="/players/:id" element={<SinglePlayer APIURL={APIURL} />} />
        <Route path="/newPlayer" element={<NewPlayerForm APIURL={APIURL} />} />
      </Routes>
    </>
  )
}