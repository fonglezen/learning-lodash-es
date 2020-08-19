import freeGlobal from './_freeGlobal.js';

/** Detect free variable `self`. 
 * 监测自由变量self
*/

// self是否为object类型？
// self是否为真值？
// self.Object是否 === Object 方法
// 最后 freeSelf 为self或者false
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. 
 * 作为全局对象使用
*/
// 是否存在global对象，Y 返回， N 继续
// 是否存在self对象，Y 返回， N 继续
// Function('return this') 创建一个方法，该方法返回this, 并立即执行该方法，root为当前执行上下文
var root = freeGlobal || freeSelf || Function('return this')();

export default root;
