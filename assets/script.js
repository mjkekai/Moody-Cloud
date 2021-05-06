var sadBtn = document.getElementById('sad').style.display = 'none';
var hapBtn = document.getElementById('happy').style.display = 'none';
var angBtn = document.getElementById('angry').style.display = 'none';
var scrdBtn = document.getElementById('scared').style.display = 'none';
var anxBtn = document.getElementById('anxious').style.display = 'none';
var strsBtn = document.getElementById('stressed').style.display = 'none';

//weather API
const urlWith = "https://api.weatherstack.com/forecast?access_key=95a73e7c7b18b33bcc43679334309c1d&query=New%20York&forecast_days=3&hourly=1";
var city = document.querySelector('form input');

$("#myinput").keyup(function() {
    var val = $.trim(this.value);
    if (val === "")
        $('img').show();
    else {
        $('img').hide();
        $("img[alt*=" + val + "]").show();
    }
});


var upload = "";

function upload() {
   
    addEventListener(upload, button) ;
    localStorage.setItem ("");
}