const Gpio = require('onoff').Gpio;
const pin4 = new Gpio(3, 'out');

function toggleOne() {
  if(pin4.readSync() === 0) {
    pin4.writeSync(1);  
  } else {
    pin4.writeSync(0);
  }  
}

const interval = setInterval(toggleOne, '1000');

setTimeout(() => {
  clearInterval(interval);
  pin4.writeSync(0);
  pin4.unexport()
}, 10000)
