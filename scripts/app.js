import { APIKEY } from "./environment.js";

async function weatherCall() {
    const promise = await fetch("../https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}");
    const weather = await promise.json();
    console.log(weather);
    return weather;
}

async function forecastCall() {
    const promise = await fetch("../https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}");
    const forecast = await promise.json();
    console.log(forecast);
    return forecast;
}

async function geoCall() {
    const promise = await fetch("../https://http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}");
    const geoLocate = await promise.json();
    console.log(geoLocate);
    return geoLocate;
}

weatherCall();
forecastCall();
geoCall();