const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/204809db6d811657cb813a0952ee0671/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out.  There is a " + response.body.currently.precipProbability + "% chance of rain.")
//     }
// })



// const goecodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmVuY2xhcmsxIiwiYSI6ImNrMnkwY2dkdTAzMXozaHJxY3Y5aDE5ZjkifQ.6KYu8f82OMAi6dRoz23nSA'

// request({ url: goecodeURL, json: true}, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to api!')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find coordinates!')
//   } else {
//     const latitude = response.body.features[3].center[1]
//     const longitude = response.body.features[3].center[0]
//     console.log("The latitude for LA is: " + latitude)
//     console.log("The longitude for LA is: " + longitude)
//   }
// })


geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
}) 