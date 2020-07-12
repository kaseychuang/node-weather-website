const request = require("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoia2FzZXljaHVhbmciLCJhIjoiY2tjYXZuam84MXoyYzJzcW8wcHhudDlncSJ9.Dx4SHdjLtCxL_4PkwwzMZQ";
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback(error, undefined);
        }
        else if (body.features.length === 0) { // nothing returned
            callback("Unable to find location. Try another search", undefined);
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode 