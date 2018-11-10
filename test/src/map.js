let res = {
  code: 200,
  list: [{
      name: 'conrad',
      age: '20'
    },
    {
      name: 'test',
      age: '29'
    }
  ],
  message: null
}

let list = res.list.map((obj, i) => {
  console.log(`obj:${obj}, i: ${i}`)
  return obj;
})

console.log(list);