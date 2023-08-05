import React, { useState } from 'react';
function NewPlayerForm() {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    status: 'bench',
    imageUrl: '',
    teamId: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNewPlayer(formData); // Call the function to add the new player

      // You can do additional actions, like clearing the form or showing a success message
      console.log('New player added successfully!');
    } catch (error) {
      console.error('Oops, something went wrong with adding the player!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Your Goodest Pupper to the Roster!!</h3>
      <label>Name: </label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      <br /><br />
      <label>Breed: </label>
      <input type="text" name="breed" value={formData.breed} onChange={handleInputChange} required />
      <br /><br />
      <label>Status: </label>
      <select name="status" value={formData.status} onChange={handleInputChange}>
        <option value="bench">Bench</option>
        <option value="field">Field</option>
      </select>
      <br /><br />
      <label>ImageUrl: </label>
      <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} required />
      <br /><br />
      <label>TeamId: </label>
      <input type="number" name="teamId" value={formData.teamId} onChange={handleInputChange} required />
      <br /><br />
      <input type="submit" value="Add new Player" />
    </form>
  );
}

export default NewPlayerForm;
