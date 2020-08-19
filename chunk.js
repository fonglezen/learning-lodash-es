import baseSlice from './_baseSlice.js';
import isIterateeCall from './_isIterateeCall.js';
import toInteger from './toInteger.js';

/* Built-in method references for those with the same name as other `lodash` methods. */
/* 具有相同名字的其他'lodash'方法的内置方法的引用 */
var nativeCeil = Math.ceil,  // Math.ceil() 函数返回大于或等于一个给定数字的最小整数。
    nativeMax = Math.max;   // Math.max() 函数返回一组数中的最大值。

/**
 * Creates an array of elements split into groups the length of `size`.
 * 创建一个被切分成每一个元素都是以size为长度的数组的分片数组
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * 如果数组不能被平均切分，最后一个分片这是剩下的数组元素
 * 
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process. 要处理的原始数组
 * @param {number} [size=1] The length of each chunk 每个分片的大小
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`. 迭代器对调函数
 * @returns {Array} Returns the new array of chunks. 返回分片数组
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {    // 要切分的数组，分组大小，迭代器函数
  // isIterateeCall 检查是否为一个有效的迭代器函数
  // 是否存在guard，如果Y，则判断是否为迭代器函数，如果是迭代器方法，则执行，如果不是，则跳过
  // 如果N，则判断size参数是否为undefined

  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    // nativeMax Math.max 函数返回一组数中的最大值。
    size = nativeMax(toInteger(size), 0);
  }
  // array 如果是null或者undefined，则原数组值无效，length = 0，否则length等于数组长度
  var length = array == null ? 0 : array.length;
  // 如果length === 0 或者 size < 1
  // size < 1 的情况出现在，参数传了小于1的数，比如size传了0或者负数，则直接返回空数组
  // 也就是array为null、undefined，size小于1时，直接返回 []
  if (!length || size < 1) {
    return [];
  }

  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

export default chunk;
