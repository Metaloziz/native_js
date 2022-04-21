// @ts-ignore

type SomeType = {
  length: number
}

function newFoo<T extends SomeType>(data: T) {

  console.log(data)
}

type Item = {
  id: number
}

let item1: Item = {
  id: 10
}
let item3 = {
  name: 'cotton'
}

interface Item2 extends Item {
  name: number
}

let item2: Item2 = {
  id: 10,
  name: 1
}

let arrItem: Item[] = [item1, item2, item3]