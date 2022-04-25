// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

function greeting() {
  return `My name is ${this.name}. I am ${this.age}`
}


function MyFirstConstructorFunc(name, age) {

  this.name = name
  this.age = age
  this.greeting = greeting

}

let newObj = new MyFirstConstructorFunc('Andrew', 28)
console.log(newObj);
console.log(newObj.greeting());