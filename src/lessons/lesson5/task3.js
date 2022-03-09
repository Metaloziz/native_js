// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

let newObj = {
  counter: 0,
  getCurrentCount() {
    console.log(this.counter)
    return this.counter
  },
  increment() {
    this.counter = this.counter + 1
    return this
  },
  decrement() {
    this.counter = this.counter - 1
    return this
  },
  setCurrentCount(newCounter) {
    if (newCounter) {
      this.counter = Number(newCounter)
      return this
    }
  },
  restCurrentCount() {
    this.counter = 0
    return this
  }
}
// короче function(){} ссылается на объект вызова, на окружение

console.log(newObj.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount());

