const request=require('request')
const geocode=require('./geocode.js')
const forcast=require('./utiles/forcast.js')
forcast('dhanbad',(error,data)=>{
    if(error) return console.log('error',error)
    geocode(data.lattitude,data.longitude,(error,geodata)=>{
        if(error) return console.log('error',error)
        console.log(data.locations)
        console.log(geodata)
    })
})
