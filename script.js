//your JS code here. If required.
let tableBody = document.getElementById("output");

tableBody.innerHTML += "<tr><td id='p1name'>Loading...</td><td id='p1time'>Loading...</td></tr>";
tableBody.innerHTML += "<tr><td id='p2name'>Loading...</td><td id='p2time'>Loading...</td></tr>";
tableBody.innerHTML += "<tr><td id='p3name'>Loading...</td><td id='p3time'>Loading...</td></tr>";

let p1name = getElementById("p1name");
let p2name = getElementById("p2name");
let p3name = getElementById("p3name");

let p1time = getElementById("p1time");
let p2time = getElementById("p2time");
let p3time = getElementById("p3time");

let Promise1 = new Promise((resolve,reject) => {
	setTimeout(resolve, 2000, "promise1");
});

let Promise2 = new Promise((resolve,reject) => {
	setTimeout(resolve, 1000, "promise2");
})

let Promise3 = new Promise((resolve,reject) => {
	setTimeout(resolve, 3000, "promise3");
})

Promise.all([Promise1, Promise2, Promise3]).then((res) => {
	p1name.innerHTML = "Promise1"
})




