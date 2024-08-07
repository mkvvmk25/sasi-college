"use strict";
// datatypes

/* 
    Number
        int, float 
    boolean
        true,false  
    string
        "", '', ``
    object 
    undefined 
    null
    NaN 
*/

// create variable
// let
// var
// const

// let a = 78;
// // dec as well init
// var k = "56";
// // dec as well init

// let d;
// // dec
// var f;
// // dec

// const p = 45;

// let a = 4.25;
// console.log(typeof a );
// let b = "string"
// let be = 'string'
// console.log(typeof be );
// let r = true;
// console.log(typeof r );
// let d;
// console.log(typeof d );
// let da = null;
// console.log(typeof da );

// let e = "23" % 10;
// // type corecion
// console.log(e);

// operators
// arthe
// + - / * % **
// logi
// && || !
// rel/condi
// < > <= >= != == !== ===
// assign..
// += -=
//   (binOP)=
// bit
// & | ~ << >> ^
// ternary
// operand ? operand : oprand
// incre/decre

// let d = ~-85;
// // -(n + 1)

// // 5,
// // 1010
// // 1010
// // 1010
// // 10 << 1 * 2 = 20
// // 20 << 1 * 2 = 40
// // 40 << 1 * 2 = 80
// // 80 << 1 * 2 = 160
// // 160 << 1 * 2 = 320

// let s = (false) ? 78 : 35;
// console.log(s);

// let a = 10; // 10
// let b = ++a; // 11
// let c = a++; // 11
// let d = --a; // 11
// let e = a--; // 10
// let f = e--; // 11
// console.log(a +b+c + d + e+ f);
// // 59
// // 44
// // 58
// // 48
// // 43
// // 60
// // 64
// // 61
// // 63

// conditional St...

/* 
    if 
    if else 
    else if
    switch case 
    nested if 
*/

// if (1 != "1") {
//   console.log("hello");
// }
// else if(7 == 5 || 8 == 8)
// {
//     console.log("world");
// }
// let k = 23;
// switch (k) {
//   default:
//     console.log("4");
//   case "78":
//     console.log("1");
//     break;
//   case "56":
//     console.log("2");
//   case 23:
//     console.log("3");
// }

// if (1) {
//   if (0) {
//     console.log(75);
//   } else {
//     if (2);
//     else console.log("world");
//   }
// }

// looping statments
// for
// while
// do while
// let i;
// for (var i = 0; i < 5; i++) {
//   console.log("helo" + i);
// }
// console.log(i);
// let i = 0;
// // while (i < 5) {
// //   console.log(i);
// //   i++;
// // }
// do {
//   console.log(i);
//   i++;
// } while (i > 5);
// console.log(i);

// functions
// named funs
// anynomous funs
// arrow funs

// fun without para and withut return
function abc() {
  console.log("hello");
  return undefined;
}
// fun with para and without return
function abcd(a, b) {
  console.log("hello", b + a);
  return undefined;
}

let f = abcd(10, 20);
console.log(f);
