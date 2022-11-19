const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=64.8401&lon=-147.7200&appid=7b0ee1b9b07eebcc18188c3f0c258a2b&units=imperial"

function showWeather(obj){
    let currenttemp = document.querySelector("#current-temp");
    let iconPath = document.querySelector("#icon-src");
    let weatherIcon = document.querySelector("#weathericon");
    let figureCaption = document.querySelector("figcaption");
    let icon = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = obj.main.temp;
    iconPath.textContent = icon;
    weatherIcon.setAttribute("src", icon);
    weatherIcon.setAttribute("alt", obj.weather[0].description);
    figureCaption.textContent = obj.weather[0].main;
}
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject)
  });
