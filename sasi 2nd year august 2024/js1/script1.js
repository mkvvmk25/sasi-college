// https://restcountries.com/v3.1/alpha/ca

let url = "https://restcountries.com/v3.1/alpha/ca";
let bele = document.querySelector("body");
fetch(url)
	.then(function (full, rej) {
		return full.json();
	})
	.then(function (fu, re) {
		let r = fu[0].flags.png;
		bele.insertAdjacentHTML("beforeend", `<img src="${r}" />`);
	});

let url1 = "https://restcountries.com/v3.1/alpha/in";
fetch(url1)
	.then(function (full, rej) {
		return full.json();
	})
	.then(function (fu, re) {
		let r = fu[0].flags.png;
		bele.insertAdjacentHTML("beforeend", `<img src="${r}" />`);
	});
