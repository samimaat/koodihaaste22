const api_url = "http://localhost:8080/api/v1/restaurants/"
const restaurantDataID = "restaurant-data";
const form = document.getElementById("restaurant-search");

// The city can be changed

// https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request

// Stolen and adapted from https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30. Thanks!

// Fetches the restaurant information from the API and continues into a function, which constructs the HTML and displays on the page.

function fetchRestaurants(city) {
    fetch(api_url + city)
        .then(response => response.json())
        .then(restaurants => showRestaurants(restaurants));
};

function clearForm(restaurantDataID) {
    document.getElementById(restaurantDataID).innerHTML = "";
}

// Loops and returns all the restaurant names in a specific city.
function showRestaurants(restaurantsAPI) {
    // Format the form at the start of each loop.
    clearForm(restaurantDataID);

    let i = 0;

    const restaurantsForm = document.getElementById(restaurantDataID);

    restaurantsAPI.restaurants.forEach(restaurant => {

        const restaurantId = "restaurant" + i;

        const restaurantRadioButton = document.createElement("input");
        restaurantRadioButton.className = "form-check-input";
        restaurantRadioButton.type = "radio";
        restaurantRadioButton.name = "restaurant_voting";
        restaurantRadioButton.id = restaurantId;
        restaurantRadioButton.value = "restaurant_option";

        const restaurantRadioLabel = document.createElement("label");
        restaurantRadioLabel.className = "form-check-label";
        restaurantRadioLabel.htmlFor = restaurantId;

        const restaurantName = document.createTextNode(restaurant.name);
        restaurantRadioLabel.append(restaurantName);

        const newline = document.createElement("br");

        restaurantsForm.append(restaurantRadioButton, restaurantRadioLabel, newline);

        i++; // Incerement ID number
    })

    // Generating a voting button. Needs functionality!
    const voteSubmit = document.createElement("button");
    voteSubmit.name = "vote_btn";
    voteSubmit.innerText = "Äänestä"

    const newline = document.createElement("br");

    restaurantsForm.append(voteSubmit, newline);

}

function fetchAndShowRestaurants(e) {
    e.preventDefault(); // Prevents the website from updating and swallowing the search result.

    // This helped me with the next line: https://www.youtube.com/watch?v=S944-epyYuI
    // This also had the answer, but I didn't know how to put 2 and 2 together: https://stackoverflow.com/questions/59060113/sending-data-from-a-search-bar-to-a-url

    let city = document.getElementById("city").value;
    // console.log(city);

    fetchRestaurants(city);
};

// Main function call.
form.addEventListener("submit", fetchAndShowRestaurants);