export {}

interface Tes {
  id: number
}

class Test {
  id

  constructor(id: number) {
    this.id = id
  }

  sayName(){
    console.log(this.id);
  }

}