import { APIKEY } from "./environment.js";

let dontCallYet = document.getElementById('dontCallYet');

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
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=121.2908&appid=${APIKEY}`);
    const weather = await promise.json();
    console.log(weather);
    return weather;
}

async function forecastCall() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=37.9577&lon=121.2908&appid=${APIKEY}`);
    const forecast = await promise.json();
    console.log(forecast);
    return forecast;
}

async function geoCall() {
    const promise = await fetch(`https://http://api.openweathermap.org/geo/1.0/direct?q=Stockton,CA,US&limit=200&appid=${APIKEY}`);
    const geoLocate = await promise.json();
    console.log(geoLocate);
    return geoLocate;
}

dontCallYet.addEventListener('click', function(){
    weatherCall();
    forecastCall();
    geoCall();

    // day1.innerText = forecast.list.main;
    // day1Sky.innerText =
    // day1Temp.innerText = 
    // day2.innerText = forecast.list.main;
    // day2Sky.innerText =
    // day2Temp.innerText =
    // day3.innerText = forecast.list.main;
    // day3Sky.innerText =
    // day3Temp.innerText =
    // day4.innerText = forecast.list.main;
    // day4Sky.innerText =
    // day4Temp.innerText =
    // day5.innerText = forecast.list.main;
    // day5Sky.innerText =
    // day5Temp.innerText = 
})