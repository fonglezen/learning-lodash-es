import Symbol from './_Symbol.js';

/** Used for built-in method references. 
 * 引用内置方法 Object.prototype
*/
var objectProto = Object.prototype;

/** Used to check objects for own properties. 
 * 用于判断是否为自身属性
*/
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 * 原生对象转化为字符串方法
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. 
 * 是否为Symbol类型？
 * Y 引用Symbol.toStringTag 方法
 * N undefined
 * Symbol.toStringTag 是一个内置 symbol，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，
 * 这个字符串用来表示该对象的自定义类型标签，
 * 通常只有内置的 Object.prototype.toString() 方法会去读取这个标签并把它包含在自己的返回值里
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
*/
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 * 忽略Symbol.toStringTag值的获取baseGetTag的特殊版本, 
 * 有自定义的Symbol.toStringTag时则忽略
 * @private
 * @param {*} value The value to query. 要查询的值
 * @returns {string} Returns the raw `toStringTag`. 返回类型字符串
 * @examples
 * getRawTag(1) "[object Number]"
 * getRawTag(true) "[object Boolean]"
 * getRawTag('') "[object String]"
 * getRawTag([]) "[object Array]"
 * class ValidatorClass {
 *  get [Symbol.toStringTag]() {
 *    return "Validator";
 *  }
 * }
 * getRawTag(ValidatorClass)
 * getRawTag(ValidatorClass)  "[object Function]"
 */
function getRawTag(value) {
  // isOwn 判断value 自身是否存在 Symbol.toStringTag 属性
  // tag 读取value的 Symbol.toStringTag 属性
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    // 设置 value的Symbol.toStringTag为undefined
    value[symToStringTag] = undefined;
    // 声明 unmasked变量，用来做什么？
    var unmasked = true;
  } catch (e) {}

  // 使用 Object.prototype.toString.call(value) 获取类型字符串
  var result = nativeObjectToString.call(value);
  // 如果上面value[symToStringTag] = undefined;语句执行成功没有报错，则unmasked为true，说明被处理为undefined了
  if (unmasked) {
    // 如果被重新赋值过undefined，则进行以下操作和判断
    if (isOwn) {
      // 当value自身存在 Symbol.toStringTag 属性，则把value[Symbol.toStringTag] 赋值为tag，也就是原本的tag
      value[symToStringTag] = tag;
    } else {
      // 如果value没有Symbol.toStringTag, 则删除 value[Symbol.toStringTag]
      // 为什么？
      delete value[symToStringTag];
    }
  }
  // 返回value的类型字符串
  return result;
}

export default getRawTag;
