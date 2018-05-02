const request = require("request");
const yargs = require("yargs");

var getGeocode = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Cannot connect to google servers");
      } else if (body.status === "ZERO_RESUTS") {
        callback("No  location found");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports = {
  getGeocode
};

//b9ce8950e77211b0f164ea6a80455b19
// https://api.darksky.net/forecast/b9ce8950e77211b0f164ea6a80455b19/37.8267,-122.4233

