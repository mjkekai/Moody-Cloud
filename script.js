// API KEY
const access_key = "95a73e7c7b18b33bcc43679334309c1d";
// stuff
var searchCityInput = $('#city-input')
var searchCityButton = $('#city-button')



var currentWeather = $('#current-weather')
var forecastNextDay = $('#forecast-next-day')
var forecastNextDayAfter = $('#forecast-next-day-after')
// 
function getWeatherByCity () {
    var city = document.getElementById("city-input").value;
    $.ajax({
        url: 'https://api.weatherstack.com/forecast',
        data: {
          access_key: access_key,
          query: city,

        },
        dataType: 'json',
        success: function(data) {
            displayForecast(data)
        }
      });
} 
function displayForecast(data) {
    console.log(data); // display data here'
   
    $('#current-temperature').append(JSON.stringify(data.current.temperature + " °c"));
    $('#weather-descriptions').append(JSON.stringify(data.current.weather_descriptions))
    $('#weather-icon').append(JSON.stringify(data.current.weather_icons[0]))
    }
    
searchCityButton.on('click', function(e){
    e.preventDefault();
    getWeatherByCity();
});