# 🌤️ VibeWeather — Korean-English Bilingual Weather App

A weather app that actually tells you what you need to know — not just temperature, but whether you should grab an umbrella, skip the run, or check the pollen count before heading out. Fully bilingual in Korean and English, with a clean UI that adapts to whatever city you're searching.

**Live Demo:** [vibe-weather-kr-en.vercel.app](https://vibe-weather-kr-en.vercel.app/)

---

## 🗂️ Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Built By](#built-by)

---

## About the Project

I built VibeWeather because most weather apps show you a number and call it a day. This one goes a bit further — it tells you the "vibe" of the weather in plain language. Running conditions, pollen levels, driving safety, air quality, UV index, moon phase... all in one place, in whichever language you prefer.

The bilingual Korean-English toggle was the original spark for this project. I wanted a weather app I could actually use while studying Korean, where I could flip between languages and naturally absorb the vocabulary. It turned into something I kept polishing until it felt genuinely useful.

---

## Features

### 🌍 Bilingual Support
- Toggle between **Korean (한국어)** and **English** with a single click
- Every label, unit, and description switches instantly — no page reload
- Recent search history also respects the active language

### 📍 Location-Aware
- Use your current GPS location with the "내 위치 날씨 보기 / My Location" button
- Or search any city by name
- Recent searches are saved so you can jump back quickly

### 🌡️ Current Weather
- Real-time temperature and "feels like" (체감온도)
- Weather condition with icon (clear, cloudy, rain, snow, etc.)
- Live local time displayed for the searched city
- Day/Night mode icon that updates based on actual local time

### 📊 Detailed Conditions
| Metric | What it tells you |
|---|---|
| 🌬️ Wind Speed | km/h with direction |
| 💧 Humidity | Current % |
| 🔆 UV Index | Low / Moderate / High / Very High |
| 🌫️ Air Quality | AQI with condition label |
| 👁️ Visibility | km range |
| 📉 Pressure | hPa reading |
| 🌧️ Precipitation Chance | % probability |
| 🌡️ Daily Temp Range | Min and max for the day |

### 🏃 Activity Recommendations
VibeWeather goes beyond raw data and tells you:
- **Running** — good conditions or not?
- **Pollen** — allergy risk level
- **Driving** — safe / caution / poor visibility advisory

### 🌅 Astronomy Info
- Sunrise and sunset times (local to searched city)
- Moon phase with label (e.g., 🌑 New Moon, 🌕 Full Moon)

### 📅 Forecasts
- **5-Day Forecast** — daily highs, lows, and conditions at a glance
- **Hourly Forecast** — hour-by-hour temperature and precipitation breakdown

### 📤 Share Weather
- Share the current weather card via the share button

### 🔇 Ambient Sound Toggle
- Background audio toggle for ambient weather vibes (mute/unmute)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, responsive) |
| Logic | Vanilla JavaScript (ES6+) |
| Weather Data | [OpenWeatherMap API](https://openweathermap.org/api) |
| Background | MP4 video loop |
| Hosting | Vercel + GitHub Pages |

No frameworks, no build tools — just clean vanilla JS. Kept it intentionally lightweight.

---

## Getting Started

### Prerequisites
- A free [OpenWeatherMap API key](https://openweathermap.org/api)

### Installation

```bash
# Clone the repository
git clone https://github.com/sweety-HJH223/toggle-weather.git

# Navigate into the project
cd toggle-weather
```

Then open `index.html` in your browser — or serve it locally with something like:

```bash
npx serve .
```

### API Key Setup

Find the API key reference in the JavaScript file and replace it with your own:

```js
const API_KEY = "your_openweathermap_api_key_here";
```

> The app uses the Current Weather, Forecast, and Air Quality endpoints from OpenWeatherMap's free tier.

---

## Usage

1. **Search a city** — type any city name and hit search (or press Enter)
2. **Use your location** — click the location button to auto-detect
3. **Switch language** — click `KO` or `EN` in the top right
4. **Check conditions** — scroll down for the full activity + astronomy breakdown
5. **View forecasts** — toggle between 5-day and hourly views at the bottom

---

## Project Structure
VibeWeather/
├── api/
│   └── weather.js          # weather API handler (fetches weather data)
├── assets/
│   ├── images/
│   │   ├── background.mp4
│   │   ├── morning.mp4
│   │   ├── afternoon.mp4
│   │   ├── evening.mp4
│   │   └── night.mp4
│   ├── icons/
│   │   ├── Strom.gif
│   │   ├── air.png
│   │   ├── blizzard.png
│   │   ├── cloudy day.png
│   │   ├── cloudy night.png
│   │   ├── cloudy_overcast.png
│   │   ├── driving.png
│   │   ├── fog.png
│   │   ├── hail.gif
│   │   ├── humidity.gif
│   │   ├── location.gif
│   │   ├── moon.gif
│   │   ├── pollen.gif
│   │   ├── pollen2.gif
│   │   ├── pressure.png
│   │   ├── rain day.png
│   │   ├── rain.png
│   │   ├── run.gif
│   │   ├── sleet.png
│   │   ├── snow.png
│   │   ├── sunny.png
│   │   ├── thunderstorm.png
│   │   ├── uv.png
│   │   ├── visibility.png
│   │   └── wind.png
│   └── sound/
│       ├── chime.mp3
│       ├── click.mp3
│       ├── night.mp3
│       ├── rain.mp3
│       ├── sunny.mp3
│       └── winter.mp3
├── .gitattributes
├── index.html
├── script.js
├── style.css
└── README.md

---

## Built By

**SweetyCodes** — Subhashree Behera
Full-stack developer. Building practical tools with clean UI and a focus on real-world utility.

- 🌐 Portfolio: [sweetycodes-jh.vercel.app](https://sweetycodes-jh.vercel.app/)
- 💼 GitHub: [@sweety-HJH223](https://github.com/sweety-HJH223)

---

> Built with curiosity, caffeine, and a love for Korean vocabulary 🇰🇷
