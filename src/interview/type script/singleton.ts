// @ts-ignore
class Singleton {

  _url: number | undefined
  private static instance: Singleton  // к static можно обращаться без создания экземпляра класса

  constructor(newUrl: number) {
    if (Singleton.instance) {
      return Singleton.instance
    }
    this._url = newUrl
    Singleton.instance = this
  }

  get url() {
    return this._url
  }
}

console.log(Singleton.prototype.url);

let singl1 = new Singleton(2)
let singl2 = new Singleton(22)
let singl3 = new Singleton(3333)
console.log(singl1.url);
console.log(singl2.url);
console.log(singl3.url);

console.log(singl1 == singl2)