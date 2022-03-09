// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two


let Two = {
  name: 'Two',
  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  }
};


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

let One = {
  name: 'One',
  hi: helperObj.greeting.bind(Two)
};

One.hi()

