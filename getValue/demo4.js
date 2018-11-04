function pointer(obj, path = []) {
  return new Proxy({}, {
    get(target, property) {
      return pointer(obj, path.concat(property))
    },
    apply(target, self, args) {
      let val = obj;
      let parent;
      for (let i = 0; i < path.length; i++) {
        if (val === null || val === undefined) break;
        parent = val;
        val = val[path[i]]
      }
      if (val === null || val === undefined) {
        val = args[0]
      }
      return val;
    }
  })
}

let c = {a: {b: [1, ,2 ,3]}}
pointer(c).a();   // {b: [1,2,3]}
pointer(c).a.b(); // [1,2,3]
pointer(d).a.b.d('default value');  // default value复制代码