function searchingCity(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#input-city");
  let shownCity = document.querySelector("#city");
  shownCity.innerHTML = searchedCity.value.tolowerCase();
}

let searchingForm = document.querySelector("#search-form");
searchingForm.addEventListener("submit", searchingCity);
