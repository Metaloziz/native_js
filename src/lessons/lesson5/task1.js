// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта


function greeting() {  // this можно типизировать в аргументах
  let {age, name, id} = this    // может определяться автоматически
  return `My name is ${name}. I am ${age} ` + id
}

const greeting2 = () => {  // this можно типизировать в аргументах
  let {age, name, id} = this    // может определяться автоматически
  return `My name is ${name}. I am ${age} ` + id
};

const someObj3 = {
  id: 10,
  greeting: greeting
}

const someObj = {
  name: 'Eugene',
  age: 32,
  greeting: greeting
}

console.log(greeting2.call(someObj));

// console.log(someObj3.greeting())

const someObj2 = {
  name: 'Eugene',
  age: 32,
  greeting() {
    return 'hello'
  }
}
let someObj5 = {
  name: 'Andrew',
  age: 28,
  greeting() {
    return 'hello5'
  }
}

// console.log(someObj3.greeting.call(someObj2))

// let foo = someObj3.greeting.bind(someObj2)
// foo = foo.bind(someObj5)

// console.log(foo())
// после сзвязывания мы не можем вызвать от другого объекта

// можем ли мы создать стрелочную функцию отдельно и присвоить свойству объекта ?

const greeting22 = () => {
  this.name = 'sick'
  console.log(this)
  return `My name is ${this.name}. I am ${this.age}`
}


console.log(greeting22.call(someObj5));