import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({ APIURL }) {

    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch(`${APIURL}players`);
                const result = await response.json();
                setPlayers(result.data.players);
                console.log(players);
            } catch (error) {
                console.log(error); //should create an error var with useState but not required so w/e
            }
        }
        fetchAllPlayers();
    }, [])

    if (players) {
        return (
            <div>
                {
                    players.map((player) => {
                        return (
                            <div className="PuppyCard" key={player.id}>
                                <p>{player.name}</p>
                                <button
                                    onClick={() => navigate(`/players/${player.id}`)}>Details
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        )
        console.log(players);
    }
    else {
        return null;
    }

}