import { DateTime } from 'luxon'
const API_KEY = '517d48672b676cc5eaae6b30b6b37c8e'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}/${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, units:'metric', appid: API_KEY });
    console.log(url);
    return fetch(url).then((res) => res.json());
};



const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0]

    return {
        lat, lon, temp, feels_like, temp_min, temp_max, humidity, name,
        dt, country, sunrise, sunset,
        details, icon, speed
    }
}




const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
    return formattedCurrentWeather;
};

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export {formatToLocalTime, iconUrlFromCode}