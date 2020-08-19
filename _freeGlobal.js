/** Detect free variable `global` from Node.js. 
 * 从 Node.js中检测自由变量 global
*/
// global变量是否为object类型
// global是否是真值
// global的Object属性是否 === Object 方法
// 最后返回global本身或者false
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

export default freeGlobal;
