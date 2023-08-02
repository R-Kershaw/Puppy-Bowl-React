import { useState } from "react";
import { useEffect } from "react";

const cohortName = '2302-ACC-PT-WEB-PT-A';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export default function AllPlayers() {

    const [players, setPlayers] = useState([]);


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
                            <div key={player.id}>
                                <p>{player.name}</p>
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