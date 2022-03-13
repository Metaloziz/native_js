// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? // нельзя
// Можно ли создать метод класса который будет удалять экземпляр класса? // что такое удаление ? - удаление ссылки, знaчит занулить.


class AnyClass {

  constructor(id = 10, title = 'string') {
    this.id = id
    this.title = title
  }

  delete(item) {
    item = null
  }

}

let newClass = new AnyClass


console.log(newClass)
newClass.delete(newClass)
console.log(newClass)

AnyClass.prototype.delete()


