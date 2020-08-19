/** Used as references for various `Number` constants. */
// 最大安全整数
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
// 匹配无符号整数值
/**
 * ?: (?:pattern) 非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。
 * 这在使用或字符“(|)”来组合一个模式的各个部分时很有用。
 * 例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。
 * 0｜[1-9]\d* 0或者以1-9开头，后面跟0-9，匹配次数为任意次
 */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 * 判断index是否为数组的index类型
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  // lenth是否为null或者undefine？
  // Y 长度无效，使用无符号整数最大值
  // N 返回长度
  length = length == null ? MAX_SAFE_INTEGER : length;
  /**
   * !!length 双感叹号把length强制转换为bool类型，长度比较时有效值，如果length为0，index检测就没有意义了。
    * type == 'number' 如果是数字类型，则继续判断
    * type != 'symbol' 不是symbol类型，如果非数字类型，那么不能为symbol类型，然后再进行正则匹配
    * reIsUint.test(value) 是正整数
   * value > -1 ，当value是-1时，通过了上面type==number的判断，所以需要判断数字大小，必须 > -1
   * value % 1 == 0 排除-0的情况
   * value < length 不能超出长度
   */
  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

export default isIndex;
