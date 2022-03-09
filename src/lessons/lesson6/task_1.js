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
    marks: [4, 4, 4, 5, 4]
  })]

console.log(group)

group.forEach((el) => {

  let result = el.marks.filter(mark => mark >= 4)

  if (result.length > 4) {
    el.mySecondName()
  }
})