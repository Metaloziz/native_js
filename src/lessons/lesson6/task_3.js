// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию


class Time {

  constructor() {
    this.sec = 0
    this.min = 0
    this.hou = 0
  }

  setTime(sec = this.sec, min = this.min, hou = this.hou) {
    if (0 <= sec && sec <= 60) {
      this.sec = sec
    } else {
      console.warn('sec must be less 60')
    }
    if (0 <= min && min <= 60) {
      this.min = min
    } else {
      console.warn('min must be less 60')
    }
    if (0 <= hou && hou <= 24) {
      this.hou = hou
    } else {
      console.warn('hou must be less 60')
    }
  }

  showTime() {
    let sec = ''
    this.sec < 10 ? sec = '0' + this.sec : sec = this.sec

    let min = ''
    this.min < 10 ? min = '0' + this.min : min = this.min

    let hou = ''
    this.hou < 10 ? hou = '0' + this.hou : hou = this.min

    console.log(hou + 'h.' + min + 'm.' + sec + 's')
  }
}

let time = new Time()
time.showTime()
time.setTime(31, 12, 21)
time.showTime()

console.log(time);


console.warn('error')