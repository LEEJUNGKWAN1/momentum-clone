const API_KEY = "e15808fe4ed37a6c71a4f073e3c64f90";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather div:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
