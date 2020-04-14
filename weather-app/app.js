const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]

if (!adress) {
  console.log('Please, provide an adress');
} else {
  geocode(adress, (error, { latitude, longtitude, location }) => {
    if (error) {
      return console.log(error, '<=== error');
    }
    console.log(latitude);
    console.log(longtitude);

    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) {
        return console.log(error, '<=== error');
      }
      console.log(timezone, '<=== timezone');
      console.log(forecastData, '<=== forecastData');

    })
  })}
