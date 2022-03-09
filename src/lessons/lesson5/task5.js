// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
  name: 'Two',
  sayHello(data) {
    console.log(`Hello, my name is ${this.name} ` + data)
  }
};

let result = Two.sayHello.bind(One, 'like')

console.log(result('extend'));  // почему undefined ? И почему не меняется значение аргумента ?


