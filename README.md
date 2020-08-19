# learning-lodash-es
Learning lodash es

[https://github.com/lodash](https://github.com/lodash)


## 学习进度

* chunk()
  * _baseSlice() 
  * _isIterateeCall()
    * ✅ eq(value, other) 判断两个值是否相等
    * ✅ isArrayLike() 是否为类数组类型数据
      * ✅ isFunction(value) 判断value是否为方法，支持普通方法，生成器方法，async方法，proxy方法❓
        * ❓ _baseGetTag()
        * ✅ isObject()
      * ✅ isLength(value) 判断数组的长度是否有效，大于-1且小于最大安全整数的数字
    * ✅ _isIndex(value, length) 判断value是否为length内有效的数组索引值
    * ✅ isObject()
  * ✅ toInteger() 返回一个有效的整数，如果是无效的数字，则会得到0
    * ✅ toFinite()  返回一个有限数字，无限值则返回最大可表示的数（或者最小），如果转换为数字后是有效数字则返回，否则返回0.
      * ✅ toNumber() 转换为数字
        * ✅ isObject()  判断值是否为对象类型，这个方法判断 null 则返回false, function类型返回true
        * ✅ ❓ isSymbol() 返回是否为symbol类型，存在不解的地方。
          * ❓_baseGetTag() 不太确定其实现的功能，最终结果返回是value的类型字符串
            * ✅ _Symbol()  返回Symbol属性，比如 global.Symbol / self.Symbol / this.Symbol 
              * ✅ _root() 返回global / self / this
                * ✅ _freeGlobal() 返回global对象
            * ❓  _getRawTag() 不太理解其实现
              * ✅ _Symbol() 同上
            * ✅ _objectToString()  返回Object.prototype.toString.call() 的结果
          * ✅ isObjectLike()  当 不等于undefined / null 且是typeof === object类型的值 ，返回true。和isObject()的区别是，这个方法直接返回typeof的结果，而不对function类型进行判断，function类型返回false。

