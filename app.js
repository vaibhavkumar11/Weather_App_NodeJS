const request = require("request");
request(
  {
    url:
      "http://maps.googleapis.com/maps/api/geocode/json?address=%20DTU%20NEW%20DELHI",
    json: true
  },
  (error, response, body) => {
    console.log(`Address:${body.results[0].formatted_address}`);
    console.log(`Latitude of Address:${body.results[0].geometry.location.lat}`);
    console.log(`Longitude of Address:${body.results[0].geometry.location.lng}`);
  }
);
