let arr = [1, 2, 3, 4, 5];

let list = arr.reduce((total, currentValue, currentIndex, arr) => {
  console.log(`total:${total}, currentValue:${currentValue}, currentIndex:${currentIndex}, arr:${arr}`)
  return total + currentValue;
})

console.log(list);