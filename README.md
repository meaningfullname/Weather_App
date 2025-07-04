
# Weather App

A simple, visually appealing weather web application that allows users to check the current weather and a 5-day forecast for any city and country, with an interactive map and weather icons.

## Features

- **Current Weather:** Enter a city and country to get real-time weather data (temperature, humidity, feels like, coordinates, and description).
- **5-Day Forecast:** View a summarized 5-day weather forecast.
- **Interactive Map:** See the location on a map with a marker and popup for temperature.
- **Dynamic Weather Icons:** Weather conditions are represented with custom SVG icons.
- **Modern UI:** Clean, responsive design with a landscape background and custom font.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, [Leaflet.js](https://leafletjs.com/) for maps
- **Backend:** Node.js, Express
- **APIs:** [OpenWeatherMap API](https://openweathermap.org/api)
- **Icons:** Custom SVGs for different weather conditions
- **Font:** Custom font (`ticking-timebomb-bb.regular.ttf`)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

1. Clone this repository or download the ZIP.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

### File Structure

```
Weather_App-master/
  ├── server.js                # Express server
  ├── package.json             # Project metadata and dependencies
  └── public/
      ├── index.html           # Main HTML file
      ├── script.js            # Frontend logic
      ├── style.css            # Stylesheet
      ├── fonts/
      │   └── ticking-timebomb-bb.regular.ttf
      └── tempicons/           # Weather SVG icons
          ├── atmosphere.svg
          ├── clouds.svg
          ├── drizzle.svg
          ├── rain.svg
          ├── snow.svg
          ├── storm.svg
          └── sun.svg
```

### Usage

- Enter a country and city, then click "Go" to see the current weather and location on the map.
- Click "Check 5-Day Forecast" for a forecast summary.

### Customization

- **API Key:** The OpenWeatherMap API key is hardcoded in both `server.js` and `public/script.js`. For production, consider using environment variables.
- **Icons:** Add or replace SVGs in `public/tempicons/` for custom weather visuals.
- **Font:** The app uses a custom font located in `public/fonts/`.
