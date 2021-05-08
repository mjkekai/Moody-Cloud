const appKey = "dc2b4ea422e5453faf084922192401";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

let cityName = document.getElementById("city-name");

let icon = document.getElementById("icon");
var attrs = icon.attributes;

let condition = document.getElementById("condition");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let wind = document.getElementById("wind");
let barometric = document.getElementById("barometric-div");

let forecast_day_first = document.getElementById("forecast_f");
let icon_day_first = document.getElementById("icon_f");

let forecast_day_second = document.getElementById("forecast_s");
let icon_day_second = document.getElementById("icon_s");

let forecast_day_third = document.getElementById("forecast_t");
let icon_day_third = document.getElementById("icon_t");


function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}


function httpRequestAsync(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }

    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send(); 
}

function findWeatherDetails() {
    if (searchInput.value === "") {

    } else {
        let searchLink = "http://api.apixu.com/v1/forecast.json?key=dc2b4ea422e5453faf084922192401&q=" + searchInput.value + "&days=3";
        httpRequestAsync(searchLink, theResponse);
    }
}


function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.location.name;

    icon.setAttribute('src', "http:" + jsonObject.current.condition.icon);
    document.getElementById("icon").style.opacity = 1;
    console.log(icon);

    condition.innerHTML = jsonObject.current.condition.text;
    temperature.innerHTML = jsonObject.current.temp_c + "° " + "feels like " + jsonObject.current.feelslike_c + "°";
    humidity.innerHTML = jsonObject.current.humidity + "% humidity";
    barometric.innerHTML = parseInt(jsonObject.current.pressure_mb / 1.333) + " mmpH";
    wind.innerHTML = parseInt(jsonObject.current.wind_kph * 0.27) + "ms " + jsonObject.current.wind_dir;

    forecast_day_first.innerHTML = jsonObject.forecast.forecastday[0].day.avgtemp_c + "°, " + jsonObject.forecast.forecastday[0].day.condition.text;
    icon_day_first.setAttribute('src', "http:" + jsonObject.forecast.forecastday[0].day.condition.icon);
    document.getElementById("icon_f").style.opacity = 1; 
    
    forecast_day_second.innerHTML = jsonObject.forecast.forecastday[1].day.avgtemp_c + "°, " + jsonObject.forecast.forecastday[1].day.condition.text;
    icon_day_second.setAttribute('src', "http:" + jsonObject.forecast.forecastday[1].day.condition.icon);
    document.getElementById("icon_s").style.opacity = 1; 

    forecast_day_third.innerHTML = jsonObject.forecast.forecastday[2].day.avgtemp_c + "°, " + jsonObject.forecast.forecastday[2].day.condition.text;
    icon_day_third.setAttribute('src', "http:" + jsonObject.forecast.forecastday[2].day.condition.icon);
    document.getElementById("icon_t").style.opacity = 1;
    
}