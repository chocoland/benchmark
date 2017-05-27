var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite
  .add('functional', () => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .filter((value, index) => index % 2 === 0)
      .map(value => value * 2)
      .reduce((prev, now) => prev + now);
  })
  .add('while', () => {
    let res = 0;
    let index = 0;
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    while(values[index] !== undefined) {
      if (index % 2 === 0) {
        res += values[index] * 2;
      }
      index++;
    }
  })
  .add('for ... in', () => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = 0;
    for (let index in values) {
      if (index % 2 === 0) {
        res += values[index] * 2;
      }
    }
  })
  .add('for', () => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = 0;
    for (let index = 0; index < values.length; index++) {
      if (index % 2 === 0) {
        res += values[index] * 2;
      }
    }
  })
  .add('forEach', () => {
    let res = 0;
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .forEach((values, index) => {
        if (index % 2 === 0) {
          res += values * 2;
        }
      })
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true});
