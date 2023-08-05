import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import AllPlayers from './AllPlayers.jsx';
import SinglePlayer from './SinglePlayer.jsx';
import NewPlayerForm from './NewPlayerForm.jsx';
import { fetchAllPlayers, fetchSinglePlayer } from './fetchPlayers'; // Correct the import path for fetchAllPlayers and fetchSinglePlayer

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
