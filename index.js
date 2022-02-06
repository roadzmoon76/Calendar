//변수
const date = new Date();
let n = 0;
let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const td = document.querySelectorAll('td');
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let existTd = [];
const thisDay = document.querySelector('.this-day');
const thisDate = document.querySelector('.this-date');
const thisMonthYear = document.querySelector('.this-month-year');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');


//초기화면 구성
thisDay.textContent = days[date.getDay()];
thisDate.textContent = `${date.getDate()}`;
thisMonthYear.textContent = `${months[date.getMonth()]} ${date.getFullYear()}`;

for (let i = 0; i < lastDay.getDate(); i++) {
    td[firstDay.getDay() + i].textContent = i + 1;
    existTd.push(firstDay.getDay() + i);
}


//이벤트에 연결하는 함수
function nextMonth() {
    n++
    existTd = [];
    firstDay = new Date(date.getFullYear(), date.getMonth() + n, 1);
    lastDay = new Date(date.getFullYear(), date.getMonth() + n + 1, 0);
    thisDay.textContent = days[firstDay.getDay()];
    thisDate.textContent = `${firstDay.getDate()}`;
    thisMonthYear.textContent = `${months[firstDay.getMonth()]} ${firstDay.getFullYear()}`;

    for (let i = 0; i <= 5; i++) {
        td[i].textContent = '';
    }
    for (let i = 28; i <= 36; i++) {
        td[i].textContent = '';
    }

    for (let i = 0; i < lastDay.getDate(); i++) {
        td[firstDay.getDay() + i].textContent = i + 1;
        existTd.push(firstDay.getDay() + i);
    }


    for (let i = 0; i <= 5; i++) {
        td[i].removeEventListener('click', changeInfo);
    }

    for (let i = 28; i <= 36; i++) {
        td[i].removeEventListener('click', changeInfo);
    }

    for (let i = existTd[0]; i < existTd[0] + existTd.length; i++) {
        td[i].addEventListener('click', changeInfo)
    }
}

function previousMonth() {
    n--
    existTd = [];
    firstDay = new Date(date.getFullYear(), date.getMonth() + n, 1);
    lastDay = new Date(date.getFullYear(), date.getMonth() + n + 1, 0);
    thisDay.textContent = days[firstDay.getDay()];
    thisDate.textContent = `${firstDay.getDate()}`;
    thisMonthYear.textContent = `${months[firstDay.getMonth()]} ${firstDay.getFullYear()}`;

    for (let i = 0; i <= 5; i++) {
        td[i].textContent = '';
    }
    for (let i = 28; i <= 36; i++) {
        td[i].textContent = '';
    }

    for (let i = 0; i < lastDay.getDate(); i++) {
        td[firstDay.getDay() + i].textContent = i + 1;
        existTd.push(firstDay.getDay() + i);
    }

    for (let i = 0; i <= 5; i++) {
        td[i].removeEventListener('click', changeInfo);
    }

    for (let i = 28; i <= 36; i++) {
        td[i].removeEventListener('click', changeInfo);
    }

    for (let i = existTd[0]; i < existTd[0] + existTd.length; i++) {
        td[i].addEventListener('click', changeInfo)
    }
}

function changeInfo(e) {
    thisDay.textContent = days[e.target.cellIndex];
    thisDate.textContent = e.srcElement.innerText;
}

//이벤트
rightButton.addEventListener('click', nextMonth);
leftButton.addEventListener('click', previousMonth);

for (let i = existTd[0]; i < existTd[0] + existTd.length; i++) {
    td[i].addEventListener('click', changeInfo);
}