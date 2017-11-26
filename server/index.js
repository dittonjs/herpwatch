const Gpio = require('onoff').Gpio;
const pin2 = new Gpio(2, 'out');
const pin3 = new Gpio(3, 'out');
const pin4 = new Gpio(4, 'out');
const pin17 = new Gpio(17, 'out');
const pin27 = new Gpio(27, 'out');
const pin22 = new Gpio(22, 'out');
const pin10 = new Gpio(10, 'out');
const pin9 = new Gpio(9, 'out');
let trigger = true;

function toggleOne() {
  if(trigger) {
    pin2.writeSync(1);
    pin3.writeSync(1);
    pin4.writeSync(1);
    pin17.writeSync(1);
    pin27.writeSync(1);
    pin22.writeSync(1);
    pin10.writeSync(1);
    pin9.writeSync(1);
    trigger = false;
  } else {
    pin2.writeSync(0);
    pin3.writeSync(0);
    pin4.writeSync(0);
    pin17.writeSync(0);
    pin27.writeSync(0);
    pin22.writeSync(0);
    pin10.writeSync(0);
    pin9.writeSync(0);
    trigger = true;
  }
}

const interval = setInterval(toggleOne, '1000');

setTimeout(() => {
  clearInterval(interval);
  pin2.writeSync(0);
  pin3.writeSync(0);
  pin4.writeSync(0);
  pin17.writeSync(0);
  pin27.writeSync(0);
  pin22.writeSync(0);
  pin10.writeSync(0);
  pin9.writeSync(0);

  pin2.unexport();
  pin3.unexport();
  pin4.unexport();
  pin17.unexport();
  pin27.unexport();
  pin22.unexport();
  pin10.unexport();
  pin9.unexport();
}, 10000)
