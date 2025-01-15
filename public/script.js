let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");


let map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

check.addEventListener("click", () => {
    let key = `e56df16206795e4484573165adc16a86`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => response.json()).then(data => {
        console.log(data);

        // Update weather information
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Longitude ${data.coord.lon}`;

        // Set weather icon
        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `tempicons/clouds.svg`;
            }
        });

        // Update the map location
        map.setView([data.coord.lat, data.coord.lon], 10);
        L.marker([data.coord.lat, data.coord.lon]).addTo(map)
            .bindPopup(`<b style="color:black">${data.name}</b><br><b style="color:black">Temperature: ${data.main.temp}°C</b>`)
            .openPopup();
    });

    country.value = "";
    city.value = "";
});