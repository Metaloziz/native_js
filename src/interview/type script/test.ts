export {}


type CatInfo = {
  age: number;
  breed: string;
  obj: Readonly<{
    id: number
  }>
}


let cat1: Readonly<CatInfo> = {
  age: 10,
  breed: 'unless',
  obj: {
    id: 11
  }
}

cat1 = {...cat1, breed: 'new value'}

const cat2: Readonly<CatInfo> = {...cat1}

cat1.breed = 'block'

cat1.obj.id = 1

// type T1 = InstanceType<CatInfo>;


type Alpha = "Alpha"

let str: Uppercase<Alpha> = "ALPHA"


const obj: { id: number } = {
  id: 10
}

obj.id = 11

type A = {
  id: number
}

interface B extends A {
  name: string
}

let BBB: B = {
  id: 1,
  name: 'sdf'
}

type CCC = '1' | '2' | '3'

interface BBBB {
  id: number
}

interface BBBB {
  age: number
}

let obj4: BBBB = {
  age:23,
  id: 3
}