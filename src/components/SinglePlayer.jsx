import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function SinglePlayer({ APIURL }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(`${APIURL}players/${id}/`,
                {
                    method: 'DELETE'
                });
            const result = await response.json();
            navigate(-1);
        } catch (error) {

        }
    }

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`${APIURL}players/${id}`);
                const result = await response.json();
                setPlayer(result.data.player);
                console.log(player);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSinglePlayer();
    }, [])

    if (player) {
        return (
            <div>
                <h1>{player.name}</h1>
                <p><img alt="image of a puppy" src={`${player.imageUrl}`} /></p>
                <p><strong>ID:</strong> {player.id}</p>
                <p><strong>Breed:</strong> {player.breed}</p>
                <p><strong>Status:</strong> {player.status}</p>
                <p><strong>Created at:</strong> {player.createdAt}</p>
                <p><strong>Updated at:</strong> {player.updatedAt}</p>
                <p><strong>Team ID:</strong> {player.teamId}</p>
                <p><strong>Cohort ID:</strong> {player.cohortId}</p>
                <button onClick={handleClick}>Remove Player</button>
                {console.log(id)}
            </div>
        )
    } else {
        return null;
    }
}