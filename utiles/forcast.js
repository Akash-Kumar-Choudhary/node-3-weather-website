const request = require('request')
const r = request.defaults({ proxy: "http://10.32.0.1:8080" })
const forcast = (address, callback) => {
  const url =
  `http://api.weatherstack.com/current?access_key=e6295ae91709e62cc99d3fb3d7adb3f4&query=${address}`
  r({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect that location.try another way", undefined)
    }
    else if(response.body.location.error==0){
        callback("unable to connect the services",undefined)
    }
    else {
      callback(undefined, {
        lattitude: response.body.location.lat,
        longitude: response.body.location.lon,
        locations: response.body.location.name
      })
    }
  })
}
module.exports=forcast