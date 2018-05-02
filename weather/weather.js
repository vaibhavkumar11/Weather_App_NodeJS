const request = require("request");
const yargs = require("yargs");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/b9ce8950e77211b0f164ea6a80455b19/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature
        });
      } else {
        callback("Unable to fetch weather forecast");
      }
    }
  );
};

module.exports = {
  getWeather
};
