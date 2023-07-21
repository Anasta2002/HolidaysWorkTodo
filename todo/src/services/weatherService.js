const API_KEY = 'ffddfa770d75dc5df617b6048cba6b55'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data 
    
    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity,  name,
        dt, country, sunrise, sunset,
        weather, speed}
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)
}

export default getWeatherData;

