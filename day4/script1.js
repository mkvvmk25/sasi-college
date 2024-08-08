/* 
    Class and object 
    pillars if oop 
        inheritance
        poly.. 
        encap.. 
        abstract... 
*/
// let p = {
//     a: 10,
//     b: 20,
//     c: function () {
//       console.log(this.a, p.b);
//       //            p.a,  p.b
//     },
//   };
//   console.log(this);

//   // p.c();

//  to create Class in JS
// constructor function
// ES6 classes
// object.create()

let Human = function (fname_v, age_v) {
  this.fname = fname_v;
  this.age = age_v;
  //   this.aboutMe = function () {
  //     console.log(`hi, ${this.fname}, my age is ${this.age}`);
  //   };
  //   console.log(this.fname, this.age);
};

Human.prototype.aboutMe = function () {
  console.log(`hi, ${this.fname}, my age is ${this.age}`);
};
Human.prototype.greetme = function () {
  console.log(`hi, ${this.fname}, Good morning!`);
};

let Student = function (fname, age, roll, dept) {
    Human.call(this, fname, age);
    // calling the parent class constructor
    this.roll = roll;
    this.department = dept;
};
/////////

// Student.prototype = Human.prototype;
// linking the protototype
Student.prototype = Object.create(Human.prototype);

Student.prototype.play = function () {
  console.log(`${this.fname} plays.....`);
};
///////////

let ExStudent = function (fname, age, roll, dept, degree) {
  Student.call(this, fname, age, roll, dept);
  this.degree = degree;
};

// link the prototypes
ExStudent.prototype = Object.create(Student.prototype);

ExStudent.prototype.mySpeech = function()
{
    console.log(`${this.fname} got degree`);   
}

let raj = new ExStudent("raj", 20, 101, "CSE", "B.E");
console.log(raj);

// let tarun = new Human("tarun", 20);
// let kiarn = new Human("kiran", 22);
// let raj = new Human("raj", 23);
// console.log(tarun);

// tarun.aboutMe();
// tarun.greetme();

// humans proto is object
// human is children of object

// let d = { a: 12, b :23};
// let p = Object.create( d );
// console.log(p);
