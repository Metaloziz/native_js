//@ts-ignore

class GetSet {
  private _name: string = 'thus'

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

let item11 = new GetSet()

console.log(item11.name);
item11.name = 'feather'

console.log(item11);