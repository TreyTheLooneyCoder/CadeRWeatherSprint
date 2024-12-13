function saveToLocalStorageByName(place) {

    let placesArr = getLocalStorage();

    if (!placesArr.includes(place)) {
        placesArr.push(place);
    }
    
    localStorage.setItem('Places', JSON.stringify(placesArr));
}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('Places');

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(place){
    let placesArr = getLocalStorage();

    // find the index of the name in local storage

    let placeIndex = placesArr.indexOf(place);

    //remove the name from the array using the splice method.
    //Start at the index of name and remove 1 item
    placesArr.splice(placeIndex, 1);

    // save updated array to local storage
    localStorage.setItem('Places', JSON.stringify(placesArr));
}



export{saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage }