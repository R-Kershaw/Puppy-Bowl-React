import React, { useEffect, useState } from 'react';
import { fetchAllPlayers, fetchSinglePlayer } from './fetchPlayers'; // Import the functions from fetchPlayers.js

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch all players when the component mounts
    const fetchPlayersData = async () => {
      try {
        const playersData = await fetchAllPlayers();
        setPlayers(playersData);
      } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
      }
    };
    fetchPlayersData();
  }, []);

  // Function to fetch a single player's details by playerId
  const handleFetchSinglePlayer = async (playerId) => {
    try {
      const player = await fetchSinglePlayer(playerId);
      console.log(player); // Log the fetched player details
    } catch (error) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, error);
    }
  };

  return (
    <div>
      {/* Display the list of players here */}
      {players.map((player) => (
        <div key={player.id} className="player">
          <h2>{player.name}</h2>
          <p>{player.breed}</p>
          <p>{player.status}</p>
          <img src={player.imageUrl} alt={player.name} />

          {/* Button to fetch details of a single player */}
          <button onClick={() => handleFetchSinglePlayer(player.id)}>
            Fetch Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllPlayers;
