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

// fun without para and without return
// function abc() {
//   console.log("hello");
//   //   return undefined;
// }
// // fun with para and without return
// function abcd(a, b) {
//   console.log("hello", b + a);
//   //   return undefined;
// }

// function fun1() {
//   return 10 + 56;
// }
// function fun1(a, b) {
//   return a + b;
// }

// anyanomous funs
// let d = function(a, b) {
//   return a + b;
// };

// // arrow funs called as anyanomous funs

// let f = (a)=>
//     {
//         return  a*a;
//     }

// let cub = (a)=>a**3

// console.log( cub(4)  );

// template strings
// let k = 40;
// let j = 20;
// let s = "abc";
// let q = s + j + k;
// let d = `hello ${s} ${cub(3) + 10}`;
// console.log(d);

// arrays
let arr = [true];

// console.log( arr);
// console.log( arr.length);
// console.log( arr[0]);
// console.log( arr[1]);
// console.log( arr[2]);
// console.log( arr[3]);

// traversal
// veiwing ele
// loops

// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }
// arr.forEach
// (
//     function(ele, ind, arr)
//     {
//         console.log(ele, ind, arr);
//     }
// );

// arr.push(10);
// arr.push(20);
// arr.push(30);
// console.log(arr);
// arr.shift();
// arr.unshift(45);
// console.log(arr);
// arr.pop();
// console.log(arr);

// JSON --> JS object Notation
// let k = {
//   45: "value",
//   hello: 4.45656,
//   "true false": 98,
//   arr: [4, 5, true],
//   obj: {
//     a: 10,
//     b: 52,
//   },
// };
// k.obj
// // let d = prompt("get 45 ?");
// console.log(k["obj"]["a"]);
// console.log(k.obj.a);

let p = {
  45: "value",
  hello: 4.45656,
  "true false": 98,
  arr: [4, 5, true],
  obj: {
    a: 10,
    b: 52,
  },
};

// spread operator (...) --> RHS
// rest operator (...) --> LHS
// let s = p; // pass by refrence
// s.hello = 100;
// let s = p;
// let k = { ...p }; // shallow copy
// let d = { ...k, ...p };
// console.log(d);

// let crr = [1, 2, 3, [7, 8]];
// let k = [...arr, ...crr];
// // k[3][1] = 10;

// console.log(crr);
// console.log(k);
// let obj = {
//   a: 10,
//   b: 20,
//   c: {
//     e: 2,
//     f: 7,
//   },
// };

// let {
//   a: a1,
//   b: b1,
//   c: { e: e1, f: f1 },
// } = obj;
// // let d = obj.a;
// // let da = obj.b;
// // let dc = obj.c;
// console.log(a1, b1, e1, f1);

// let obj = {
//   a: 10,
//   b: 20,
//   c: {
//     e: 2,
//     f: 7,
//   },
// };

// let {a,b,...d} = obj; 
// console.log(a);
// console.log(b);
// console.log(d);

// let crr = [1,2,3,4,5,6];
// let [a,b, , ,...c] = crr;
// console.log(a,b,c); 
