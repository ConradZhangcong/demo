const res1 = {
  code: 200,
  data: {
    goods: [{
      price: 100,
      name: 'name',
    }]
  }
}

const res2 = {
  code: 200,
  data: {
    goods: []
  }
}

let items;
console.log(res2.data.goods == null ? undefined : res2.data.goods[0])
console.log(res2.data.goods[0] == null ? undefined : res2.data.goods[0].price)