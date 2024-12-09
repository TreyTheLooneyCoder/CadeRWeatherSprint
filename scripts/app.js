import { APIKEY } from "./environment.js";

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

apiCall();