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

  function setwindchill(temp, windspeed){
    let tempobj = document.querySelector("#temp");
    let windspeedobj = document.querySelector("#speed");
    let windchillobj = document.querySelector("#chill");
    let windchillmeg = "N/A";

  if (temp <= 50 && windspeed > 3){
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    windchillmeg = `${chill}&deg; F`;
  };
  
  tempobj.textContent = temp;
  windspeedobj.textContent = windspeed;
  windchillobj.innerHTML = windchillmeg;
  }

  let temp = 33;
  let windspeed = 10;
  setwindchill(temp, windspeed)

  

  

  
