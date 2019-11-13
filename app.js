const request = require('request')

const url = 'https://api.darksky.net/forecast/204809db6d811657cb813a0952ee0671/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})