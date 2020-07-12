const request = require("request")

const forecast = (latitude, longitude, callback) => {
    // make api call
    const url = "http://api.weatherstack.com/current?access_key=20d8273bba5448b8a0937050b5200638&query=" + latitude + "," + longitude;
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback(error, undefined);
        }
        else if (body.error){
            callback("Unable to find location", undefined);
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity)
        }
    })
    // error handling 


}

module.exports = forecast;