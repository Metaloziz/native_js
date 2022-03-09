import React from 'react'


export const HomeWork6 = () => {

  console.log('Lesson 6');


// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
//
//   type StudentType = {
//     name: string
//     secondName: string
//     group: number
//     marks: NumberType []
//   }
//
//   type NumberType = 1 | 2 | 3 | 4 | 5
//
//   class Student {
//     name
//     secondName
//     group
//     marks
//
//     constructor({name, secondName, group, marks}: StudentType) {
//       this.name = name
//       this.secondName = secondName
//       this.group = group
//       this.marks = marks
//     }
//
//     mySecondName() {
//       console.log(this.name + ' ' + this.secondName + ' ' + this.group)
//     }
//   }
//
//   // @ts-ignore
//   window.newObj = new Student({
//     name: "Andrew",
//     secondName: "G",
//     group: 3,
//     marks: [3, 3, 3, 3, 4]
//   })
//
//   let group = [
//     new Student({
//       name: "Mark",
//       secondName: "AAA",
//       group: 48,
//       marks: [5, 5, 5, 4, 5]
//     }),
//     new Student({
//       name: "Andrew",
//       secondName: "GGG",
//       group: 48,
//       marks: [3, 3, 3, 3, 4]
//     }),
//     new Student({
//       name: "Kate",
//       secondName: "UUU",
//       group: 48,
//       marks: [4, 4, 4, 5, 4]
//     })]
//
//   console.log(group)
//
//   group.forEach((el) => {
//
//     let result = el.marks.filter(mark => mark >= 4)
//
//     if (result.length > 4) {
//       el.mySecondName()
//     }
//
//   })


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? // нельзя
// Можно ли создать метод класса который будет удалять экземпляр класса?

  //
  // class AnyClass {
  //   id: number | null
  //   title: string | null
  //
  //   constructor(id = 10, title = 'string') {
  //     this.id = id
  //     this.title = title
  //   }
  //
  //   delete() {
  //     this.id = null
  //     return this
  //   }
  //
  // }
  //
  // let newClass = new AnyClass()
  //
  // newClass = null
  // console.log(newClass)
  //
  //
  // // @ts-ignore
  // newClass.kamikadze = () => {
  // }

  // console.log(newClass)


// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

  //
  type newTime = {
    sec: number
    min: number
    hou: number
  }

  class Time {
    sec: number = 0
    min: number = 0
    hou: number = 0
    //
    // constructor(sec?: number, min?: number, hou?: number) {
    //   this.sec = sec
    //   this.min = min
    //   this.hou = hou
    // }

    setTime(hou: number = this.hou, min: number = this.min, sec: number = this.sec) {
      if (sec < 60) {
        this.sec = sec
      } else {
        console.warn('sec must be less 60')
      }
      if (min < 60) {
        this.min = min
      } else {
        console.warn('min must be less 60')
      }
      if (hou <= 24) {
        this.hou = hou
      } else {
        console.warn('hou must be less 60')
      }
    }

    showTime() {
      let sec: string = ''
      if (this.sec < 10) {
        sec = '0' + this.sec
      }

      let min: string = ''
      if (this.min < 10) {
        min = '0' + this.min
      }

      let hou: string = ''
      if (this.hou < 10) {
        hou = '0' + this.hou
      }
      console.log(hou + '.' + min + '.' + sec)
    }
  }

  // @ts-ignore
  // window.time = new Time(22, 10, 10)
  // console.log(new Time(22, 10, 10))?
//class Clock {
//     private date: Date
//     private hours: number
//     private minutes: number
//     private seconds: number
//
//     constructor() {
//         this.date = new Date()
//         this.hours = this.date.getHours()
//         this.minutes = this.date.getMinutes()
//         this.seconds = this.date.getSeconds()
//     }
//
//     private translate(method: number) {
//         if (method < 10) {
//             return '0' + method
//         }
//         return method
//     }
//
//     public setHours(hours: number, minutes: number
  // public
  //   getTime()
  //   {
  //     return `${this.translate(this.hours)}:${this.translate(this.minutes)}:${this.translate(this.seconds)}`
  //   }
  // }

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

//   class Customer {
//     name: string = ''
//     secondName: string = ''
//     address: string = ''
//     numberCard: number = 0
//
//     constructor(name: string, secondName: string, address: string, numberCard: number) {
//       this.name = name
//       this.secondName = secondName
//       this.address = address
//       this.numberCard = numberCard
//     }
//
//     setName(value: string) {
//       this.name = value
//     }
//
//     setSecondName(value: string) {
//       this.secondName = value
//     }
//
//     setAddress(value: string) {
//       this.address = value
//     }
//
//     setNumberCard(value: number) {
//       this.numberCard = value
//     }
//
//     getInformation() {
//       console.log({
//         name: this.name,
//         secondName: this.secondName,
//         address: this.address,
//         numberCard: this.numberCard,
//       })
//     }
//   }
//
//   let arr = [
//     new Customer('Andrew', 'donkey', 'Minsk', 10),
//     new Customer('Clen', 'Melt', 'Minsk', 11),
//     new Customer('Wen', 'bottle', 'Minsk', 12),
//     new Customer('Bob', 'pain', 'Minsk', 14),
//   ]
//
//   // @ts-ignore
//   let result = arr
//     .sort((a, b) => a.name > b.name ? -1 : 1)
//     .filter((el) => el.numberCard > 10 && el.numberCard < 14)
//
//   console.log(result)
//
// // @ts-ignore
//   window.newCustomer = new Customer()


// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

  class Car {

    mark: string
    rounds: number

    constructor(mark: string, rounds: number) {
      this.mark = mark
      this.rounds = rounds
    }

    showInfo() {
      console.log(this)
    }

  }

  // // @ts-ignore
  // window.Car = new Car('Audi', 10, 700)
  //
  // class BigCar extends Car {
  //
  //   // weigth: number
  //   rounds: number
  //
  //   constructor(mark: string, rounds: number, private readonly weigth: number) {
  //     super(mark, rounds);
  //     this.weigth = weigth
  //     this.rounds = rounds
  //   }
  //
  //   getWeigth() {
  //     return this.weigth
  //   }
  // }
  //
  //
  // // console.log(new BigCar('MAZ', 8, 1000))
  //
  // // @ts-ignore
  // window.MAZ = new BigCar('MAZ', 8, 1000)

// just a plug


  class Test {
    constructor(private name: string, public age: number) {

    }

    sayName() {
      console.log(this.name);
      this.sayYo();
    }

    private sayYo() {
      console.log('YoYoYo');
    }

    protected sayBla() {
      console.log('Bla Bla Bla');
    }

    private a = () => {
    }
  }

  let obj = new Test('Yo', 20);
  console.log(obj)

  obj.sayName()

  return (
    <h2>
      LESSON 6
    </h2>
  );
}

