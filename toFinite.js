import toNumber from './toNumber.js';

/** Used as references for various `Number` constants. */
// 使用 1 / 0获得一个无穷数常量，用来做比较
var INFINITY = 1 / 0,
// 最大整数常量
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 * 返回一个有限数字
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  // 如果value为非值，则返回0 
  if (!value) {
    return value === 0 ? value : 0;
  }
  // 调用toNumber方法，把value转为数字类型的值
  value = toNumber(value);
  // 如果value是无限数字 或者 是带符号的无限数字
  if (value === INFINITY || value === -INFINITY) {
    // 如果value是负数，符号为-1，如果是整数，符号为1
    var sign = (value < 0 ? -1 : 1);
    // 返回最大整数
    return sign * MAX_INTEGER;
  }
  // 当传入NaN时候，返回0
  return value === value ? value : 0;
}

export default toFinite;
