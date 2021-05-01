var cites = []
var forecastDisplay = document.querySelectorAll()
var currentDay = document.querySelectorAll ("weather-info")

// Attempting to fetch "Search By City" API with my created appID key (provided by OpenWeather)
var responseText = document.getElementById('search-submit');
var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={9089bf849708220dd6908832e89c0798}';

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);
      //  Conditional for the the response.status.
      return response.json();
})




// WEATHER DASHBOARD CRITERIA


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city