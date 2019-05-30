window.addEventListener('load', () => {
let long;
let lat;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = ``;

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
    });
    }
})