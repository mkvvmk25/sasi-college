"use strict";
let h1clsEle = document.querySelector(".h1cls");
let h1idEle = document.querySelector("#h1id");
h1clsEle.addEventListener("click", function (event) {
  //   console.log("clicked");
  h1clsEle.style.color = "red";
  h1idEle.style.color = "black";
});
h1idEle.addEventListener("click", function (event) {
  //   console.log("clicked");
  h1idEle.style.color = "red";
  h1clsEle.style.color = "black";
});

setTimeout(function () {
  console.log("hello");
}, 5000);
let i = 0;
// setInterval(function () {
//   console.log("hi", i++);
// }, 1000);
// console.log(h1clsEle);
// console.log(h1idEle);
