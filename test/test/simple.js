const {
  should,
  expect,
  assert
} = require('chai')
const {
  add,
  mul
} = require('../src/math');

// if (add(2, 3) === 5) {
//   console.log('(2, 3) === 5')
// } else {
//   console.warn('(2, 3) !== 5')
// }

should();
add(2, 3).should.equal(5); // BDD

expect(add(2, 3)).to.equal(5); // BDD

assert.equal(add(2, 3), 5); // TDD