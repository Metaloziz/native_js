// @ts-ignore

class Man<T> {
  protected name
  static age = 10

  constructor(protected id: T, name: T) {
    this.id = id
    this.name = name
  }

  getName() {
    return this.name
  }

  get getSameName(): T {
    return this.name
  }


  set setSomeName(newName: any) {
    this.name = newName
  }
}

let one = new Man<number>(10, 11)


class Man2<T> extends Man<T> {
  constructor(id: T, name: T) {
    super(id, name);
  }

  log(this: Man2<string>) {
    console.log(this.id + this.name + " ")
  }
}

let one2 = new Man2<string>("12", 'always')


one2.log()


class Class {
  private _name: string
  private _age: number
  private _id: number
  private _length: number

  constructor(name: string = 'doctor', age: number = 10, id: number = 10, length: number = 10) {
    this._name = name
    this._age = age
    this._id = id
    this._length = length
  }

}

class Class1 {
  protected readonly _name: string

  constructor(name: string) {
    this._name = name
  }


  get name(): string {
    return (this._name + ' Class1');
  }
}

class Class2 extends Class1 {
  age: number

  constructor(age: number, name: string) {
    super(name)
    this.age = age
  }

  get name(): string {
    return (this._name + ' Class2');
  }


}

let class1 = new Class1('one')
let class2 = new Class2(11, 'two')

console.log(class1.name);
console.log(class2.name);

