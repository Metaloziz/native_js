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