//getting the current location

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

let lat;
let lon;

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  


//fetching data
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bfb67ac210a55c22a6fb24f3051b111`)
    .then( (response) => {
        if (response.status < 200 && response.status > 300) {
            console.log("There is a problem!");
          }
        response.json().then( (data) => {
          let today_icon = document.getElementById('today_icon');
          today_icon.scr = data.weather[1];

          
        console.log(data);
        })
    })
    .catch((err) => {
        console.log("Тhe following error occured!");
      });
    
    }