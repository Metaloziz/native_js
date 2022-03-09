// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).


// export const sum = (...nums: number[]): number => nums.reduce((acc, current) => acc + current);
//

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
//
// export function getTriangleType(a: number, b: number, c: number): string {
//
//     if (a + b === c || b + c === a) {
//
//     }
//
//
//     return ""
// }
//

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export const getSum = (num: number): number => {

    // let result = num
    //     .toString()
    //     .split('').reduce((acc, el) => {
    //         return acc + parseInt(el)
    //     })
    return num
        .toString()
        .split('')
        .reduce((a, b) => a + parseInt(b), 0)


    return num
}


// 4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {

    let result = 0

    for (let i = 0; i < arr.length; i++) {

        i % 2 === 0
            ? result += arr[i]
            : result -= arr[i]

    }

    return result > 0
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: number[]): number[] {

    return array.filter(el => el > 0 && el % 1 === 0).map(el => el * el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export const sumFirstNumbers = (N: number): number => {

    // if (N <= 1) return N
    //
    // return N + sumFirstNumbers(N - 1)

    return ((1 + N) / 2) * N

};


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}