import isObject from './isObject.js';
import isSymbol from './isSymbol.js';

/** Used as references for various `Number` constants. 
 * 通过 0 / 0得到NaN，方法后续与该值进行对比
 * 高，实在是高，之前都不知道怎么取判断是否为NaN
*/
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. 
 * 匹配前后的空白字符
*/
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. 
 * 用于检测错误的带符号十六进制字符串值
*/
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. 
 * 用于检测二进制字符串
*/
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. 
 * 用于检测8进制字符串
*/
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 * 转换为数字的方法
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  // 如果是数字类型，则直接返回就OK，不需要处理
  if (typeof value == 'number') {
    return value;
  }
  // 如果是symbol类型，则返回NaN，不能转换
  if (isSymbol(value)) {
    return NAN;
  }

  // 如果是对象类型，包括function
  if (isObject(value)) {
    // 如果对象存在valueOf方法，则调用valueOf()，否则other = value
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    // value必定是一个有效的对象，value.valueOf()的值可能是任意数据类型
    // 如果other是一个对象，则通过对象+‘’转换为字符串
    // 如果other不是一个对象，可能是基本数据类型、null、undefined，不需要转换为字符串
    value = isObject(other) ? (other + '') : other;
  }
  // 如果value不是一个字符串
  if (typeof value != 'string') {
    // 如果value是0，则返回0
    // 如果value是其他数据类型，直接通过+进行强制转换
    // +true === 1, +false === 0, +null === 0, +undefined === NaN, +{} === NaN, +[] === 0, +[1] === 1, +[1,2] === NaN
    return value === 0 ? value : +value;
  }

  // 开始处理当value是字符串的情况
  // 去掉前后空格
  value = value.replace(reTrim, '');
  // 判断是否为二进制的值？
  var isBinary = reIsBinary.test(value);
  // 如果是二进制或者八进制，则调用 freeParseInt方法, 也就是parseInt方法
  // 如果非二进制或者八进制，判断是否为合法的十六进制，
    // 如果是非法的十六进制，返回NaN，
    // 其他情况返回+value 
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

export default toNumber;
