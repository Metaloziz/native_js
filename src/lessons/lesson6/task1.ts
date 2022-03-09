export {}

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
//
type StudentType = {
  name: string
  secondName: string
  group: number
  marks: NumberType []
}

type NumberType = 1 | 2 | 3 | 4 | 5

class Student {
  name
  secondName
  group
  marks

  constructor({name, secondName, group, marks}: StudentType) {
    this.name = name
    this.secondName = secondName
    this.group = group
    this.marks = marks
  }

  mySecondName() {
    console.log(this.name + ' ' + this.secondName + ' ' + this.group)
  }
}

// @ts-ignore
window.newObj = new Student({
  name: "Andrew",
  secondName: "G",
  group: 3,
  marks: [3, 3, 3, 3, 4]
})

let group = [
  new Student({
    name: "Mark",
    secondName: "AAA",
    group: 48,
    marks: [5, 5, 5, 4, 5]
  }),
  new Student({
    name: "Andrew",
    secondName: "GGG",
    group: 48,
    marks: [3, 3, 3, 3, 4]
  }),
  new Student({
    name: "Kate",
    secondName: "UUU",
    group: 48,
    marks: [4, 4, 4, 5, 4]
  })]

console.log(group)

group.forEach((el) => {

  let result = el.marks.filter(mark => mark >= 4)

  if (result.length > 4) {
    el.mySecondName()
  }
})