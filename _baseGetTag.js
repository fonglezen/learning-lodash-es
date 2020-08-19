import Symbol from './_Symbol.js';
import getRawTag from './_getRawTag.js';
import objectToString from './_objectToString.js';

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  // 如果value是undefined，则返回 '[object Undefined]'
  // 如果value是null， 则返回 '[object Null]'
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  // 如果 Symbol.toStringTag 有值，window上下文中，值为 Symbol(Symbol.toStringTag)
  // 且 value 通过Object(value)转换后，存在 Symbol.toStringTag 属性（会在原型链上查找）
  // y 通过getRawTag方法获取value的类型字符串
  // n 通过objectToString方法获取value的类型字符串
  // 这两个方法最终都是取到值类型原本的类型字符串，不返回自定义的类型字符串（❓此处存疑，不太确定）
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

export default baseGetTag;
