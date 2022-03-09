let One = {name: 'One'};
let Two = {
  name: 'Two',
  sayHello(data) {
    console.log(`Hello, my name is ${this.name} ` + data)
  }
};

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore


let helperObj = {
  name: '',
  age: 0,
  changeName(name) {
    this.name = name
  },
  setAge(age) {
    this.age = age
  },
  greeting: Two.sayHello
}

helperObj.changeName('district')
console.log(helperObj.name);
helperObj.greeting('replace')

