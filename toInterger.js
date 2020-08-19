import toFinite from './toFinite.js';

/**
 * Converts `value` to an integer.
 * 转换 value 为 一个整数
 *
 * **Note:** This method is loosely based on 这个方法参考的以下实现
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  // 首先调用toFinite放大得到一个有效的数字
  var result = toFinite(value),
  // 然后做取余操作，得到余数 remainder
      remainder = result % 1;
  // 如果 result不为NaN(toFinite不会返回NaN了，为什么这里还要判断result === result?)
  // Y 是否有余数
    // Y 返回 数字减去余数
    // N 返回数字
  // N 非法数字，返回 0
  return result === result ? (remainder ? result - remainder : result) : 0;
}

export default toInteger;
