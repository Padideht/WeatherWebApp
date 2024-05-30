function showWeatherInfo(response) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  let shownCity = document.querySelector("#city");
  shownCity.innerHTML = response.data.city;
  let descriptionElenemt = document.querySelector("#description");
  descriptionElenemt.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeedElement = document.querySelector("#wind");
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
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
