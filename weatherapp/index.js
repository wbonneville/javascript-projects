window.addEventListener('load', () => {
let long;
let lat;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        let temperatureDescription = document.querySelector('.temperature-description')
        let temperatureDegree = document.querySelector('.temperature-degree')
        let locationTimezone = document.querySelector('.location-timezone')


        const proxy = "https://cors-anywhere.herokuapp.com/"
        const api = `${proxy}https://api.darksky.net/forecast/235fef3261e06fe55525dd9684d91f17/${lat},${long}`;

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { temperature, summary } = data.currently 
            //Set DOM Elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone
        })
    });
    }
})