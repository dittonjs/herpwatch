const Gpio = require('onoff').Gpio;
const pin2 = new Gpio(2, 'low');
const pin3 = new Gpio(3, 'low');
const pin4 = new Gpio(4, 'low');
const pin17 = new Gpio(17, 'low');
const pin27 = new Gpio(27, 'low');
const pin22 = new Gpio(22, 'low');
const pin10 = new Gpio(10, 'low');
const pin9 = new Gpio(9, 'low');

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