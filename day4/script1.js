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

// let Human = function (fname_v, age_v) {
//   this.fname = fname_v;
//   this.age = age_v;
//   //   this.aboutMe = function () {
//   //     console.log(`hi, ${this.fname}, my age is ${this.age}`);
//   //   };
//   //   console.log(this.fname, this.age);
// };

// Human.prototype.aboutMe = function () {
//   console.log(`hi, ${this.fname}, my age is ${this.age}`);
// };
// Human.prototype.greetme = function () {
//   console.log(`hi, ${this.fname}, Good morning!`);
// };

// let Student = function (fname, age, roll, dept) {
//   Human.call(this, fname, age);
//   // calling the parent class constructor
//   this.roll = roll;
//   this.department = dept;
// };
// /////////

// // Student.prototype = Human.prototype;
// // linking the protototype
// Student.prototype = Object.create(Human.prototype);

// Student.prototype.play = function () {
//   console.log(`${this.fname} plays.....`);
// };
// ///////////

// let ExStudent = function (fname, age, roll, dept, degree) {
//   Student.call(this, fname, age, roll, dept);
//   this.degree = degree;
// };

// // link the prototypes
// ExStudent.prototype = Object.create(Student.prototype);
// ExStudent.prototype.constructor = ExStudent;

// ExStudent.prototype.mySpeech = function () {
//   console.log(`${this.fname} got degree`);
// };
// let raj = new ExStudent("raj", 20, 101, "CSE", "B.E");
// console.log(raj);

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

// ES6 classes
// class Human {
//   constructor(fname_v, age_v) {
//     this.fname = fname_v;
//     this.age = age_v;
//   }

//   aboutMe() {
//     console.log(`hi, ${this.fname}, my age is ${this.age}`);
//   }
// }

// class Student extends Human {
//   #skills;
//   static count = 0;
//   constructor(roll, dept, fname, age) {
//     super(fname, age);
//     this.roll = roll;
//     this.department = dept;
//     this.#skills = [];
//     Student.count = Student.count + 1;
//   }
//   aboutMe() {
//     super.aboutMe();
//     console.log(`hello, ${this.fname}, my age is ${this.age}`);
//   }
//   setSkill(skil) {
//     this.#skills.push(skil);
//   }
//   getSkills() {
//     return this.#skills;
//   }
//   greetMe() {
//     console.log(`hi, ${this.fname}, Good morning!`);
//   }
//   static staticMethod() {
//     console.log("i dont belong to object");
//   }
// }

// let raj = new Student(101, "CSE", "raj", 20);
// let tarun = new Student(101, "CSE", "raj", 20);
// let gita = new Student(101, "CSE", "raj", 20);
// let kiran = new Student(101, "CSE", "raj", 20);
// console.log(Student.count);
// raj.aboutMe();

// raj.setSkill("hockey");
// raj.setSkill("football");
// raj.setSkill("hockcricketey");
// let d = raj.getSkills();
// console.log(d);
// console.log(raj);
// raj.greetMe();
// raj.staticMethod();
// Student.staticMethod()

/* 

  member 
      characterstic or props 
          instance
          static
      behaviours or methods 
          instance
          static
*/

// let Person = {
//   myConstructor: function (fname, age) {
//     this.fname = fname;
//     this.age = age;
//   },
//   aboutMe: function () {
//     console.log(`hi ${this.fname}`);
//   }
// };

// let obj1 = Object.create(Person);
// obj1.myConstructor("obj", 25);
// obj1.aboutMe();
// console.log(obj1);
