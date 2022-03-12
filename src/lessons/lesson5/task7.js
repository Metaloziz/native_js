// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// function sumTwoNumbers(a:number,b:number):number {return a + b};

function sumTwoNumbers(a = 10, b = 10) {
  return a + b
}

const bindNumber = (fn, N) => {
  return () => {
    return fn() + N
  }
}
console.log(bindNumber(sumTwoNumbers, 10)())

export const bindNumber2 = (func,x) => {
  return func.bind(null,x)
}