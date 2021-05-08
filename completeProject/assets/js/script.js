/* Grabs toggle-button class for hamburger menu */ 
const toggleButton = document.getElementsByClassName('toggle-button')[0]

/* Grabs navigation links. Returns array index of 0 b/c only one navigation-links on page */ 
const navigationLinks = document.getElementsByClassName('navigation-links')[0]

/* Added event listener so when user clicks the 'toggle-button' aka hamburger menu, it runs the following function: */
toggleButton.addEventListener('click', () => {
    /* Toggles between hide() and show() for the selected hamburger menu */
    navigationLinks.classList.toggle('active')
})
const access_key = "95a73e7c7b18b33bcc43679334309c1d";
// stuff
var cities = {}
var cityHist = {}

var searchCityInput = $('#city-input')
var searchCityButton = $('#city-button')


var cityListing = $('#city-list')
var weatherIconCurrent = $('#weather-icon-current')
var dateDisplay = $('#date-display')
var temperature = $('#current-temperture')



var currentWeather = $('#current-weather')
var forecastNextDay = $('#forecast-next-day')