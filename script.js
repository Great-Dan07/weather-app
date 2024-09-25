const enteringCity = document.getElementById("enteringCity");
let city = document.getElementById("city");
let search = document.getElementById("search");
let displayTemperature = document.getElementById("displayTemperature");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let feelsLike = document.getElementById("feelsLike");
let visibility = document.getElementById("visibility");
let pressure = document.getElementById("pressure");
let uvIndex = document.getElementById("uvIndex");



  search.addEventListener('click',function (e) {

    setInterval(() => {
      
      let cityName = enteringCity.value;
        // city.innerHTML = cityName;
    
        xhr = new XMLHttpRequest()
    
    xhr.open('GET',`https://api.weatherapi.com/v1/current.json?key=3ad0ca2a21a74157a75141605242309&q=${cityName}&aqi=no`);
    
    xhr.onload = function () {
        console.log(xhr);
        let rawData = xhr.responseText;
        console.log(rawData);
    
        let newData = JSON.parse(rawData);
        console.log(newData);
    
        displayTemperature.innerHTML = newData.current.temp_c + '°C';
        humidity.innerHTML = newData.current.humidity;
        wind.innerHTML = newData.current.wind_kph;
        feelsLike.innerHTML = newData.current.feelslike_c;
        visibility.innerHTML = newData.current.vis_km;
        pressure.innerHTML = newData.current.pressure_mb;
        uvIndex.innerHTML = newData.current.uv;
        city.innerHTML = newData.location.name;
    }
    
    xhr.send() ;
    }, 1000);

  });
