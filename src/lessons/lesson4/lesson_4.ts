// console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// let promise = new Promise((res, rej) => {
//
//     console.log("Promise is created")
//
// })
//
// console.log(promise)


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
//
// let promise1 = new Promise((res, rej) => {
//
//     res('1')
//
// }).then()
//
//
// console.log(new Promise(() => {
// }))
// console.log(Promise.resolve()) // fulfilled
// console.log(Promise.reject())


// let promise = new Promise(function (resolve, reject) {
//     // задача, не требующая времени
//     // мгновенно выдаст результат: 123
//     resolve('1')
// });
//
// promise.then((data) => {
//     console.log(data)
// })
//
// console.log(promise)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let promise = new Promise(function (resolve, reject) {
//     // задача, не требующая времени
//     // мгновенно выдаст результат: 123
//     reject('Promise Error')
// });
//
// promise.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })
//
// console.log(promise)


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// let promise = new Promise(function (resolve, reject) {
//
//     setTimeout(() => {
//         resolve('Promise Data')
//     }, 3000)
//
//
// });
//
// promise.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })
//
// console.log(promise)


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// let
//
type handlePromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (data: string) => void
    onError: (data: string) => void
}

export let handlePromise: handlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    },
}


export const CreatePromise = () => {

    const somePromise: Promise<any> = new Promise((res, rej) => {

        handlePromise.resolve = res
        handlePromise.reject = rej

    })

    handlePromise.promise = somePromise
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)

    console.log(handlePromise)

}
export const ResolvePromise = () => {

    handlePromise.resolve && handlePromise.resolve('res')
    // console.log(handlePromise)

}
export const RejectPromise = () => {
    handlePromise.reject && handlePromise.reject('rej')
    // console.log(handlePromise)
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
//
//
// let onSuccess = (oneParametr: string) => {
//     return oneParametr + 'Andrew'
// }
//
// const print = (secondParam: string) => {
//     console.log(secondParam)
// }
//
// let promis = new Promise((res, rej) => {
//
//     let ssss: string = "My name is "
//
//     // setTimeout(() => {
//     res(ssss)
//     // }, 1000)
//
// }).then((data) => {
//     console.log(data)
//     return onSuccess(data as string)
// }).then(print)


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name: 'Anna', age: 16, city: ''}
//
// let promise1 = new Promise((resolve, reject) => {
//
//     setTimeout(resolve, 2000, {name: "Anna"})
//
// })
//
// let promise2 = new Promise((resolve, reject) => {
//
//     setTimeout(resolve, 3000, {age: 16})
//
// })
// let promise3 = new Promise((resolve, reject) => {
//
//     setTimeout(resolve, 4000, {city: ''})
//
// })
// let promise4 = new Promise((resolve, reject) => {
//
//     setTimeout(resolve, 4000, {
//         Nastya: 'Robot',
//         location: {
//             country: 'BL',
//             city: "Minsk",
//         }
//     })
//
// })
//
//
// Promise.all([promise1, promise2, promise3, promise4]).then((data: any) => {
//
//     console.log(Object.assign({}, ...data))
//
// })
//
//
// // just a plug
// export default () => {
// };