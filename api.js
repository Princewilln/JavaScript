//fetch API
const myDiv = document.getElementById("planet");
const myButton = myDiv.querySelector("button");

myButton.addEventListener("click", getPlanet);

function getPlanet() {
  const randomNum = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 60
  fetch(`https://swapi.dev/api/planets/${randomNum}/`)
      .then(data => data.json())
      .then(d => {
        console.log(d); // Check the fetched data in the console
        populatePlanet(d);  // Display the planet data on the page
      })
      .catch(err => console.log(err.message));
}

function populatePlanet(planetObj) {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = `Planet Name: ${planetObj.name}`;
  myDiv.appendChild(newParagraph);
}
