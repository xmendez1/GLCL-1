'use strict';

var calendar = function calendar() {
  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };
  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var calendarHead = document.getElementById('calendar-head');
  var populateCalendarHead = function populateCalendarHead() {
    for (var i = 0; i < daysOfTheWeek.length; i++) {
      var day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  };

  populateCalendarHead();

  var calendarBody = document.getElementById('calendar-body');
  var populateCalendarBody = function populateCalendarBody() {
    var daysInRow = 7;
    var totalRows = 5;
    // var totalDays = daysInRow * totalRows; 
    var currentRows = 0;
    var currentDaysInMonth = lastDay(2018, 9);
    var firstDayOfMonth = firstDay(2018, 9);
    var currentDayOfMonthIndex = 1;
    var currentCalendarDayIndex = 0;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        var day = document.createElement('p');
        if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }
        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

var calendarHeader = function calendarHeader() {
	var titleCarousel = document.getElementById('title-carousel');
	var paraOne = document.createElement('p');
	paraOne.className = "arrow fas fa-chevron-left";
	paraOne.id = "left-arrow";
	titleCarousel.appendChild(paraOne);
	var paraTwo = document.createElement('p');
	paraTwo.id = "title";
	titleCarousel.appendChild(paraTwo);
	var paraThree = document.createElement('p');
	paraThree.className = "arrow fas fa-chevron-right";
	paraThree.id = "right-arrow";
	titleCarousel.appendChild(paraThree);
	var title = document.getElementById('title');
	var titleSetter = function titleSetter(newTitle) {
		title.innerHTML = newTitle;
	};
	titleSetter('September');
	var titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var leftArrow = document.getElementById('left-arrow');
	var rightArrow = document.getElementById('right-arrow');
	var monthIndex = 8;

	leftArrow.addEventListener('click', function () {
		if (monthIndex > 0) {
			monthIndex--;
			titleSetter(titleArr[monthIndex]);
		}
	});
	rightArrow.addEventListener('click', function () {
		if (monthIndex < titleArr.length - 1) {
			monthIndex++;
			titleSetter(titleArr[monthIndex]);
		}
	});
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);