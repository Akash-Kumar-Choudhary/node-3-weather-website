const request = require('request')
const r = request.defaults({'proxy':'http://10.32.0.1:8080'})
const geocode=(lattitude,longitude,callback)=>{
  const url=`http://api.weatherstack.com/current?access_key=e6295ae91709e62cc99d3fb3d7adb3f4&query=`+lattitude+','+longitude
  r({url:url,json:true},(error,res)=>{
    if(error){
      callback("unable to connect the data try another day",undefined)
    }
    else if(res.body.error==0){
      callback("unable to connect the services",undefined)
    }
    else{
      callback(undefined,'the weather is'+res.body.current.weather_descriptions[0]+'.'+'the precipition is'+res.body.current.precip+'.'+'feels like'+res.body.current.feelslike)
    }
  })
}
// geocode(35.386,-80.711,(error,data)=>{
//   if(error) console.log('error',error)
//   console.log('data',data)
// })
module.exports=geocode