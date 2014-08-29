**util全局变量**
1.util.inherits(constructor,superConstructor)
此方法是一个实现对象间原型继承的函数。javaScript通过原型赋值来实现继承，注意该方法只继承原型上的成员。
```javascript
var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 2012;
	this.sayHello = function(){
		console.log('hello '+ this.name + ' this year is '+ this.base);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
}

function Sub(){
	this.name='sub';
}

util.inherits(Sub, Base); //这里只继承原型上的showName方法
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello(); 
console.log(objSub);
```

2.util.inspect(object,[showHidden],[depth],[colors])
此方法是一个将任意对象转换为字符串的方法，通常用于调试和错误输出，它至少接受一个参数object。
参数：

- object，即要转换的对象.
- showHidden 是一个可选参数，如果值为true，将会输出更多隐藏信息.
- depth 标识最大的递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。默认为2层，指定为null打印出来全部
- color 如果color为true，输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的效果。
```javascript
var util = require('util');
function Person(){
	this.name='hehe';
	this.toString = function(){
		return this.name;
	}
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true,2,true));
```

API可参考：http://nodejs.org/api/Utilities.html

**事件驱动events**
events是Node.js最重要的模版，原因是Node.js本身架构就是事件式的，而它提供了唯一的接口。所以开成Node.js事件编程的基石。events模块不仅用于用户代码与Node.js下层事件循环的交互。还几乎被所有的模块依赖。
1.事件发射器
events模块只提供了一个对象。events.EventEmitter。EventEmitter的核心就是事件发射与事件监听器功能的封装。EventEmitter的每个事件由一个事件或若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
```javascript
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
	console.log('Listener1',arg1,arg2);
});

emitter.on('someEvent',function(arg1,arg2){
	console.log('Listener2',arg1,arg2);
});

emitter.emit('someEvent', 'haha', hehe);
```

常用API的方法介绍：
(1)EventEmitter.on(event,listener)为指定事件注册一个监听器，接受一个字符串event和一个回调函数listener
(2)EventEmitter.emit(event,[arg1],[arg2]....) 发射event事件，传递若干可选参数到事件监听器的参数表
(3)EventEmitter.once(event,listener) 为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器。
(4)EventEmitter.removeListener(event,listener)移除指定事件的某个监听器，listener必须是该事件已经注册过的监听器。
(5)EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定event，则移除指定事件的所有监听器。
可参考：http://nodejs.org/api/events.html

2.error事件
EventEmitter定义了一个特殊的事件error，它包含错误的定义，我们在遇到异常的时候通常会发射error事件，当error事件被发射时，EventEmitter规定如果没有相应的监听器，Node.js会把它当作异常，退出程序并打印调用栈，我们一般要为发射error的事件对象设置监听器，避免遇到错误后整合程序崩溃，例如：
```javascript
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');
```
3.继承EventEmitter
大多数时候我们不会直接使用EventEmitter，而是在对象中继承它，包括fs，net，http   在内的。只要是支持事件相应的核心模块都是EventEmitter的子类。

为什么这样做呢？
1.具有某个实体功能的对象实现事件的符合语义，事件的监听和发射应该是一个对象的发放。
2.javaScript的对象机制基于原型，支持部分多重继承，继承EventEmitter不会打乱对象原有的继承关系。
 