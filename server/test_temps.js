var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  console.log(ids);
});