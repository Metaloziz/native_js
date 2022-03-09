// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Customer {

  constructor(name, secondName, address, numberCard) {
    this.name = name
    this.secondName = secondName
    this.address = address
    this.numberCard = numberCard
  }

  setName(value) {
    this.name = value
  }

  setSecondName(value) {
    this.secondName = value
  }

  setAddress(value) {
    this.address = value
  }

  setNumberCard(value) {
    this.numberCard = value
  }

  getInformation() {
    console.log({
      name: this.name,
      secondName: this.secondName,
      address: this.address,
      numberCard: this.numberCard,
    })
  }
}

let arr = [
  new Customer('Andrew', 'donkey', 'Minsk', 10),
  new Customer('Clen', 'Melt', 'Minsk', 11),
  new Customer('Wen', 'bottle', 'Minsk', 12),
  new Customer('Bob', 'pain', 'Minsk', 14),
]

let result = arr
  .sort((a, b) => a.name < b.name ? -1 : 1)
  // .filter((el) => el.numberCard > 10 && el.numberCard < 14)

console.log(result)

// let newResult = new Customer('Andrew', 'donkey', 'Minsk', 10)
// console.log(newResult);

