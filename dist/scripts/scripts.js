'use strict';

var calendar = function calendar() {

  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };

  //TODO: Create currentTime, currentDay, currentMonth, currentYear variables based on this stack overflow answer 
  //https://stackoverflow.com/a/6002265/5885911 
  // Return today's date and time 
  var currentTime = new Date();

  // returns the month (from 0 to 11) 
  var currentMonth = currentTime.getMonth() + 1;

  // returns the day of the month (from 1 to 31) 
  var currentDay = currentTime.getDate();

  // returns the year (four digits) 
  var currentYear = currentTime.getFullYear();

  //Use const rather than let or var, we use const when a variable doesn't get reassigned or updated overtime. 
  //Since these are functions, we don't expect the functions to change so we can make them constants. 


  //TODO: Create the lastMonth function which takes the arguments, "year", "month", "dayOfWeek" 
  var lastMonth = function lastMonth(year, month, dayOfWeek) {
    var previousMonth = month - 1;
    var daysInPreviousMonth = function daysInPreviousMonth(y, p) {
      var previousMonthArr = [];
      var ld = lastDay(y, p);
      var i = 0;
      while (i < daysOfTheWeek.length) {
        previousMonthArr.push(ld);
        ld--;
        i++;
      }
      return previousMonthArr;
    };
    if (previousMonth < 1) {
      previousMonth = 12;
      return daysInPreviousMonth(year - 1, previousMonth);
    } else {
      return daysInPreviousMonth(year, previousMonth);
    }
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
    var currentDaysInMonth = lastDay(2018, 9);
    var firstDayOfMonth = firstDay(2018, 9);
    //TODO: Create lastMonthArr const which is equal to the lastMonth function which 
    var lastMonthArr = lastMonth(currentYear, currentMonth, firstDayOfMonth);
    var daysInRow = 7;
    var totalRows = 6;
    var currentRows = 0;
    var currentDayOfMonthIndex = 1; //current day of current month (e.g. september) 
    var currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows) 
    var lastDaysIndex = 1;
    //TODO: Create lmaIndex variable which is equal to the firstDayOfMonth-1 
    var lmaIndex = firstDayOfMonth - 1;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        var day = document.createElement('p');

        if (currentCalendarDayIndex < firstDayOfMonth) {
          day.innerHTML = lastMonthArr[lmaIndex];
          // day.innerHTML = lastDaysIndex;
          day.classList.add('grayedOut');
          lmaIndex--;
        } else if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        } else {
          day.innerHTML = lastDaysIndex;
          day.classList.add('grayedOut');
          lastDaysIndex++;
        }

        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
  var calendar = document.getElementById('calendar');
  calendar.addEventListener('arrowClick', function () {
    console.log('arrow clicked!');
  });
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var titleCarouselWrapper = function titleCarouselWrapper() {
  var titleCarousel = document.getElementById('title-carousel');

  var elementBuilder = function elementBuilder(elementType, elementId, appendTo, classes) {
    var el = document.createElement(elementType);
    if (classes) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
    }
    el.id = elementId;
    appendTo.appendChild(el);
  };

  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);

  var title = document.getElementById('title');
  var titleSetter = function titleSetter(newTitle) {
    title.innerHTML = newTitle;
  };

  var titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  var titleIndex = Number(titleCarousel.getAttribute('title-starting-index'));

  titleSetter(titleArr[titleIndex]);

  var arrowClick = function arrowClick(direction) {
    new CustomEvent('arrowClick', {
      bubbles: true,
      detail: { arrowDirection: direction }
    });
  };

  leftArrow.addEventListener('click', function () {
    if (titleIndex > 0) {
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
    }
    leftArrow.dispatchEvent(arrowClick('left'));
  });
  rightArrow.addEventListener('click', function () {
    if (titleIndex < titleArr.length - 1) {
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
    }
    rightArrow.dispatchEvent(arrowClick('right'));
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);