import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm({ APIURL }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [teamId, setTeamId] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const newPlayer = { name, breed, status, imageUrl, teamId };

    //don't pass in unacceptable/empty values for optional inputs or the post will fail
    if ((status !== 'bench') || (status !== 'field'))
      delete newPlayer.status;
    if (imageUrl === '')
      delete newPlayer.imageUrl;
    if (teamId === '')
      delete newPlayer.teamId;

    console.log(newPlayer);
    try {
      const response = await fetch(`${APIURL}players/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPlayer)
        });
      const result = await response.json();
      console.log(result);
      navigate(-1);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text"
          placeholder="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br /><br />
      <label>
        Breed:
        <input type="text"
          placeholder="required"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </label>
      <br /><br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="bench">bench</option>
          <option value="field">field</option>
        </select>
      </label>
      <br /><br />
      <label>
        ImageUrl:
        <input type="url"
          placeholder="optional"
          value={imageUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </label>
      <br /><br />
      <label>
        TeamId:
        <input type="number"
          placeholder="optional"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        />
      </label>
      <br /><br />

      <button type='submit'>Submit</button>
    </form>
  )
}