import isFunction from './isFunction.js';
import isLength from './isLength.js';

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  /**
   * 首先 value != null value不能是null和undefined
   * value的长度比较有效 isLength(value.length)，也就是说value有length属性，且为数字
   * 且不是方法 isFunction(value)
   */
  return value != null && isLength(value.length) && !isFunction(value);
}

export default isArrayLike;
