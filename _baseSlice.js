/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *  slice方法的基础实现方法
 * @private
 * @param {Array} array The array to slice. 要切片的数组
 * @param {number} [start=0] The start position. 开始的index
 * @param {number} [end=array.length] The end position. 结束的index
 * @returns {Array} Returns the slice of `array`. 返回切片数组
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  // 如果开始位置小于0
  if (start < 0) {
    // 取反后是否大于长度，Y 则start从0开始，N start为长度+start
    // 比如 start = -1，length = 2， start = 2 + -1 = 1，则从1开始
    start = -start > length ? 0 : (length + start);
  }
  // end是否大于长度，如果大于长度，则取长度，否则取end
  // 比如length=2，end=2，取end
  // length = 2， end = 3， 则取2给end
  end = end > length ? length : end;
  // 如果end小于0，比如-1， 则end = -1 + 2 = 1，1作为结束位置
  if (end < 0) {
    end += length;
  }
  // 原本length为数组的长度
  // 如果开始位置大于结束位置，切了个寂寞，设置length=0，不切了
  // 其他情况则可以正常切割，把end-start得到的长度，比如start是1，end是2，然后进行无符号右移操作，移动0位
  // 移动0位这是什么操作❓
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

export default baseSlice;
