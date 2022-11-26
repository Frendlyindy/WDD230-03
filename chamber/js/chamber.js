// I got this next bit of code from the codepenio for getting the current date. 
const datefield = document.querySelector('.date');

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const today = new Date();

  if (today.getDay() != 2){
    document.querySelector("header p").style.display='none';
  }

  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=41.8781&lon=87.6298&appid=7b0ee1b9b07eebcc18188c3f0c258a2b&units=imperial"

  function showWeather(obj){
     
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
      
      tempobj.textContent = temp + '°F';
    windspeedobj.textContent = 'Windspeed: ' + windspeed;
    windchillobj.innerHTML = 'Windchill: ' + windchillmeg;
      // iconPath.textContent = icon;
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
  




  

  
