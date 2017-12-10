var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  console.log(ids);
  setInterval(() => {
    ds18b20.temperature(ids[0], (err, value) => {
      err && console.log(err);
      console.log(`temp is ${value}C`);
    })
  }, 1000)
});