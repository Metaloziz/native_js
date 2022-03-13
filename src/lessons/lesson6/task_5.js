// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.


class Task_5 {
  constructor(foo) {
    this.sayName = foo
  }
}

class Test extends Task_5 {
  constructor(foo) {
    super(foo);
    this.age = 10
  }

  sayBuy() {
  }
}

function foo() {
}

let item = new Test(foo)

console.log(item.sayName);