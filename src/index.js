function showWeatherInfo(response) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  let shownCity = document.querySelector("#city");
  shownCity.innerHTML = response.data.city;
}

function searchingEnteredCity(city) {
  let ApiKey = "b4b90t01e78a6d3ae3ea0adb94efof84";
  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}`;
  axios.get(ApiUrl).then(showWeatherInfo);
}

function handleSearching(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#input-city");

  searchingEnteredCity(searchedCity.value);
}

let searchingForm = document.querySelector("#search-form");
searchingForm.addEventListener("submit", handleSearching);
