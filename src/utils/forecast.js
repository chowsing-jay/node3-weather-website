const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c0ff887693895d63aeb3f046b43beab9/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.Try another search.', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' chance of rain.'
            + 'The highest temperature for today is ' + body.daily.data[0].temperatureMax + ' degrees. And the lowest temperature for today is ' + body.daily.data[0].temperatureMin + ' degrees.' )
        }
    })
}

module.exports = forecast