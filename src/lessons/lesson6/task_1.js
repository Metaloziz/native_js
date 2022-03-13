// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
//

class Student {
  constructor({name, secondName, group, marks}) {
    this.name = name
    this.secondName = secondName
    this.group = group
    this.marks = marks
  }

  mySecondName() {
    console.log(this.name + ' ' + this.secondName + ' ' + this.group)
  }
}

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
    marks: [5, 5, 5, 5, 5]
  })]

// console.log(group)

group.forEach((el) => {

  let result = el.marks.filter(mark => mark >= 4)

  if (result.length > 4) {
    el.mySecondName()
  }
})

group.sort((a, b) => {
  return a.marks.reduce((acc, i) => acc + i) - b.marks.reduce((acc, i) => acc + i)
})

console.log(group)