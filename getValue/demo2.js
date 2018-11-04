/**
 * 通过函数解析字符串
 * @param {Object} obj 数据对象
 * @param {String} props 取出的值
 * @param {*} def 默认值
 */
function get(obj, props, def) {
  if ((obj == null) || obj == null || typeof props !== 'string') return def;
  const temp = props.split('.');
  const fieldArr = [].concat(temp);
  temp.forEach((e, i) => {
    if (/^(\w+)\[(\w+)\]$/.test(e)) {
      const matchs = e.match(/^(\w+)\[(\w+)\]$/);
      const field1 = matchs[1];
      const field2 = matchs[2];
      const index = fieldArr.indexOf(e);
      fieldArr.splice(index, 1, field1, field2);
    }
  })
  return fieldArr.reduce((pre, cur) => {
    const target = pre[cur] || def;
    if (target instanceof Array) {
      return [].concat(target);
    }
    if (target instanceof Object) {
      return Object.assign({}, target)
    }
    return target;
  }, obj)
}