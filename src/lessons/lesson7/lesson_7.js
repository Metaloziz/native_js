function NewClass(name) {
  this.name = name

  this.gav = function () {
    console.log('pardon')
  }
}

let obj = new NewClass('worm')


function NewSupperClass(func, name) {


    this.walk = function () {
      console.log(this.name + ' walk')
    }
}

let obj2 = new NewSupperClass(NewClass, 'govern')

console.log(obj2)

obj2.walk()