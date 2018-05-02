const request = require("request");
const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      string: true,
      alias: "address",
      describe: "To provide location whose address has to be fetched"
    }
  })
  .help()
  .alias("help", "h").argv;

console.log(argv);
geocode.getGeocode(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`It's currently: ${(weatherResults.temperature - 32)/1.8}C`);
        }
      }
    );
  }
});
