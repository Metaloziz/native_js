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
  },
  increment() {
    this.counter = this.counter + 1
  },
  decrement() {
    this.counter = this.counter - 1
  },
  setCurrentCount(newCounter) {
    if (newCounter) {
      this.counter = Number(newCounter)
    }
  },
  restCurrentCount() {
    this.counter = 0
  }
}
// короче function(){} ссылается на объект вызова, на окружение

newObj.getCurrentCount()
newObj.increment()
newObj.getCurrentCount()
newObj.decrement()
newObj.decrement()
newObj.getCurrentCount()
newObj.setCurrentCount(100)
newObj.getCurrentCount()
newObj.restCurrentCount()
newObj.getCurrentCount()  // в конце заменить на стрелочную функцию

