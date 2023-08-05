import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const AllPlayers = ({ APIURL }) => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all players when the component mounts
    const fetchPlayersData = async () => {
      try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        setPlayers(result.data.players);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlayersData();
  }, []);


return (
  <div>
    <h1>List of Players</h1>
    {players.map((player) => (
      <div className="players" key={player.id}>
        <p>{player.name}</p>
        <button onClick={() => navigate(`/players/${player.id}`)}>Details</button>
      </div>
    ))}
  </div>
);
}

export default AllPlayers;