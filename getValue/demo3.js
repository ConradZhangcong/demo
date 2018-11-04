const c = {
  a: {
    b: [1, 2, 3, 4]
  }
}
const {
  a: result
} = c;
// result : {b: [1,2,3,4]}
const {
  a: {
    c: result = 12
  }
} = c
// result: 12