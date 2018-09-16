let calendarHeader = () => {  
	let titleCarousel = document.getElementById('title-carousel')
	let paraOne = document.createElement('p');
		paraOne.className = "arrow fas fa-chevron-left";
		paraOne.id = "left-arrow";
		titleCarousel.appendChild(paraOne);
	let paraTwo = document.createElement('p');
		paraTwo.id = "title";
		titleCarousel.appendChild(paraTwo);
	let paraThree = document.createElement('p');
		paraThree.className = "arrow fas fa-chevron-right";
		paraThree.id = "right-arrow";
		titleCarousel.appendChild(paraThree);
	let title = document.getElementById('title');
	let titleSetter = (newTitle) => { 
	title.innerHTML = newTitle; 
	}; 
	titleSetter('September'); 
	let titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]; 
	let leftArrow = document.getElementById('left-arrow'); 
	let rightArrow = document.getElementById('right-arrow'); 
	let monthIndex = 8;

		leftArrow.addEventListener('click', ()=>{
			if (monthIndex > 0){ 
			monthIndex--;
			titleSetter(titleArr[monthIndex]);
			}
		}); 
		rightArrow.addEventListener('click', ()=>{
			if (monthIndex < titleArr.length-1){ 
			monthIndex++;
			titleSetter(titleArr[monthIndex]);
			}
		}); 
	
}; 

document.addEventListener('DOMContentLoaded', calendarHeader, false);