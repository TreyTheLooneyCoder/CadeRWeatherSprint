import { APIKEY } from "./environment.js";

let dontCallYet = document.getElementById('dontCallYet');

let mainCity = document.getElementById('mainCity')
let mainTemp = document.getElementById('mainTemp')
let maxTemp = document.getElementById('maxTemp')
let minTemp = document.getElementById('minTemp')

let day1 = document.getElementById('day1');
let day1Sky = document.getElementById('day1-sky');
let day1Temp = document.getElementById('day1-temp');

let day2 = document.getElementById('day2');
let day2Sky = document.getElementById('day2-sky');
let day2Temp = document.getElementById('day2-temp');

let day3 = document.getElementById('day3');
let day3Sky = document.getElementById('day3-sky');
let day3Temp = document.getElementById('day3-temp');

let day4 = document.getElementById('day4');
let day4Sky = document.getElementById('day4-sky');
let day4Temp = document.getElementById('day4-temp');

let day5 = document.getElementById('day5');
let day5Sky = document.getElementById('day5-sky');
let day5Temp = document.getElementById('day5-temp');

async function weatherCall() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}&units=imperial`);
    const weather = await promise.json();
    console.log(weather);

    mainCity.innerText = weather.name;
    mainTemp.innerText = `${weather.main.temp} °F`;
    return weather;
}

async function forecastCall() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=37.9577&lon=-121.2908&appid=${APIKEY}&units=imperial`);    
    const forecast = await promise.json();

    console.log(forecast);

    day1.innerText = `${forecast.list[1].dt_txt} `;
    day1Sky.innerText = forecast.weather;
    day1Temp.innerText = `${forecast.list[1].main} `;
    day2.innerText = `${forecast.list[1].dt_txt} `;
    day2Sky.innerText = forecast.weather;
    day2Temp.innerText = `${forecast.list[1].main} `;
    day3.innerText = `${forecast.list[1].dt_txt} `;
    day3Sky.innerText = forecast.weather;
    day3Temp.innerText = `${forecast.list[1].main} `;
    day4.innerText = `${forecast.list[1].dt_txt} `;
    day4Sky.innerText = forecast.weather;
    day4Temp.innerText = `${forecast.list[1].main} `;
    day5.innerText = `${forecast.list[1].dt_txt} `;
    day5Sky.innerText = forecast.weather;
    day5Temp.innerText =  `${forecast.list[1].main} `;
    return forecast;
}

dontCallYet.addEventListener('click', function() {
    weatherCall();
    forecastCall();
})