/* 
  struct js
  var 
  dt
    NUMBER
    BOOL
    STRING
    UNDEFINED
    NULL
    NaN 

  cmts
  opr
    ARTHIe...
      + - * / % **
    rel..
      < > <= >= != == === !==
    log...
      && || !
    assign...
      = += -= /=   binop=
    bit....
      & | ^ << >> ~
    ter....
    inc/dec

  conditional st..
  looping st...
  arrays
  functions


*/

// let r;
// let p = 5;
// var t;
// var d = 10;

// const PIE = 3.14;

// let t = 5; // 4
// let a = t++; // 5
// let b = --t; // 7
// let c = b++; // 5
// let d = --t; // 4
// let e = b++; // 6
// console.log(t + a + b + c + d + e);

// let a = 10;
// let b = 15;

// let g = 20 >> 10;

// console.log(g);
// /*
// 20 >> 1 = 10
// 10 << 1  = 5
// 5 >> 1 = 2
// 80 << 1 = 160
// 160 << = 320

//  000....0001010
// 000000101000000

// */

// let p = 10 !== 5;
// console.log(p);

// if
// if else
// else if
// nested if
// switch
// let p = -2;
// if (p < 0) {
// 	console.log("-");
// 	if (p > 0) {
// 		console.log("+");
// 	} else {
// 		console.log(0);
// 	}
// }
// console.log(78);

// switch ("108") {
// 	case 10:
// 		console.log("helo 1");
// 		break;
//   default:
//     console.log(25);
//     break;
//   case "10":
//     console.log("helo 2");
//     break;
//   case true:
//     console.log("helo");
//     break;
//   case 1.45:
//     console.log("helo");
//     break;
//   case false:
//     console.log("helo");
//     break;
// }

// loops
// entry check loop
// check condi exe block
// for while
// exit check
// exe block check condi
// do while
//                8
//                5     7
//    1           2     4
// for (var i = 0; i < 2; i++) {
// 	console.log("helo" + i);
// 	// 3 6
// }
// console.log(i);
// let i = 1;
// while (i <= 5) {
// 	console.log(45 + i);
// 	i = i + 2;
// }

// let i = 1;
// do {
// 	console.log(45 + i);
// 	i = i + 2;
// } while (i <= 5);

// console.log(i);

/*
  functions
   named funs
    anynomous funs
    arrow funs 
*/

// function abc(to dec var)
// function abc()
// {
// 	console.log("hello");
// 	let r = Math.floor(2.34);
// 	console.log(r);
// }

// function abc(a, b) {
// 	return a + b;
// }

// let pop = function (a, b) {
// 	return a + b;
// };

// let r = () => 25;
// let r = () => 25 * 25;
// let sq = (a) => a * a;
// let sq = (a) =>  a * a;

// let sq = (a) => {
// 	return a * a;
// };

// let d = sq(5);
// console.log(d);
//

// let arr = [];
// let arr = [1, 2.656, true, "helo", undefined, NaN, null];
// // console.log(arr.length);
// // console.log(arr[0]);
// // console.log(arr[6]);
// // console.log(arr[4]);
// arr.push(78);
// arr.pop();
// arr.pop();
// arr.pop();
// arr.shift();
// arr.unshift(25);
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// JSON

// let obj = {
// 	flag: "in",
// 	a1: 45,
// 	a2: 6.45,
// 	"helo world": true,
// 	pop: {
// 		a: 10,
// 		b: 20,
// 		c: false,
// 		e: [7, 8, 9],
// 	},
// };
// alert("qwertyuiogfzXCchgsvch");
// let r = prompt("what u want?");
// console.log(obj[r]);

// // console.log(obj.flag);
// // console.log(obj["flag"]);

// // console.log(obj.pop.e);
// // console.log(obj["helo world"]);
// // console.log(obj["pop"]["e"]);
//  Event Listeners
let h1ele1 = document.querySelector(".h10");
let h1ele2 = document.querySelector("#h11");
let h1ele3 = document.querySelector(".h12");
let submit = document.querySelector("button");

// let h1s = document.querySelectorAll("h1");
let h1clicked = 0;
let h1col = "black";
// h1ele1.addEventListener("what event ?", "what should i do after the event?");
h1ele1.addEventListener("click", function (event) {
	console.log("clicked");
	h1clicked++;
	if (h1col == "black") {
		h1ele1.style.color = "red";
		h1col = "red";
	} else {
		h1ele1.style.color = "black";
		h1col = "black";
	}
});
let h1col2 = "black";
// h1ele1.addEventListener("what event ?", "what should i do after the event?");
h1ele2.addEventListener("click", function (event) {
	h1clicked++;
	console.log("clicked");
	if (h1col2 == "black") {
		h1ele2.style.color = "red";
		h1col2 = "red";
	} else {
		h1ele2.style.color = "black";
		h1col2 = "black";
	}
});
let h1col3 = "black";
// h1ele1.addEventListener("what event ?", "what should i do after the event?");
h1ele3.addEventListener("click", function (event) {
	h1clicked++;
	console.log("clicked");
	if (h1col3 == "black") {
		h1ele3.style.color = "red";
		h1col3 = "red";
	} else {
		h1ele3.style.color = "black";
		h1col3 = "black";
	}
});

submit.addEventListener("click", function (e) {
	console.log(h1clicked);
});
