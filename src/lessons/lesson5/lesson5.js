let foo2 = () => {
  console.log(this)
}

function foo3() {
  console.log(arguments)
}

foo3(1,2,3)

// foo2()
// foo3('qwe', 'qwe', 'qwe')

function Test(id) {
  this.id = id
}

console.dir(new Test(11))

// let obj = {
//   id: 10,
//   foo: () => {
//     console.log(this)
//   }
// }
// let obj2 = {
//   id: 20,
//   foo: () => {
//     console.log(id)
//   }
// }
//
// // let foo = () => {
// //   console.log(this.id)
// // }
//
// let id = 33
//
// // obj.foo = foo
// // obj2.foo = foo
//
// obj.foo()
// obj2.foo()