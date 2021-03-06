const Gpio = require('onoff').Gpio;
// const pin2 = new Gpio(2, 'out');
// const pin3 = new Gpio(3, 'out');
// const pin4 = new Gpio(4, 'out');

let pin17 = new Gpio(17, 'out');
pin17.writeSync(1);
let on = false;

var ds18b20 = require('ds18b20');

ds18b20.sensors(function(err, ids) {
  setInterval(() => {
    ds18b20.temperature(ids[0], (err, value) => {
      if (value < 30.5 && !on) {
        on = true
        pin17.writeSync(0);
      } else if(value >= 31.6 && on) {
        on = false;
        pin17.writeSync(1);
      }
      console.log(`temp is ${value}C`);
    })
  }, 1000)
});
// const pin27 = new Gpio(27, 'out');
// const pin22 = new Gpio(22, 'out');
// const pin10 = new Gpio(10, 'out');
// const pin9 = new Gpio(9, 'out');


// setTimeout( () => pin3.writeSync(1) , 2000);
// setTimeout( () => pin4.writeSync(1) , 3000);
// setTimeout( () => pin17.writeSync(1) , 4000);
// setTimeout( () => pin27.writeSync(1) , 5000);
// setTimeout( () => pin22.writeSync(1) , 6000);
// setTimeout( () => pin10.writeSync(1) , 7000);
// setTimeout( () => pin9.writeSync(1) , 8000);

// function test() {
//   setTimeout( () => pin2.writeSync(1) , 1000);
//   setTimeout( () => pin3.writeSync(1) , 2000);
//   setTimeout( () => pin4.writeSync(1) , 3000);
//   setTimeout( () => pin17.writeSync(1) , 4000);
//   setTimeout( () => pin27.writeSync(1) , 5000);
//   setTimeout( () => pin22.writeSync(1) , 6000);
//   setTimeout( () => pin10.writeSync(1) , 7000);
//   setTimeout( () => pin9.writeSync(1) , 8000);
// }
// test();
// setTimeout(() => {
//   pin2.writeSync(0);
//   pin3.writeSync(0);
//   pin4.writeSync(0);
//   pin17.writeSync(0);
//   pin27.writeSync(0);
//   pin22.writeSync(0);
//   pin10.writeSync(0);
//   pin9.writeSync(0);

//   pin2.unexport();
//   pin3.unexport();
//   pin4.unexport();
//   pin17.unexport();
//   pin27.unexport();
//   pin22.unexport();
//   pin10.unexport();
//   pin9.unexport();
// }, 9000)
