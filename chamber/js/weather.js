const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=64.8401&lon=-147.7200&appid=7b0ee1b9b07eebcc18188c3f0c258a2b&units=imperial"

function showWeather(obj){
    let currenttemp = document.querySelector("#current-temp");
    let iconPath = document.querySelector("#icon-src");
    let weatherIcon = document.querySelector("#weathericon");
    let figureCaption = document.querySelector("figcaption");
    let tempobj = document.querySelector("#temp");
    let windspeedobj = document.querySelector("#speed");
    let windchillobj = document.querySelector("#chill");
    let windchillmeg = "N/A";
    let icon = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    let temp = obj.main.temp;
    let windspeed = obj.wind.speed;
    if (temp <= 50 && windspeed > 3){
      let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
      windchillmeg = `${chill}&deg; F`;
    };
    currenttemp.textContent = obj.main.temp;
    tempobj.textContent = temp;
  windspeedobj.textContent = windspeed;
  windchillobj.innerHTML = windchillmeg;
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
