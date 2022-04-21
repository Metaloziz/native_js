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

  setName(newName: T) {
    this.name = newName
  }
}

let one = new Man(10, 11)

one.setName(2)
console.log(one.getName())

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
