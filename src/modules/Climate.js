/* eslint-disable prefer-const */
/* eslint-disable require-jsdoc */

// ======== Node rederences ============
const searchBar = document.querySelector(".search-bar");

// ========= Get searched city and return it =======
function getCity() {
  return searchBar.value;
}

// ========= Get Climate =========
async function getClimate(city) {
  let climate = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c01b95f147b446c2b3a11948230308&q=${city}&aqi=yes`,
    { mode: "cors" }
  );
  let climateData = await climate.json();
  return climateData;
}

export { getCity, getClimate };
