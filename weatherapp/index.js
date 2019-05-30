window.addEventListener('load', () => {
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description')
let temperatureDegree = document.querySelector('.temperature-degree')
let locationTimezone = document.querySelector('.location-timezone')
let temperatureSection = document.querySelector('.temperature-section')
const temperatureSpan = document.querySelector('.temperature-section span')


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
      
        const proxy = "https://cors-anywhere.herokuapp.com/"
        const api = `${proxy}https://api.darksky.net/forecast/235fef3261e06fe55525dd9684d91f17/${lat},${long}`;

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { temperature, summary, icon } = data.currently 
            //Set DOM Elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone
                //Set icons
                setIcons(icon, document.querySelector(".icon"))

                //Change temp to 
        })
    });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"})
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});