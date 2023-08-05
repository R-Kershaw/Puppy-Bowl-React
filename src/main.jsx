import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import AllPlayers from './components/AllPlayers.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx';
import { fetchAllPlayers, fetchSinglePlayer } from './components/fetchPlayers.js'; // Correct the import path for fetchAllPlayers and fetchSinglePlayer

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);
};

init();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
