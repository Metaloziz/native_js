//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

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

class Monkey  extends Animal {
  constructor(name = 'Monkey') {
    super(name);
  }
  roar(){
    console.log(this.name + ' roar')
  }
  climb(){
    console.log(this.name + 'climb')
  }

}

let obj2 = new Monkey()
obj2.roar()
obj2.climb()
console.log(obj2);