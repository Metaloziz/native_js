class Test {
  constructor(name) {
    this.name = name
  }
  syHi(){}
}


let result = Object.getOwnPropertyDescriptor(Test, 'prototype')

console.log(result)
