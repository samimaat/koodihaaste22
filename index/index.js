fetch("http://localhost:8080/swagger-ui/index.html#/restaurant-controller/fetchRestaurants")
    .then(response => response.json())
    .then(restaurants => showRestaurants(restaurants.results));

showRestaurants = restaurants => {
    const restaurantsDiv = document.querySelector("#character-data");

    restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement("p");
        restaurantElement.innerText = "Restaurant Name: " + restaurant;name;charactersDiv.append(characterElement);
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