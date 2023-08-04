import "./main.css";
import { getCity, getClimate } from "./modules/Climate";

// ==== NODE REFERENCES ====
const searchButton = document.querySelector(".search-button");

// ==== VARIABLES ====
let currentCity = "";
let currentClimate = "";

// ==== SEARCH FOR THE WEATHER OF THE DESIRED CITYD ====
searchButton.addEventListener("click", () => {
  currentCity = getCity();
  currentClimate = getClimate(currentCity);
  console.log(currentClimate);
});
