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
          today_icon.src = `http://openweathermap.org/img/wn/${today_icon_url}.png`

          document.getElementById('curr_loc').innerHTML = data.name;
        
          document.getElementById('today_description').innerHTML = data.weather[0].description;

          document.getElementById('today_temp').innerHTML = (data.main.temp - 273.15).toFixed(0) + "°";

          document.getElementById('feels_like').innerHTML = (data.main.feels_like -273.15).toFixed(0) + "°";
          
          document.getElementById('min_temp').innerHTML = (data.main.temp_min - 273.15).toFixed(0) + "°";

          document.getElementById('max_temp').innerHTML = (data.main.temp_max - 273.15).toFixed(0) + "°";
          
          document.getElementById('today_humidity').innerHTML = data.main.humidity  + "%";
          
          document.getElementById('today_rain');
          if(data.rain){
            today_rain.innerHTML = data.rain[0] + "l/m²";
          } else {
            today_rain.innerHTML = "0%";
          }
          document.getElementById('today_windSpeed').innerHTML = data.wind.speed  + "m/s";
          
          document.getElementById('today_cloudiness').innerHTML = data.clouds.all  + "%";
          
          console.log(data);
        })
    })
    .catch((err) => {
        console.log("Тhe following error occured!");
      });

      //fetching data for three days
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=e65131942bb3e151c8db39d0794c5802`)
    .then( (response) => {
        if (response.status < 200 && response.status > 300) {
            console.log("There is a problem!");
          }
        response.json().then( (data) => {    
          console.log(data);
          
          for(let i=0; i<3; i++){
            document.getElementById('threeDays_icon'+i).src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`;
            document.getElementById('threeDays_temp'+i).innerHTML = (data.daily[i].temp.day - 273.15).toFixed(0) + "°";
            document.getElementById('threeDays_hum'+i).innerHTML = data.daily[i].humidity  + "%";
            document.getElementById('threeDays_rain'+i);
            if(data.daily[i].rain){
              ('threeDays_rain'+i).innerHTML = data.daily[i].rain + "l/m²";
            } else {
              ('threeDays_rain'+i).innerHTML = "0%";
              }
            document.getElementById('threeDays_ws'+i).innerHTML = data.daily[i].wind_speed  + "m/s";
            document.getElementById('threeDays_clouds'+i).innerHTML = data.daily[i].clouds  + "%";
            }

            for(let i=0; i<7; i++){
              document.getElementById('sevenDays_icon'+i).src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`;
              document.getElementById('sevenDays_temp'+i).innerHTML = (data.daily[i].temp.day - 273.15).toFixed(0) + "°";
              document.getElementById('sevenDays_hum'+i).innerHTML = data.daily[i].humidity  + "%";
              // document.getElementById('sevenDays_rain'+i);
              document.getElementById('sevenDays_ws'+i).innerHTML = data.daily[i].wind_speed.toFixed(1)  + "m/s";
              document.getElementById('sevenDays_clouds'+i).innerHTML = data.daily[i].clouds  + "%";
              }
            })
        })
        .catch((err) => {
          console.log("Тhe following error occured!");
        });
      
      
      }