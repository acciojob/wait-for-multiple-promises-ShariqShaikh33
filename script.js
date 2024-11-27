let tablebody = document.getElementById('output');

let row1 = tablebody.insertRow(-1);
row1.classList.add("Loading");

let cell1 = row1.insertCell(0);
cell1.innerHTML = "Loading..."
let cell2 = row1.insertCell(1);
cell2.innerHTML = "Loading...";

let Promise1 = new Promise((resolve) => {
	setTimeout(()=>{
		resolve("Promise1");
	},2000);
});

let Promise2 = new Promise((resolve) => {
	setTimeout(()=>{
		resolve("Promise2");
	},1000);
});

let Promise3 = new Promise((resolve) => {
	setTimeout(()=>{
		resolve("Promise3");
	},3000);
});

Promise.all([Promise1, Promise2, Promise3]).then(res => {
	cell1.innerHTML = "Promise 1";
	cell2.innerHTML = 2;
	
	let row2 = tablebody.insertRow(-1);
	row2.classList.add("Loading");
	let cell3 = row2.insertCell(0);
	cell3.innerHTML = "Promise 2";
	let cell4 = row2.insertCell(1);
	cell4.innerHTML = 1;

	let row3 = tablebody.insertRow(-1);
	row3.classList.add("Loading");
	let cell5 = row3.insertCell(0);
	cell5.innerHTML = "Promise 3";
	let cell6 = row3.insertCell(1);
	cell6.innerHTML = 3;

	let row4 = tablebody.insertRow(-1);
	let cell7 = row4.insertCell(0);
	cell7.innerHTML = "Total";
	let cell8 = row4.insertCell(1);
	cell8.innerHTML = 3.006;
})

