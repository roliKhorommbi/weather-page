let now = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  let currentDay = days[now.getDay()];
  let first = now.getDay();
  let firstDay = days[now.getDay() + 1];
  document.querySelector("#firstDay").innerHTML = firstDay;
  let secondDay = days[now.getDay() + 2];
  document.querySelector("#secondDay").innerHTML = secondDay;
  let thirdDay = days[now.getDay() + 3];
  document.querySelector("#thirdDay").innerHTML = thirdDay;
  let fourthDay = days[now.getDay() + 4];
  document.querySelector("#fourthDay").innerHTML = fourthDay;
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${currentDay} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(now);

function signUp(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#enterCity");
  let city = document.querySelector("#city");
  city.innerHTML = enterCity.value;
  let apiKey = "2o51771014b5ae643a09fe7f96612tc4";
  let api = `https://api.shecodes.io/weather/v1/forecast?query=${enterCity.value}&key=${apiKey}&units=metric`;
  axios.get(api).then(temp);
}

function temp(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.daily[0].temperature.day);
  document.querySelector("#city").innerHTML = response.data.city;
  document.getElementById("current-icon").src =
    response.data.daily[0].condition.icon_url;
  document.querySelector("#description").innerHTML =
    response.data.daily[0].condition.description;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity is ${response.data.daily[0].temperature.humidity}%`;
  document.getElementById("firstDayIcon").src =
    response.data.daily[1].condition.icon_url;
  document.getElementById("secondDayIcon").src =
    response.data.daily[2].condition.icon_url;
  document.getElementById("thirdDayIcon").src =
    response.data.daily[3].condition.icon_url;
  document.getElementById("fourthDayIcon").src =
    response.data.daily[4].condition.icon_url;
  document.querySelector("#first-max-temp").innerHTML = `${Math.round(
    response.data.daily[1].temperature.maximum
  )}°`;
  document.querySelector("#second-max-temp").innerHTML = `${Math.round(
    response.data.daily[2].temperature.maximum
  )}°`;
  document.querySelector("#third-max-temp").innerHTML = `${Math.round(
    response.data.daily[3].temperature.maximum
  )}°`;
  document.querySelector("#fourth-max-temp").innerHTML = `${Math.round(
    response.data.daily[4].temperature.maximum
  )}°`;
  document.querySelector("#first-min-temp").innerHTML = `${Math.round(
    response.data.daily[1].temperature.minimum
  )}°`;
  document.querySelector("#second-min-temp").innerHTML = `${Math.round(
    response.data.daily[2].temperature.minimum
  )}°`;
  document.querySelector("#third-min-temp").innerHTML = `${Math.round(
    response.data.daily[3].temperature.minimum
  )}°`;
  document.querySelector("#fourth-min-temp").innerHTML = `${Math.round(
    response.data.daily[4].temperature.minimum
  )}°`;
  console.log(response.data);
  console.log(response.data.daily[1].temperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", signUp);
