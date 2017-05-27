//var suite = require('matcha');

suite('Make some loops', () => {
  bench('functional', () => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .filter((value, index) => index % 2 === 0)
      .map(value => value * 2)
      .reduce((prev, now) => prev + now);
  });
  bench('while', () => {
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
  bench('for ... in', () => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = 0;
    for (let index in values) {
      if (index % 2 === 0) {
        res += values[index] * 2;
      }
    }
  });
  bench('for', () => {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = 0;
    for (let index = 0; index < values.length; index++) {
      if (index % 2 === 0) {
        res += values[index] * 2;
      }
    }
  });
  bench('forEach', () => {
    let res = 0;
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .forEach((values, index) => {
        if (index % 2 === 0) {
          res += values * 2;
        }
      })
  });
});





