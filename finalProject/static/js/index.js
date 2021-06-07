//getting the current location

window.onload = navigator.geolocation.getCurrentPosition(showPosition);

let lat;
let lon;

function showPosition(position) {
    return console.log(position.coords);
     let lat = position.coords.latitude;
    let lon = position.coords.longtitude;
  }


//fetching data
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1bfb67ac210a55c22a6fb24f3051b111`)
    .then( (response) => {
        if (response.status >= 200 && response.status < 300) {
            console.log("There is a problem!");
          }

        response.json().then( (data) => {
        console.log(data);
        })
    })
    .catch((err) => {
        console.log("Тhe following error occured!");
      });
