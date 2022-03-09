// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// const str = 'fgfggg'
// console.log(str[0]);

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// Object.prototype.plus = function (a) {
// 	return this + a
// }
//
// Object.prototype.minus = function (a) {
// 	return this - a
// }
//
// console.log(  (2).plus(3).minus(1) )

// // eslint-disable-next-line no-extend-native
// Number.prototype.plus = function (a) {
// 	return this + a
// }
// // eslint-disable-next-line no-extend-native
// Number.prototype.minus = function (a) {
// 	return this - a
// }
//
// let result = (2).plus(3).minus(1)

// console.log(result); // 4

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'


const someFunction = (a, b, c, d) => {
  return b + a + c + a + d
}

console.log(someFunction("*", '1', 'b', '1c'))


// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле
//
const tree = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null
    },
    {
      valueNode: 3,
      next: null
    },
    {
      valueNode: 2,
      next: null
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null
        },
        {
          valueNode: 5,
          next: null
        }
      ]
    }]
};

const sumFromObject = (obj) => {

  let sum = 0

  for (const objKey in obj) {

    if (typeof obj[objKey] === 'object') {
      sum += sumFromObject(obj[objKey])
    } else {
      sum += obj[objKey]
    }
  }
  return sum
}


// console.log(sumFromObject(tree));

// const function1 = (arr) => {
//
// 	let sum = 0
//
// 	arr.forEach((el) => typeof el === 'number' ? sum += el : sum += function1(el))
//
// 	return sum
// }

// console.log(function1(tree))


// Task 5
// исправить код, что бы работал правильно
// var i = 0
//
// for (i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

// function Book(name, author) {
//   this.name = name;
//   this.author = author;
//   return this;
// }
// let a = "Учебник javascript"
// let b = "Петр Сергеев"

// function Foo(Book, a, b) {
// return Book(a,b)
// }
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5


// const sum = (...args) => {
//   if(args.length === 2){
//     return args[0] + args[1]
//   }
//   return (b)=>{
//     return args[0] + b
//   }
// };
//
// let result = sum(1)
//
// let result2 = result(2)
//
// console.log(result2)
// //
// const f = (...arg) => {
//
//   let sum = 0
//
//   arg.forEach((el)=>{
//     if(typeof el === 'number'){
//       sum += el
//     } else {
//       sum += el()
//     }
//   })
//   return sum
// }
//
// let result = f(1)(2)
//
// console.log(result);


// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// let sum = 0;

// let sum = 0
//
// const foo = (number = 0) => {
//
//   if (number === 0) return sum
//
//   sum += number
//   return foo
//
// };
//
// console.log(foo(1)(2)(3)(6)(5)())


// let allSum = 0
//
// const sum = (...args) => {
//
//   if(args.length === 0) return allSum
//   // if(args.length === 2){
//   //   return args[0] + args[1]
//   // }
//   // return (b)=>{
//   //   return args[0] + b
//   // }
//
//   return  (args)=>{
//     return allSum += sum(args)
//   }
// };
//
// console.log(sum(1)(2)())


// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

// const seven = (a = 0) => {
//   return 7 + a
// }
//
// const five = (a = 0) => {
//   return 5 + a
// }
//
// const minus = (a) => -a
//
// const one = (a = 0) => 1 + a
//
//
// const two = (a = 0) => 2 + a
//
//
// const plus = (a) => 0 + a
//
// console.log(seven())
//
// console.log(two(plus(seven())))
// console.log(seven(plus(one())))
// console.log(five(minus(two())))


// Task 10
// Реализовать функцию сортировки массива пузырьком

// let arr = [12, 123, 14,121,1241341,11,11,2]
//
// function bubbleSort(arr) {
//   for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//     for (let j = 0, endJ = endI - i; j < endJ; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//     }
//   }
//   return arr;
// }
//
// console.log(bubbleSort(arr))

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

// let str = "())({}}{()][]["
//
// function checkPair(str) {
//   if (str.length % 2) return false
//   // пары скобок
//   let br = "(){}[]";
//   // стек открывающих скобок
//   let stek = [];
//   for (let i = 0; i < str.length; i++) {
//     let index = br.indexOf(str[i]);
//     // если скобка закрывающая
//     if (index % 2) {
//       // если открывающих скобок нет, плохо
//       if (stek.length === 0) return false;
//       // берем последнюю скобку из открывающих
//       let lastBracket = stek.pop()
//       // если открывающая не соответствует закрывающей - плохо
//       if (lastBracket !== br[index - 1]) return false
//     } else {
//       // если открывающая, добавляем ее в стек.
//       stek.push(str[i])
//     }
//   }
//   return stek.length === 0
//   }

// console.log(checkPair(str))


// let str = "())("
//
// const someFunction = (a) => {
//
//   let left = []
//   let right = []
//
//   let newArr = a.split('')
//
//   newArr.forEach((el)=>{
//
//     if(el === '('){
//       left.push(el)
//     } else {
//       right.push(el)
//     }
//   })
//   return left.length === right.length
// }
//
// console.log(someFunction(str))


// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

// let a = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
//
// const sortFunction = (arr) => {
//
//   // let newArr = new Set(arr)
//
//   return [...new Set(arr)]
// }
//
//
// console.log(sortFunction(a))


// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// let a = [1, 2, 3, 4, null]
//
// const dubleKill = (arr) => {
//   let newArr = []
//
//   arr.forEach((el) => {
//     if (typeof el === 'number') {
//       newArr.push(el * 2)
//     }
//   })
//   return newArr
// }
//
// console.log(dubleKill(a))
//

// O(N2) = O(N2)

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

// const tree2 = {
//   value: 1,
//   children: [
//     {
//       value: 2,
//       children: [
//         {value: 4},
//         {value: 5},
//       ]
//     },
//     {
//       value: 3,
//       children: [
//         {value: 6},
//         {value: 7},
//       ]
//     }
//   ]
// };
//
// const sumFromObject = (obj) => {
//
//   let sum = []
//
//   for (const objKey in obj) {
//
//     if (typeof obj[objKey] === 'object') {
//       sum.push(...sumFromObject(obj[objKey]))
//     } else {
//       sum.push(obj[objKey])
//     }
//   }
//   return sum
// }
//
//
// console.log(sumFromObject(tree2).reduce(
//   (acc, el) => acc + el
// ));


// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// const bomb = (time ) => {
//
//   setTimeout(()=>{
//     console.log('BOOOOM')
//   }, time)
// }
//
// bomb(2000)

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

let str = 'AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'

function rle(str) {
  let newStr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === newStr[newStr.length - 1]) {
      count += 1
    } else {
      count && newStr.push(count + 1)
      newStr.push(str[i]);
      count = 0;
    }
  }
  count && newStr.push(count + 1)
  return newStr.join('');
}

console.log(rle(str))

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// let arrNew = [1, 2, 3]
//
// let result = arrNew.every((el, index, arr) => {
//
//   if (arr.length - 1 < index) {
//     return el > arr[index + 1]
//   }
//
// })
//
// console.log(result)


// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

let arr = [1, 2, 3, 4, 6]

// function quickSort(array) {
//
//   if (array.length <= 1) {
//     return array
//   }
//   let helpIndex = Math.floor(array.length / 2)
//   let helpItem = array[helpIndex]
//   let less = []
//   let greatest = []
//   for (let index = 0; index < array.length; index++) {
//     if (index === helpIndex) continue
//     if (array[index] < helpItem) {
//       less.push(array[index])
//     } else {
//       greatest.push(array[index])
//     }
//   }
//   return [...quickSort(less), helpItem, ...quickSort(greatest)]
// }
//
// const findeMissingNumber = (array) => {
//   let missingNumber = array.filter((el, index, arr) => el > arr[index + 1])
//   return missingNumber
// }

// console.log(findeMissingNumber(arr))

const sum = (arr) => {
  let sumNumbers = arr.reduce((acc, el) => acc + el)
  let secondSum = ((1 + arr[arr.length - 1]) * arr[arr.length - 1]) / 2
  return secondSum - sumNumbers
}

// console.log(sum(arr))


// function missing(arr) {
//
//   let res = [];
//   let sort = arr.sort((a, b) => a > b ? 1 : -1)
//   if(sort.length && sort[0] !== 1 ){
//     res.push(1)
//   }
//   for(let i=0; i<sort.length; i++){
//     if ((sort[i] !== sort[i + 1] - 1) && (i !== (sort.length-1))) {
//       res.push(sort[i] + 1)
//     }
//   }
//   if(!res.length){
//     return undefined
//   }
//   return res
// }


// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));


// https://3-info.ru/post/16934