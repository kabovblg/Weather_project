//getting the current location

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

let lat;
let lon;

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  


//fetching data for the current day
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bfb67ac210a55c22a6fb24f3051b111`)
    .then( (response) => {
        if (response.status < 200 && response.status > 300) {
            console.log("There is a problem!");
          }
        response.json().then( (data) => {
          let today_icon_url = data.weather[0].icon;
          let today_icon = document.getElementById('today_icon');
          today_icon.src = "http://openweathermap.org/img/wn/${today_icon_url}.png"
          console.log(today_icon_url);
        
          let today_desc = document.getElementById('today_description');
          today_desc.innerHTML = data.weather[0].description;

          let today_temp = document.getElementById('today_temp');
          today_temp.innerHTML = (data.main.temp - 273.15).toFixed(0) + "°";
          
          let today_hum = document.getElementById('today_humidity');
          today_hum.innerHTML = data.main.humidity  + "%";

          let today_rain = document.getElementById('today_rain');
          // today_rain.innerHTML = data.rain[0] + "%";

          let today_windSpeed = document.getElementById('today_windSpeed');
          today_windSpeed.innerHTML = data.wind.speed  + "m/s";

          let today_cloudiness = document.getElementById('today_cloudiness');
          today_cloudiness.innerHTML = data.clouds.all  + "%";

          

          

          

          
        console.log(data);
        })
    })
    .catch((err) => {
        console.log("Тhe following error occured!");
      });
    
    }