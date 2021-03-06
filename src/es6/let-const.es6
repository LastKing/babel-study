/**
 * Created by Rain on 2015/12/19.
 */
//1.  基本let 用法
//{
//  let a = 10;
//  var b = 1;
//}
//
//console.log(a);
//console.log(b);

//2. for 循环中 保持在 for{}中，下文无效
//var arr = [2, 3, 4, 5, 6];
//for (let i = 0; i < arr.length; i++) {
//}
//console.log(i);

//3.  for中var 声明i
//var a = [];
//for (var i = 0; i < 10; i++) {
//  a[i] = function () {
//    console.log(i);
//  };
//}
//a[6](); // 10
//上面代码中，变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。

//4. for中 let 声明i
//var a = [];
//for (let i = 0; i < 10; i++) {
//  a[i] = function () {
//    console.log(i);
//  };
//}
//a[6](); // 6

//5. 变量提升
//console.log(foo); // 输出undefined
//console.log(bar); // 报错ReferenceError
//
//var foo = 2;
//let bar = 2;
//bable  暂时两个都是 undefined


//6. 暂时性死区
//var tmp = 123;
//
//if (true) {
//  tmp = 'abc'; // ReferenceError
//  let tmp;
//}

//if (true) {
//  // TDZ开始
//  tmp = 'abc'; // ReferenceError
//  console.log(tmp); // ReferenceError
//
//  let tmp; // TDZ结束
//  console.log(tmp); // undefined
//
//  tmp = 123;
//  console.log(tmp); // 123
//}

//7. let不会被提升声明
//var tmp = new Date();
//
//function f(){
//  console.log(tmp);
//  if (false){
//    let tmp = "hello world";
//  }
//}
//
//f() // undefined


//const 命令
const PI = 3.1415;
console.log(PI);
//PI = 3;   // TypeError: "PI" is read-only
