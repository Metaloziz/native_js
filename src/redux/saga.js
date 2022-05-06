function* foo() {
  for (let i = 0; i < 3; i++) {
    yield i
  }
}

const iter = foo()

console.log(iter.next());
console.log(iter.return());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());