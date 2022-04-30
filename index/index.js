const api_url = "http://localhost:8080/api/v1/restaurants/"

// The city can be changed
let city = "Helsinki"
// https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request

// The function way
async function getRes() {
    const response = await fetch(api_url + city);
    const data = await response.json(); // is not a function? https://www.youtube.com/watch?v=uxf0--uiX0I
    // console.log(data)
    console.log(data.restaurants);
    console.log(data.restaurants[0].name);
}

// getRes();

// Stolen and adapted from https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30. Thanks!

const result = fetch(api_url + city)
    .then(response => response.json())
    .then(restaurants => showRestaurants(restaurants));

showRestaurants = restaurantsAPI => {
    const restaurantsDiv = document.querySelector("#restaurant-data");

    restaurantsAPI.restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement("p");
        restaurantElement.innerText = "Restaurant Name: " + restaurant.name;
        restaurantsDiv.append(restaurantElement);
    });
}

// async function getISS() {
//     response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
//     data = await response.json();
//     console.log(data)
// }

// getISS();



// async function getChar2() {
//     response = await fetch("https://rickandmortyapi.com/api/character/");
//     data = await response.json();
//     console.log(data)
// }


// getChar2();

