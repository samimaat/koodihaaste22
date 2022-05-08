const api_url = "http://localhost:8080/api/v1/restaurants/"

// The city can be changed

// https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request

// Stolen and adapted from https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30. Thanks!

// Fetches the restaurant information from the API and continues into a function, which constructs the HTML and displays on the page.

function fetchAndShowRestaurants(e) {
    e.preventDefault(); // Prevents the website from updating and swallowing the search result.

    // This helped me with the next line: https://www.youtube.com/watch?v=S944-epyYuI
    // This also had the answer, but I didn't know how to put 2 and 2 together: https://stackoverflow.com/questions/59060113/sending-data-from-a-search-bar-to-a-url

    let city = document.getElementById("city").value;
    // console.log(city);

    fetch(api_url + city)
        .then(response => response.json())
        .then(restaurants => showRestaurants(restaurants));

    // Loops and returns all the restaurant names in a specific city.
    showRestaurants = restaurantsAPI => {
        let i = 0;

        const restaurantsForm = document.getElementById("restaurant-data");

        restaurantsAPI.restaurants.forEach(restaurant => {

            const restaurantId = "restaurant" + i;

            const restaurantElement = document.createElement("input");
            restaurantElement.type = "radio";
            restaurantElement.name = "restaurant_voting";
            restaurantElement.id = restaurantId;
            restaurantElement.value = "restaurant_option";

            const label = document.createElement("label");
            label.htmlFor = restaurantId;

            const description = document.createTextNode("Ravintola: " + restaurant.name);
            label.append(description);

            const newline = document.createElement("br");

            restaurantsForm.append(restaurantElement, label, newline);

            i++; // Incerement ID number
        })

        // Generating a voting button. Needs functionality!
        const voteSubmit = document.createElement("button");
        voteSubmit.name="vote_btn";
        voteSubmit.innerText="Äänestä"

        const newline = document.createElement("br");

        restaurantsForm.append(voteSubmit, newline);
    }
};

const form = document.getElementById("restaurant-search");

form.addEventListener("submit", fetchAndShowRestaurants);

// The function way:

// async function getRes() {
//     const response = await fetch(api_url + city);
//     const data = await response.json(); // is not a function?
//     // console.log(data)
//     console.log(data.restaurants);
//     console.log(data.restaurants[0].name);
// }

// getRes();

// Instructions: https://www.youtube.com/watch?v=uxf0--uiX0I

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

