export const getActivities = callback => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(json => callback(json))
}

export const getJokes = callback => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(json => callback(json))
}

