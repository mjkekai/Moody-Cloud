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
    var date = document.getElementById('date-forecast');
    $.ajax({
        url: 'https://api.weatherstack.com/forecast',
        data: {
          access_key: access_key,
          query: city,
          forecast_days: '2'

          

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
    // $('#forecast-next-day').append(JSON.stringify(data.current.temperature + " °c"));
    // $('#forecast-day-after-next-day').append(JSON.stringify(data.current.temperature + " °c"));
    }
    





// function displayForecast(data) {
//     console.log(data); // display data here
//     $('#forecast-day-2').append(JSON.stringify(data.forecast.date.avgtemp));
    




// } 
searchCityButton.on('click', function(e){
    e.preventDefault();
    getWeatherByCity();
});