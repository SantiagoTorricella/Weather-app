/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */

import "./main.css";
// ==== NODE REFERENCES ====
const searchButton = document.querySelector(".search-button");
const cityName = document.querySelector(".city-name");
const cityProv = document.querySelector(".city-prov");
const cityCountry = document.querySelector(".city-country");
const climateImg = document.querySelector(".climate-img");
const temperature = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const localTime = document.querySelector(".local-time");

// ==== VARIABLES ====
let currentCity = "";
let currentClimate = "";

const searchBar = document.querySelector(".search-bar");

// ========= Get searched city and return it =======
function getCity() {
  return searchBar.value;
}

// ========= Get Climate =========
async function getClimate(city) {
  let climate = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c01b95f147b446c2b3a11948230308&q=${city}&aqi=yes`,
    { mode: "cors" }
  );
  let climateData = await climate.json();
  return climateData;
}

// ==== SEARCH FOR THE WEATHER OF THE DESIRED CITYD ====
async function getAndSaveData() {
  currentCity = getCity();
  currentClimate = await getClimate(currentCity);
}

// ==== FORMAT DATE ====
function getDayFormated() {
  let date = currentClimate.location.localtime.split(" ")[0];
  let day = date.split("-")[2];
  let month = date.split("-")[1];
  let year = date.split("-")[0];
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let d = new Date(year, month, day);
  return days[d.getDay()] + " | " + day + "/" + month + "/" + year;
}

// ==== ASYNC FUNCTION TO PUSH THE DATA ON SCREEN ====
async function pushData() {
  await getAndSaveData();
  cityName.innerText = currentClimate.location.name;
  cityProv.innerText = currentClimate.location.region;
  cityCountry.innerText = currentClimate.location.country;
  climateImg.src = currentClimate.current.condition.icon;
  temperature.innerText = currentClimate.current.temp_c + "°C" + " " + "/" + " " + currentClimate.current.temp_f + "°F";
  condition.innerText = currentClimate.current.condition.text;
  localTime.innerText = getDayFormated();
}

pushData();

searchButton.addEventListener("click", () => {
  pushData();
});
