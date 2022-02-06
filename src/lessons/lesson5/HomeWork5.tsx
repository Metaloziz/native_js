import React from 'react'

export {}

export const HomeWork5 = () => {

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

////////////////////////////////////////////////
// type someObjType = {
//     name: string;
//     age: number;
//     greeting: ()=>string
// }
//
// function greeting  (this: someObjType)  {
//
//     let {age,name}=this
//
//     return `My name is ${name}. I am ${age}`
//
// }
//
// const someObj:someObjType = {
//     name: 'Eugene',
//     age: 32,
//     greeting: greeting
// }
//
// console.log(someObj.greeting())
//
//
//
// const someObj2:someObjType = {
//     name: 'Eugene',
//     age: 32,
//     greeting(){
//         return `My name is ${this.name}. I am ${this.age}`
//     }
// }
//
// console.log(someObj2.greeting())


// можем ли мы создать стрелочную функцию отдельно и присвоить свойству объекта ?

// const greeting2 = () => {
//     return `My name is ${name}. I am ${age}`
// }


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// type newObjType = {
//     counter: number
//     getCurrentCount: ()=>void
//     increment: ()=>void
//     decrement: ()=>void
//     setCurrentCount: ()=>void
//     restCurrentCount: ()=>void
// }
//
// let newObj:newObjType = {
//     counter: 0,
//     getCurrentCount (){
//         console.log(this.counter)
//     },
//     increment() {
//         this.counter = this.counter + 1
//     },
//     decrement(){
//         this.counter = this.counter - 1
//     },
//     setCurrentCount(){
//         let newCounter = prompt('type counter')
//         if(newCounter){
//             this.counter = Number(newCounter)
//         }
//     },
//     restCurrentCount(){
//         this.counter = 0
//     }
// }
// // короче function(){} ссылается на объект вызова, на окружение
// // @ts-ignore
// window.counter = 10
// // @ts-ignore
// window.newObj = newObj


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
//
// type newObjType = {
//     counter: number
//     getCurrentCount: ()=>void
//     increment: ()=>void
//     decrement: ()=>void
//     setCurrentCount: (newCounter:number)=>void
//     restCurrentCount: ()=>void
// }
//
// let newObj:newObjType = {
//     counter: 0,
//     getCurrentCount ():newObjType{
//         console.log(this.counter)
//         return this
//     },
//     increment():newObjType {
//         this.counter = this.counter + 1
//         return this
//     },
//     decrement():newObjType{
//         this.counter = this.counter - 1
//         return this
//     },
//     setCurrentCount(newCounter):newObjType{
//         this.counter = Number(newCounter)
//         return this
//     },
//     restCurrentCount():newObjType{
//         this.counter = 0
//         return this
//     },
// }
// // как типизировать возвращаемый объект в function (){}
// // @ts-ignore
// window.counter = 10
// // @ts-ignore
// window.newObj = newObj


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
// type someObjType = {
//     name: string;
//     age: number;
//     greeting: ()=>string
// }
//
// function greeting  (this: someObjType)  {
//     return `My name is ${this.name}. I am ${this.age}`
// }
//
// type MyFirstConstructorFuncType = (name:string, age: number)=>someObjType
//
// let  MyFirstConstructorFunc:MyFirstConstructorFuncType = (name, age)=>  {
//   return {
//       name: name,
//       age: age,
//       greeting: greeting
//   }
// }
//
//     // @ts-ignore
//     let newObj:any = new MyFirstConstructorFunc('Andrew', 28)


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One
//
// let One = {name: 'One'};
// let Two = {
//     name: 'Two',
//     sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
//
// let result = Two.sayHello.bind(One)
//
// // @ts-ignore
// window.result = result

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore
//
// let helperObj = {
//
//     name: '',
//     age: 0,
//     changeName(name: string){
//         this.name = name
//     },
//     setAge(age:number){
//         this.age = age
//     },
//     greeting: Two.sayHello
// }
//
// // @ts-ignore
// window.helperObj = helperObj
//
//


// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// function sumTwoNumbers(a:number,b:number):number {return a + b};

//
// function sumTwoNumbers(a:number=10,b:number=10):number {return a + b}
//
// type sumTwoNumbersType = typeof sumTwoNumbers
//
// const bindNumber = (fn:sumTwoNumbersType, N:number) => {
//
//     return ()=>{
//         return fn() + N
//     }
// }
//
// // @ts-ignore
// window.sumTwoNumbers = sumTwoNumbers
// // @ts-ignore
// window.bindNumber = bindNumber


// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// type OneType = {
//     name:string
// }
//
// type helperObjType = {
//     name:string
//     age:number
//     changeName: (name: string)=>void
//     setAge: (age:number)=>void
// }
//
// let One:OneType = {name: 'One'};
//
// let Two = {
//     name: 'Two',
//     sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
//
// let helperObj:helperObjType = {
//     name: '',
//     age: 0,
//     changeName(name){
//         this.name = name
//     },
//     setAge(age){
//         this.age = age
//     },
// }

//
// // как переписать это на стрелочную функцию ?
//  const someFunction = (obj:OneType, helperObj:helperObjType):any => {
//
// return  (newName:string)=>{
//           helperObj.changeName.bind(obj,newName )
//     }
//
//
// }
// someFunction(One,helperObj)('asdas')
//
//
//     console.log(  One)
// function atata(One: OneType, helperObj: helperObjType) {
//     return function (nameN: string) {
//         return helperObj.changeName.bind(One, nameN)
//     }
// }
//
// let hbca = atata(One, helperObj)
// hbca('GGGGGGGGG')()
// console.log(One)

// @ts-ignore
window.ONE = One

// @ts-ignore
window.helperObj =helperObj

// @ts-ignore
window.someFunction = someFunction



// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// window.helperObj.setAge.bind(window.ONE, 20)()


// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
// type OneType = {
//     name:string
//     hi: ()=>void
// }
//
// type helperObjType = {
//     name:string
//     age:number
//     changeName: (name: string)=>void
//     setAge: (age:number)=>void
//     greeting: ()=>void
// }
// let Two = {
//     name: 'Two',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
//
//
//
// let helperObj:helperObjType = {
//     name: '',
//     age: 0,
//     changeName(name){
//         this.name = name
//     },
//     setAge(age){
//         this.age = age
//     },
//     greeting: Two.sayHello
// }
//
// let One:OneType = {
//     name: 'One',
//     hi: helperObj.greeting.bind(Two)
// };
//
//
//
//
// const someFunction = (obj2:OneType, helperObj:helperObjType) => {
//
//     let obj = obj2
//
//     let newFun = (newName:string)=>{
//         helperObj.changeName(newName)
//     }
//     newFun('asdas')
//
//     return obj
// }
//
// // @ts-ignore
// window.ONE = One
//
// // @ts-ignore
// window.helperObj =helperObj
//
// // @ts-ignore
// window.someFunction = someFunction
//

// Реализовать задачи 2-4 из Bind с помощью Call
/////////
//     Что выведет функция?
//     function f() {
//         alert( this ); // ?
//     }
//
//     let user = {
//         g: f.bind(null)
//     };
//
//     user.g();
//     Ответ: null.
//
//         function f() {
//         alert( this ); // null
//     }
//
//     let user = {
//         g: f.bind(null)
//     };
//
//     user.g();
//     Контекст связанной функции жёстко фиксирован. Изменить однажды привязанный контекст уже нельзя.
//
//         Так что хоть мы и вызываем user.g(), внутри исходная функция будет вызвана с this=null. Однако, функции g совершенно без разницы, какой this она получила. Её единственное предназначение – это передать вызов в f вместе с аргументами и ранее указанным контекстом null, что она и делает.
//
//         Таким образом, когда мы запускаем user.g(), исходная функция вызывается с this=null.

    ///////////////////////////////
// just a plug
// export default () => {};

    return (
        <h2>
           LESSON 5
        </h2>
    );
}

