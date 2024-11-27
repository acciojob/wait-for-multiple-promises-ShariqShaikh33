let startTime = Date.now();

let tablebody = document.getElementById('output');

let row1 = tablebody.insertRow(-1);
row1.setAttribute("id","Loading");
let cell1 = row1.insertCell(0);
cell1.setAttribute("colspan","2");
cell1.innerHTML = "Loading...";

let row2 = tablebody.insertRow(-1);
		let cell3 = row2.insertCell(0);
		cell3.innerHTML = "Promise 2";
		let cell4 = row2.insertCell(1);

let row3 = tablebody.insertRow(-1);
		let cell5 = row3.insertCell(0);
		cell5.innerHTML = "Promise 3";
		let cell6 = row3.insertCell(1);


let Promise1 = new Promise((resolve) => {
	let time1 = Math.random()*(3000-1000)+1000;
	setTimeout(()=>{
		cell1.innerHTML="Promise 1";
		cell1.setAttribute("colspan","0");
		let cell2 = row1.insertCell(1);
		cell2.innerHTML = (time1/1000).toFixed(1);
		resolve(time1);
	},time1);
	
});

let Promise2 = new Promise((resolve) => {
	let time2 = Math.random()*(3000-1000)+1000;
	setTimeout(()=>{
		cell4.innerHTML = (time2/1000).toFixed(1);
		resolve(time2);
	},time2);
});

let Promise3 = new Promise((resolve) => {
	let time3 = Math.random()*(3000-1000)+1000;
	setTimeout(()=>{
		cell6.innerHTML = (time3/1000).toFixed(1);
		resolve(time3);
	},time3);
});

Promise.all([Promise1, Promise2, Promise3]).then(res => {
	let endTime = Date.now();
	let TotalTime = (endTime - startTime) / 1000;


	let row4 = tablebody.insertRow(-1);
	let cell7 = row4.insertCell(0);
	cell7.innerHTML = "Total";
	let cell8 = row4.insertCell(1);
	cell8.innerHTML =TotalTime.toFixed(3);
})

