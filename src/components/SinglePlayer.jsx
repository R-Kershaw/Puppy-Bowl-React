import React from 'react';
import { fetchSinglePlayer } from './fetchPlayers.js'; // Import the fetchSinglePlayer function

// Getting the player container and new player form container elements from the DOM
const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Function to toggle player visibility
const togglePlayerListVisibility = (displayVal) => {
  const playerElements = document.getElementsByClassName("player");
  for (const playerElement of playerElements) {
    playerElement.style.display = displayVal;
  }
  newPlayerFormContainer.style.display = displayVal;
};

// Function to render details of a single player by playerId
const renderSinglePlayerById = async (id) => {
  try {
    // Fetch player details from the server using the fetchSinglePlayer function
    const player = await fetchSinglePlayer(id);

    // Create a new HTML element to display player details
    const playerDetailsElememt = document.createElement("div");
    playerDetailsElememt.classList.add("player-details");
    playerDetailsElememt.innerHTML = `
      <h2>${player.name}</h2>
      <p><img src="${player.imageUrl}"></p>
      <p>ID: ${player.id}</p>
      <p>Breed: ${player.breed}</p>
      <p>Status: ${player.status}</p>
      <p>Created at: ${player.createdAt}</p>
      <p>Updated at: ${player.updatedAt}</p>
      <p>Team ID: ${player.teamId}</p>
      <p>Cohort ID: ${player.cohortId}</p>
      <button class="close-button">Close</button>
    `;

    playerContainer.appendChild(playerDetailsElememt);

    // Add event listener to close button
    const closeButton = playerDetailsElememt.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      playerDetailsElememt.remove();
      togglePlayerListVisibility("flex");
    });
  } catch (error) {
    console.error(`Uh oh, trouble rendering player #${id}!`, error);
  }
};

export default renderSinglePlayerById;
