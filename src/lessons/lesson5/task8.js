// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One

let One = {
  name: 'One'
};

let Two = {
  name: 'Two',
  age: 10
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
}

const someFunction = (obj, helperObj) => {
  return function (newName) {
    helperObj.changeName.call(obj, newName)
  }
}

someFunction(One, helperObj)('pleasure')

console.log(One)

function foo(obj, helperObj) {
  return function (nameN) {
    return helperObj.changeName.bind(obj, nameN)
  }
}

foo(One, helperObj)('scold')()

console.log(One)

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
helperObj.setAge.call(Two, 28)
console.log(Two);


// window.helperObj.setAge.bind(window.ONE, 20)()
