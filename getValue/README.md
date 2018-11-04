# getValue

> 链式取值 来自公众号`前端大全`

1. demo1 optional chaining

```js
a == null ? undefined : a.b
a == null ? undefined : a[x]
a == null ? undefined : a.b()
a == null ? undefined : a()
```

2. demo2 通过函数解析字符串

```js
var object = { a: [{ b: { c: 3 } }] }
var result = _.get(object, 'a[0].b.c', 1)
console.log(result)
// output: 3
```

3. demo3 使用解构赋值

```js
const {
  a: { c: { d: result2 } = {} }
} = c
```

4. demo4 使用 Proxy

```js

```

> 综上，在实际工作中，使用方法四会是最优雅，可读性也非常强，但考虑到浏览器的话，可能方法二会更加常用，当然，如果你所要取的值层级不是太深，你组内的同事要严格的 lint，方法三也不失为一种好的选择。
