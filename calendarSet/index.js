function drawCalendar() {
   const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
   ];
   const container = document.querySelector('.container');
   const newData = new Date();
   const today = newData.getDate();
   const currentMonth = +prompt('please enter a month 0 - 11', '11');
   const currentYear = +prompt('please enter a year', '2021');
   if (!currentMonth && !currentYear) {
      window.location.reload();
   }
   console.log(newData);
   console.log(today);
   console.log(currentMonth);
   console.log(currentYear);
   const table = document.createElement('table');
   const captionCalendar = document.createElement('caption');
   captionCalendar.innerHTML = `<div>Month: ${monthNames[currentMonth]}  Year : ${currentYear} </div>`;
   table.appendChild(captionCalendar);
   table.style.border = '1px solid black';
   container.appendChild(table);
   const week = ["Mon", "Tus", "Wen", "Thu", "Fri", "Sat", "Sun"];
   const trHead = document.createElement('tr');
   table.appendChild(trHead);
   let thWeek = "";
   for (let i = 0; i < week.length; i++) {
      thWeek += `<th>${week[i]}</th>`;
   }
   trHead.innerHTML = thWeek;
   let day = new Date(currentYear, currentMonth, 1);
   console.log(day.getMonth());
   const last = new Date(currentYear, currentMonth + 1, 1);
   let nextDay = day.getDay() - 1;
   let lastDay = last.getDate();
   console.log(lastDay);
   console.log(lastDay);
   console.log(nextDay);
   console.log(day);
   let s = 0;
   while (day.getMonth() == currentMonth) {
      let tr = document.createElement('tr');
      let i = 0;
      while (i < 7) {
         let td = document.createElement('td');
         td.style.padding = '3px';
         if (s == 0) {
            if (i < nextDay) {
               td.innerHTML = '';
               td.style.padding = '7px';
            } else {
               td.innerHTML = day.getDate();
               day.setDate(day.getDate() + 1);
            }
         } else {
            if (day.getDate() == lastDay) {
               day.setDate(day.getDate() + 1);

               break;
            }
            td.innerHTML = day.getDate();
            day.setDate(day.getDate() + 1);

         }
         tr.appendChild(td);
         i++;
      }
      s++;
      table.appendChild(tr);
   }


   let newTd = document.querySelectorAll('td');
   console.log(newTd);
   for (let j = 0; j < newTd.length; j++) {
      const element = newTd[j];
      if (element.innerText !== '') {
         element.style.border = '1px solid black';
         element.style.backgroundColor = 'aqua';
         element.style.textAlign = 'center';
      }
   }
}
let btnCal = document.querySelector('.btn');
btnCal.addEventListener('click', drawCalendar);