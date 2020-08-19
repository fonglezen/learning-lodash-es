import baseGetTag from './_baseGetTag.js';
import isObject from './isObject.js';

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // 判断是否为对象类型，如果不是对象类型，直接返回false
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  // 获取value的数据类型tag
  var tag = baseGetTag(value);
  // funcTag '[object Function]' 通过function()什么的方法
  // '[object GeneratorFunction]' 生成器函数
  // object AsyncFunction async function 类型的方法
  // object Proxy 类型的方法
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

export default isFunction;
