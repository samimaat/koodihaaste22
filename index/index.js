const api_url = "http://localhost:8080/api/v1/restaurants/"
let city = "Helsinki"

function getRes() {
    const response = fetch(api_url + city);
    console.log(response);
    const data = response.json();
    console.log(data);
}

getRes();

// const result = fetch("http://localhost:8080/api/v1/restaurants/Helsinki")
//     .then(response => response.json());
//     // .then(restaurants => showRestaurants(restaurants.results));
//     console.log(response);



showRestaurants = restaurants => {
    const restaurantsDiv = document.querySelector("#character-data");

    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement("p");
        restaurantElement.innerText = "Restaurant Name: " + restaurant.name;
        charactersDiv.append(characterElement);
    });
}

// fetch("https://rickandmortyapi.com/api/character/")
//    .then(response => response.json())
//    .then(characters => showCharacters(characters.results));

// showCharacters = characters => {
//     const charactersDiv = document.querySelector("#character-data");
//     characters.forEach(character => {
//       const characterElement = document.createElement("p");
//       characterElement.innerText = "Character Name: " + character.name;
//       charactersDiv.append(characterElement);
//     });
//   }