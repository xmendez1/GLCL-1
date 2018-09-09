

let setMonth = () => {
	let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let date = new Date();
	let monthNumber = date.getMonth();
	let month = document.getElementById('month');
	let monthSetter = (monthNumber) => {
		month.innerHTML = allMonths[monthNumber];
	};
	monthSetter(monthNumber);
	let clickLeft = document.getElementById('clickLeft')
	clickLeft.addEventListener('click', ()=>{
		if (monthNumber > 0){
 		monthNumber = monthNumber - 1;
 		monthSetter(monthNumber);
 		}

	});
	let clickRight = document.getElementById('clickRight')
	clickRight.addEventListener('click', ()=>{
		if (monthNumber < 11){
 		monthNumber = monthNumber + 1;
 		monthSetter(monthNumber);
 		}

	});

}



document.addEventListener('DOMContentLoaded', setMonth, false);