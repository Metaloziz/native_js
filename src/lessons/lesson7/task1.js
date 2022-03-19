//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
  constructor(name = 'Animal') {
    this.name = name
  }
  walk(){
    console.log(this.name + ' walk')
  }
  eat(){
    console.log(this.name + ' eat')
  }
  sleep(){
    console.log(this.name + ' sleep')
  }
}

let example = new Animal()

console.log(example);


let obj2 = example.__proto__.constructor('same')

console.log(obj2);


