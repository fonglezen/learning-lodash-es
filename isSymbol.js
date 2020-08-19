import baseGetTag from './_baseGetTag.js';
import isObjectLike from './isObjectLike.js';

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  // 如果typeof 是symbol类型，则返回true
  // 如果不是symbol类型，则判断是否typeof 是否为object，❓为什么要判断是否为object类型
  // y 是object类型，则判断类型字符串是否为'[object Symbol]'，是fanhuitrue
  // 其他情况为false
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

export default isSymbol;
