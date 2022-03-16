// console.dir(()=>{})
// console.dir(function (){})
// console.dir(class {})

// class Test {
//     constructor(name) {
//         this.name = name;
//     }
// }

//console.log(typeof Test.prototype);

//Test.prototype.sayName = function () {};
//console.log(Test.prototype);

//let obj = new Test('Yo');
//console.log(obj);
//console.log(obj.__proto__);
//console.log(obj.__proto__ === Test.prototype);

// obj.__proto__.sayYo = function (){};
//
// let obj2 = new Test('YoYoYo');
// console.log(obj2);
// console.log(obj);


// class Test {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// class Test2 extends Test {
//     constructor(name) {
//         super(name);
//     }
//     sayHi() {}
// }
//
// let obj = new Test2('Yo');
// console.log(obj);
// ////////
// let testObj = new Test('eee');
// testObj.__proto__.someBadCode = function (){};
// delete obj.__proto__.__proto__.someBadCode;

// console.dir(Array);
//
// Array.prototype.bzxvhmc = function (){}
//console.dir(Array.__proto__ === Function.prototype)
//console.dir(Function.__proto__ === Function.prototype)
//console.dir(Object.__proto__ === Function.prototype)


// class Test {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let testObj = new Test('eee');
//
// let protoObj = Object.getPrototypeOf(testObj);
//
// // console.log(protoObj === testObj.__proto__);
// // console.log(protoObj === Test.prototype);
// //console.log(protoObj);
// // protoObj.sayHi = function (){};
// //
// // protoObj = { sayBla: function (){} };
// //
// // testObj.__proto__ = {ndfghmdfdshmbf: 'ndhfbvfmbdsfvmbds'}
// // Test.prototype = {zxbjfvbxbx: 'sdnvnmvsdvsd'};
//
// console.log(testObj)

//
// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {}
// }
//
// // function SuperTest(name) {
// //     this.name = name;
// // }
//
// // console.log(Object.getOwnPropertyDescriptor(Test, 'prototype') )
// // console.log(Object.getOwnPropertyDescriptor(SuperTest, 'prototype') )
//
// class Test2 extends Test {
//     constructor(name) {
//         super(name);
//     }
//     sayBye() {}
// }
//
// let obj = new Test2('dhfg')
// console.log(obj)

// function Test(name) {
//     this.name = name;
// }
// Test.prototype.sayName = function () {}
// //console.log(new Test('sdnfvbfv'))
//
// function Test2(name, age){
//     Test.call(this, name);
//     this.age = age;
// }
// //Test2.prototype.sayBye = function () {}
// Test2.prototype = Object.create(
//     Test.prototype,
//     {
//         constructor: {
//             value: Test2,
//             writable: false,
//         },
//         sayBye: {
//             value: function (){}
//         }
//     })
//
// console.log(new Test2('sdnfvbfv', 44))

// let obj = {name: 'Test'};
// Object.setPrototypeOf(obj, {test: function (){}});
// console.log(obj);
// let obj2 = {age: 50};
// let obj3 = {city: 'Minsk'};
//
// let superObj = {...obj, ...obj2, ...obj3};
// let superObj2 = Object.assign(obj, obj2, obj3);
// console.log(superObj)
// console.log('superObj2 ', superObj2)
// console.log('obj ', obj)


// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {}
// }

// let obj = new Test('Yo')
// console.log(obj)
//
// console.log( obj instanceof Test);

// class Test2 extends Test{
//     constructor(name) {
//         super(name);
//     }
// }
//
// let obj = new Test2('Yo');
// console.log(obj);
// console.log( obj instanceof Test);

// Function.prototype._bind = function (ctx, ...args) {
//     const self = this;
//     return function (...args2) {
//         return self.call(ctx, ...args, ...args2);
//     }
// }
//
// Function.prototype.customBind = function (ctx, ...args) {
//     ctx.____mdzfvbmdvmsdbfnsdb___ = this;
//     return function (...args2) {
//         ctx.____mdzfvbmdvmsdbfnsdb___(...args, ...args2);
//     }
// }
//
// let obj = {
//     name: 'Evgen', sayName: function () {
//         console.log(this.name)
//     }
// }
// let obj2 = {name: 'Hanna'};
// console.log(obj.sayName.customBind(obj2)())


//[[1,2], [3], 4] // [1,2,3,4]

Array.prototype.customFlat = function () {
    return this.reduce((acc, item) =>  Array.isArray(item) ? [...acc, ...item.customFlat()] : [...acc, item] , [] )
}


console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].customFlat());