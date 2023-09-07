const url = "https://swapi.dev/api";
document.addEventListener("DOMContentLoaded", () => {
  loadContent();
});

const mainContent = document.getElementById("main-content");
async function loadContent() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let planetsURL = data.planets;
    console.log(planetsURL);

    const planetsResponse = await fetch(planetsURL);
    const planetsData = await planetsResponse.json();
    console.log(planetsData.results);
    const planetsArray = planetsData.results;
    planetsArray.forEach((planet) => {
      mainContent.innerHTML += `
        <div class="main-card">
          <h2 class="main-card-title">${planet.name}</h2>
          <p class="main-card-text">Climate: ${planet.climate}</p>
          <p class="main-card-text">Terrain: ${planet.terrain}</p>
          <p class="main-card-population">Population: ${planet.population}</p>
      </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}
