// Fetch details of a single player by playerId
const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}/${playerId}`);
      const data = await response.json();
      const player = data.data.player;
      return player;
    } catch (error) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
  };

  // Fetch all players from the API
const fetchAllPlayers = async () => {
    try {
      const response = await fetch(APIURL);
      const data = await response.json();
      const players = data.data.players;
      // console.log(players)
      return players;
    } catch (error) {
      console.error("Uh oh, trouble fetching players!", error);
      throw error;
    }
  };

  export {fetchSinglePlayer, fetchAllPlayers }