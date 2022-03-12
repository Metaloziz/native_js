console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Test {
//
// }
//
// console.dir(Test);
// console.log(new Test());


// class Test {
//     name: string;
//     sayName: Function; // () => void
//     arrowFunc: Function;
//
//     constructor(name: string) {
//         this.name = name;
//         this.sayName = function () {
//             console.log(`My name is ${this.name}`);
//         }
//         this.arrowFunc = () => {
//             console.log(`My name is ${this.name}`);
//         };
//         //this.bindedSayBye = this.sayBye.bind(this);
//     }
//
//     sayBye() {
//         console.log(`Bye`);
//     }
//
//     arrowFunc2 = () => {
//         console.log('arrowFunc2 ', `My name is ${this.name}`);
//     }
// }
//
// console.dir(Test)
//
// let obj = new Test('Yo');
// console.log(obj)
// obj.arrowFunc();
// obj.arrowFunc2();


// class Test {
//     name: string;
//     zjkvbgsfkhv: Function;
//
//     constructor(name: string, callBack: Function) {
//         this.name = name;
//         this.zjkvbgsfkhv = function () {
//             //let _this = this;
//             callBack(this);
//         }
//     }
//
//     yo() {}
//
//     sayBye() {
//         console.log(`Bye`);
//     }
//
//     arrow = () => {}
// }
//
// class Test2 extends Test {
//     age: number;
//
//     constructor(name: string, age: number, sumFunc: Function) {
//         super(name, sumFunc);
//         this.age = age;
//     }
//
//     sayHi() {}
//
//     sayBye() {
//         console.log(`ksdjgfksdbvkjsdfbjhdsfbvjsdhfvbh`);
//         //super.sayBye();
//     }
// }

// @ts-ignore
// let obj = new Test2('Bla', 20, function(self){console.log(`Yo Yo Yo - ${self.name}`)});
// console.log(obj)

//obj.sayBye()
//obj.zjkvbgsfkhv()


// class Test3 extends Test2 {
//     constructor(name: string, age: number, sumFunc: Function) {
//         super(name, age, sumFunc);
//     }
//
//     jcvbhdf() {
//         super.sayBye()
//     }
// }
// // @ts-ignore
// let obj = new Test3('Bla', 20, function(self){console.log(`Yo Yo Yo - ${self.name}`)});
//
// obj.jcvbhdf()


// interface ITest {
//     name: string;
//     sayHi: Function;
// }
//
// class Test implements ITest {
//     name: string
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     sayHi() {}
//
//     sayBye() {}
// }
//
// interface ITestAge {
//     age: number
// }
//
// interface ITestCanBay {
//     canBay: Function;
//     //name: string;
// }
//
// class Test2 extends Test implements ITest, ITestAge, ITestCanBay {
//     age: number;
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age;
//     }
//
//     canBay() {}
//
//     arrow = () => {}
// }


// class Test {
//     constructor(public name: string) {
//     }
// }
//
// let obj = new Test('sdnvsdhfm');
// console.log(obj)



// class Test {
//     private sameParam = 'sdmnfbdmnfd';
//
//     constructor(public name: string) {
//     }
//
//     private sayName() {
//         console.log(this.name);
//     }
//
//     saySayName() {
//         this.sayName();
//         console.log('this.sameParam ', this.sameParam);
//     }
// }
//
// let obj = new Test('sdnvsdhfm');
// console.log(obj);
// //obj.saySayName();
// // @ts-ignore
// console.log(obj.sameParam);


// class Test {
//     #someParam = 10;
//
//     sayParam() {
//         console.log(this.#someParam);
//     }
// }
//
// let obj = new Test();
// console.log(obj);
// obj.sayParam()

//
// class Test {
//     private sameParam = 'sdmnfbdmnfd';
//
//     constructor(public name: string) {
//     }
//
//     private sayName() {
//         console.log(this.name);
//     }
//
//     protected ssName() {
//         console.log('parent ssName ', this.name);
//     }
//
//     saySayName() {
//         this.sayName();
//         console.log('this.sameParam ', this.sameParam);
//     }
// }
//
// let fObj = new Test('Yo');
// // fObj.ssName - не доступно с наружи
//
// class Test2 extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//
//     testMethod() {
//         //super.sayName() - не наследуеться
//         this.ssName();
//         super.ssName();
//     }
//
//     // ssName() {
//     //     console.log('child ssName ', this.name);
//     // }
//
// }
//
// let obj = new Test2('sdnvsdhfm');
// console.log(obj);
//
// //obj.saySayName();
// //obj.ssName() //- не доступно с наружи
//

class Test {

    age: number = 50;
    static testParam = 10;

    constructor(public name: string) {
    }

    sayName() {
    }

    static testMethod() {
        console.log(this.testParam);
    }
}

console.dir(Test)

class Test2 extends Test {

}

console.dir(Test2)

let obj = new Test('sdnvsdhfm');
console.log(obj);



// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};