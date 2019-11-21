const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Accessing the command line arguments (argv is in 3rd array position[2])
const address = process.argv[2]
// if no location added, log this string
if (!address) {
  console.log('Please provide address')
  } else {
// Use geocode callback function from goecode.js
    geocode(address, (error, { latitude, longitude, location }) => {
      if (error) {
        return console.log(error)
      } 

    // Use forecast callback function from forecast.js
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }

      console.log(location)
      console.log(forecastData)
    })
  }) 
}
