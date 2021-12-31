document.write('<style>.container{width:50%;height:auto;margin:0 auto;display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap}.control__select-checkbox-group{width:100%;flex:0 1 100%;display:flex;flex-direction:row;flex-wrap:wrap;padding:0 0 20px 0}.title_select-checkbox{width:100%;display:block;flex:0 1 100%;text-align:center;font-size:45px}.button__group{flex:0 1 30%;display:flex;align-items:center;justify-content:center}.btn__standby-mode{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px;margin:0 5px 0 0}.btn__paused{width:90px;display:flex;align-items:center;justify-content:center;padding:17px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.block_select{flex:0 1 30%;display:flex;align-items:center;justify-content:center}.onOff_traffic-light{width:90px;height:45px;display:flex;align-items:center;justify-content:center;font-size:20px;border:2px solid #a9a9a9;color:#2f4f4f;border-radius:5px}.block_checkbox{flex:0 1 30%;display:flex;align-items:center;justify-content:center;font-size:20px}.traffic_light{width:100px;height:270px;background-color:#000;border:2px solid grey;border-radius:15px;box-shadow:5px 5px 5px 2px #080818;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 74px 0 0}.light_red{width:80px;height:80px;border:1px solid grey;border-radius:50%}.light_yellow{width:80px;height:80px;border:1px solid grey;border-radius:50%}.light_green{width:80px;height:80px;border:1px solid grey;border-radius:50%}.traffic-light__control{flex:0 1 70%;display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px solid teal;border-radius:15px;background-color:#f5e4f5;padding:10px;margin:20px}.controle__title{text-align:center}.control__input-time{display:flex;align-items:center;justify-content:center}.control-lifht__input-button-group{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:4%;align-items:center;justify-content:center;padding:10px}.red-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-red{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-red span{color:red;padding:0 0 0 10px}.yellow-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-yellow{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-yellow span{color:#ff0;padding:0 0 0 10px}.green-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-green{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-green span{color:green;padding:0 0 0 10px}.grey{background-color:grey;color:#313030}.green-time,.input-time,.red-time,.yellow-time{width:50px;border:3px solid #adff2f;border-radius:5px;margin:0 5px 0 5px;text-align:center;font-weight:900}.blockGreenNumber,.blockRedNumber,.blockYellowNumber{width:100%;display:flex;align-items:center;justify-content:center}</style>')
document.write('<style>@keyframes _red{0%{background-color:red}40%{background-color:red}40%{background-color:grey}100%{background-color:grey}}@keyframes _yellow{0%{background-color:grey}20%{background-color:#ff0}40%{background-color:grey}80%{background-color:#ff0}100%{background-color:grey}}@keyframes _green{0%{background-color:grey}20%{background-color:grey}40%{background-color:green}60%{background-color:grey}62.5%{background-color:green}65%{background-color:grey}67.5%{background-color:green}70%{background-color:grey}72.5%{background-color:green}75%{background-color:grey}77.5%{background-color:green}80%{background-color:grey}100%{background-color:grey}}@keyframes _redStandby{0%{background-color:grey}100%{background-color:grey}}@keyframes _yellowStandby{0%{background-color:grey}5%{background-color:#ff0}10%{background-color:grey}15%{background-color:#ff0}20%{background-color:grey}25%{background-color:#ff0}30%{background-color:grey}35%{background-color:#ff0}40%{background-color:grey}45%{background-color:#ff0}50%{background-color:grey}55%{background-color:#ff0}60%{background-color:grey}65%{background-color:#ff0}70%{background-color:grey}75%{background-color:#ff0}80%{background-color:grey}85%{background-color:#ff0}90%{background-color:grey}95%{background-color:#ff0}100%{background-color:grey}}@keyframes _greenStandby{0%{background-color:grey}100%{background-color:grey}}</style>');
const red = document.querySelector('[data-red]');
const yellow = document.querySelector('[data-yellow]');
const green = document.querySelector('[data-green]');

const redTime = document.querySelector('[data-time-red]');
const yellowTime = document.querySelector('[data-time-yellow]');
const greenTime = document.querySelector('[data-time-green]');
const inputTime = document.querySelector('.input-time');

const redButton = document.querySelector('.btn__onOff-red');
const yellowButton = document.querySelector('.btn__onOff-yellow');
const greenButton = document.querySelector('.btn__onOff-green');

redTime.setAttribute('max', '8');
yellowTime.setAttribute('max', '8');
greenTime.setAttribute('max', '8');

let RED_K = 1;
let YELLOW_K = 1;
let GREEN_K = 1;

inputTime.value = 12;
let lengthWork;
let lengthWorkRED, lengthWorkYELLOW, lengthWorkGREEN;
let lengthWorkREDold, lengthWorkYELLOWold, lengthWorkGREENold;
let oldValue = 0;

let lengthWorkRed, lengthWorkYellow, lengthWorkGreen;
let arrElements = [];
let inputWork;
let standbyControl = false;

let paused = '';
if (localStorage.getItem("trafficLight")) {
   arrElements = JSON.parse(localStorage.getItem("trafficLight"));
   lengthWorkRed = arrElements[0],
      lengthWorkYellow = arrElements[1],
      lengthWorkGreen = arrElements[2];
   inputTime.value = arrElements[3];
} else {
   lengthWork = Number(inputTime.value);
   lengthWorkRed = lengthWork / 3;
   lengthWorkYellow = lengthWork / 3;
   lengthWorkGreen = lengthWork / 3;

}
let oldValueRed = lengthWork / 4;
let oldValueYellow = lengthWork / 4;
let oldValueGreen = lengthWork / 4;


function animationAddTrafficLight() {
   lengthWorkRED = lengthWorkRed * RED_K;
   lengthWorkYELLOW = lengthWorkYellow * YELLOW_K;
   lengthWorkGREEN = lengthWorkGreen * GREEN_K;

   redTime.value = lengthWorkRED;
   yellowTime.value = lengthWorkYELLOW;
   greenTime.value = lengthWorkGREEN;


   if (standbyControl) {
      red.style.animation = `_redStandby ${lengthWorkRed}s step-end infinite`;
      yellow.style.animation = `_yellowStandby ${lengthWorkYellow}s step-end infinite`;
      green.style.animation = `_greenStandby ${lengthWorkGreen}s step-end infinite`;

   } else if (paused === 'paused' && !standbyControl) {
      red.style.animation = `_red ${lengthWorkRed}s ${paused} step-end infinite`;
      yellow.style.animation = `_yellow ${lengthWorkYellow}s ${paused} step-end infinite`;
      green.style.animation = `_green ${lengthWorkGreen}s ${paused} step-end infinite`;

   } else {
      red.style.animation = `_red ${lengthWorkRed}s step-end infinite`;
      yellow.style.animation = `_yellow ${lengthWorkYellow}s step-end infinite`;
      green.style.animation = `_green ${lengthWorkGreen}s step-end infinite`;

   }


}
animationAddTrafficLight();


redTime.addEventListener('input', (event) => RecalculationOfOdds(event));
yellowTime.addEventListener('input', (event) => RecalculationOfOdds(event));
greenTime.addEventListener('input', (event) => RecalculationOfOdds(event));
function validation(event) {
   const val = +(event.target.value.replace(/[^\d]/g, ''));
   event.target.value = val;
   return val;
}
inputTime.addEventListener('input', (event) => {

   lengthWork = +(event.target.value.replace(/[^\d]/g, ''));
   if (oldValue < lengthWork) {
      lengthWorkRed += 2,
         lengthWorkYellow += 2,
         lengthWorkGreen += 2;
   } else {
      lengthWorkRed -= 2,
         lengthWorkYellow -= 2,
         lengthWorkGreen -= 2;
   }
   redTime.setAttribute('max', `${lengthWork - 2}`);
   yellowTime.setAttribute('max', `${lengthWork - 2}`);
   greenTime.setAttribute('max', `${lengthWork - 2}`);
   oldValue = event.target.value;
   animationAddTrafficLight();

});

function RecalculationOfOdds(event) {
   if (event.target.getAttribute('class') === 'red-time') {
      if (oldValueRed < validation(event) && lengthWorkYellow % 2 === 0 && lengthWorkGreen % 2 === 0) {
         if (lengthWorkYellow === 2) {
            lengthWorkRed = validation(event);
            lengthWorkYellow;
            lengthWorkGreen -= 2;
         } else if (lengthWorkGreen === 2) {
            lengthWorkRed = validation(event);
            lengthWorkYellow -= 2;
            lengthWorkGreen;
         } else {
            lengthWorkRed = validation(event);
            lengthWorkYellow -= 1;
            lengthWorkGreen -= 1;
         }
         console.log(oldValueRed);
      } else if (oldValueRed < validation(event) && lengthWorkYellow % 2 === 1 && lengthWorkGreen % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow -= 1;
         lengthWorkGreen -= 1;
         console.log(oldValueRed);
      }
      else if (oldValueRed < validation(event) && lengthWorkYellow % 2 === 1 && lengthWorkGreen % 2 === 0 && lengthWorkRed % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow += 1;
         lengthWorkGreen;
         console.log(oldValueRed);
      } else if (oldValueRed < validation(event) && lengthWorkYellow % 2 === 0 && lengthWorkGreen % 2 === 1 && lengthWorkRed % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow;
         lengthWorkGreen += 1;
         console.log(oldValueRed);
      }
      else if (oldValueRed > validation(event) && lengthWorkYellow % 2 === 0 && lengthWorkGreen % 2 === 0) {
         if (lengthWorkYellow === 2) {
            lengthWorkRed = validation(event);
            lengthWorkYellow;
            lengthWorkGreen += 2;
         } else if (lengthWorkGreen === 2) {
            lengthWorkRed = validation(event);
            lengthWorkYellow += 2;
            lengthWorkGreen;
         } else {
            lengthWorkRed = validation(event);
            lengthWorkYellow += 1;
            lengthWorkGreen += 1;
         }
         console.log(oldValueRed);
      } else if (oldValueRed > validation(event) && lengthWorkYellow % 2 === 1 && lengthWorkGreen % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow += 1;
         lengthWorkGreen += 1;

      }
      else if (oldValueRed > validation(event) && lengthWorkYellow % 2 === 1 && lengthWorkGreen % 2 === 0 && lengthWorkRed % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow += 1;
         lengthWorkGreen;
         console.log(oldValueRed);
      } else if (oldValueRed > validation(event) && lengthWorkYellow % 2 === 0 && lengthWorkGreen % 2 === 1 && lengthWorkRed % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow;
         lengthWorkGreen += 1;
         console.log(oldValueRed);
      }
      else if (oldValueRed > validation(event) && lengthWorkYellow === 2 && lengthWorkGreen !== 2) {
         lengthWorkRed = validation(event);
         lengthWorkYellow += 2;
         lengthWorkGreen;
         console.log(oldValueRed);
      }
      else if (oldValueRed > validation(event) && lengthWorkYellow === 2 && lengthWorkGreen === 2) {
         lengthWorkRed = validation(event);
         lengthWorkYellow += 1;
         lengthWorkGreen += 1;
         console.log(oldValueRed);
      } else if (oldValueRed >= validation(event) && lengthWorkYellow !== 2 && lengthWorkGreen % 2 === 1) {
         lengthWorkRed = validation(event);
         lengthWorkYellow -= 2;
         lengthWorkGreen;
         console.log(oldValueRed);
      }
      else {
         lengthWorkRed = validation(event);
         lengthWorkYellow;
         lengthWorkGreen;
         console.log(oldValueRed);
      }
      oldValueRed = event.target.value;
      arrElements.push(lengthWorkRed);
      arrElements.push(lengthWorkYellow);
      arrElements.push(lengthWorkGreen);
      arrElements.push(lengthWork);
      animationAddTrafficLight();
   } else if (event.target.getAttribute('class') === 'yellow-time') {
      if (oldValueYellow < validation(event) && lengthWorkRed % 2 === 0 && lengthWorkGreen % 2 === 0) {
         if (lengthWorkRed === 2) {
            lengthWorkYellow = validation(event);
            lengthWorkRed;
            lengthWorkGreen -= 2;
         } else if (lengthWorkGreen === 2) {
            lengthWorkYellow = validation(event);
            lengthWorkRed -= 2;
            lengthWorkGreen;
         } else {
            lengthWorkYellow = validation(event);
            lengthWorkRed -= 1;
            lengthWorkGreen -= 1;
         }

         console.log(oldValueYellow);
      } else if (oldValueYellow < validation(event) && lengthWorkRed % 2 === 1 && lengthWorkGreen % 2 === 1) {
         lengthWorkYellow = validation(event);
         lengthWorkRed -= 1;
         lengthWorkGreen -= 1;
         console.log(oldValueYellow);
      }
      else if (oldValueYellow < validation(event) && lengthWorkRed % 2 === 0 && lengthWorkGreen % 2 === 1 && lengthWorkYellow % 2 === 1) {
         lengthWorkYellow = validation(event);
         lengthWorkRed;
         lengthWorkGreen -= 1;
         console.log(oldValueYellow);
      } else if (oldValueYellow < validation(event) && lengthWorkRed % 2 === 1 && lengthWorkGreen % 2 === 0 && lengthWorkYellow % 2 === 1) {
         lengthWorkYellow = validation(event);
         lengthWorkRed += 1;
         lengthWorkGreen;
         console.log(oldValueYellow);
      }
      else if (oldValueYellow > validation(event) && lengthWorkRed % 2 === 0 && lengthWorkGreen % 2 === 0) {
         if (lengthWorkRed === 2) {
            lengthWorkYellow = validation(event);
            lengthWorkRed;
            lengthWorkGreen += 2;
         } else if (lengthWorkGreen === 2) {
            lengthWorkYellow = validation(event);
            lengthWorkRed += 2;
            lengthWorkGreen;
         } else {
            lengthWorkYellow = validation(event);
            lengthWorkRed += 1;
            lengthWorkGreen += 1;
         }
         console.log(oldValueYellow);
      } else if (oldValueYellow > validation(event) && lengthWorkRed % 2 === 1 && lengthWorkGreen % 2 === 1) {
         lengthWorkYellow = validation(event);
         lengthWorkRed += 1;
         lengthWorkGreen += 1;
         console.log(oldValueYellow);
      }
      else if (oldValueYellow > validation(event) && lengthWorkRed % 2 === 0 && lengthWorkGreen % 2 === 1 && lengthWorkYellow % 2 === 1) {
         lengthWorkYellow = validation(event);
         lengthWorkRed;
         lengthWorkGreen += 1;
         console.log(oldValueYellow);
      } else if (oldValueYellow > validation(event) && lengthWorkRed % 2 === 1 && lengthWorkGreen % 2 === 0 && lengthWorkYellow % 2 === 1) {
         lengthWorkYellow = validation(event);
         lengthWorkRed += 1;
         lengthWorkGreen;
         console.log(oldValueYellow);
      }
      else if (oldValueYellow > validation(event) && lengthWorkRed === 2 && lengthWorkGreen !== 2) {
         lengthWorkYellow = validation(event);
         lengthWorkRed += 2;
         lengthWorkGreen;
         console.log(oldValueYellow);
      } else if (oldValueYellow > validation(event) && lengthWorkRed === 2 && lengthWorkGreen === 2) {
         lengthWorkYellow = validation(event);
         lengthWorkRed += 1;
         lengthWorkGreen += 1;
         console.log(oldValueYellow);
      }
      else {
         lengthWorkYellow = validation(event);
         lengthWorkRed;
         lengthWorkGreen;
         console.log(oldValueYellow);
      }
      oldValueYellow = event.target.value;
      arrElements.push(lengthWorkRed);
      arrElements.push(lengthWorkYellow);
      arrElements.push(lengthWorkGreen);
      arrElements.push(lengthWork);
      animationAddTrafficLight();
   } else if (event.target.getAttribute('class') === 'green-time') {
      if (oldValueGreen < validation(event) && lengthWorkRed % 2 === 0 && lengthWorkYellow % 2 === 0) {
         if (lengthWorkRed === 2) {
            lengthWorkGreen = validation(event)
            lengthWorkRed;
            lengthWorkYellow -= 2;
         } else if (lengthWorkYellow === 2) {
            lengthWorkGreen = validation(event)
            lengthWorkRed -= 2;
            lengthWorkYellow;
         } else {
            lengthWorkGreen = validation(event)
            lengthWorkRed -= 1;
            lengthWorkYellow -= 1;
         }
         console.log(oldValueGreen);
      } else if (oldValueGreen < validation(event) && lengthWorkRed % 2 === 1 && lengthWorkYellow % 2 === 1) {
         lengthWorkGreen = validation(event)
         lengthWorkRed -= 1;
         lengthWorkYellow -= 1;
         console.log(oldValueGreen);
      }
      else if (oldValueGreen < validation(event) && lengthWorkRed % 2 === 0 && lengthWorkYellow % 2 === 1 && lengthWorkGreen % 2 === 1) {
         lengthWorkGreen = validation(event)
         lengthWorkRed;
         lengthWorkYellow += 1;
         console.log(oldValueGreen);
      } else if (oldValueGreen < validation(event) && lengthWorkRed % 2 === 1 && lengthWorkYellow % 2 === 0 && lengthWorkGreen % 2 === 1) {
         lengthWorkGreen = validation(event)
         lengthWorkRed += 1;
         lengthWorkYellow;
         console.log(oldValueGreen);
      }
      else if (oldValueGreen > validation(event) && lengthWorkRed % 2 === 0 && lengthWorkYellow % 2 === 0) {
         if (lengthWorkRed === 2) {
            lengthWorkGreen = validation(event);
            lengthWorkRed;
            lengthWorkYellow += 2;
         } else if (lengthWorkYellow === 2) {
            lengthWorkGreen = validation(event);
            lengthWorkRed += 2;
            lengthWorkYellow;
         } else {
            lengthWorkGreen = validation(event);
            lengthWorkRed += 1;
            lengthWorkYellow += 1;
         }
         console.log(oldValueGreen);
      } else if (oldValueGreen > validation(event) && lengthWorkRed % 2 === 1 && lengthWorkYellow % 2 === 1) {
         lengthWorkGreen = validation(event);
         lengthWorkRed += 1;
         lengthWorkYellow += 1;
         console.log(oldValueGreen);
      }
      else if (oldValueGreen > validation(event) && lengthWorkRed % 2 === 0 && lengthWorkYellow % 2 === 1 && lengthWorkGreen % 2 === 1) {
         lengthWorkGreen = validation(event);
         lengthWorkRed;
         lengthWorkYellow += 1;
         console.log(oldValueGreen);
      } else if (oldValueGreen > validation(event) && lengthWorkRed % 2 === 1 && lengthWorkYellow % 2 === 0 && lengthWorkGreen % 2 === 1) {
         lengthWorkGreen = validation(event);
         lengthWorkRed += 1;
         lengthWorkYellow;
         console.log(oldValueGreen);
      }
      else if (oldValueGreen > validation(event) && lengthWorkRed === 2 && lengthWorkYellow !== 2) {
         lengthWorkGreen = validation(event);
         lengthWorkRed += 2;
         lengthWorkYellow;
         console.log(oldValueGreen);
      } else if (oldValueGreen > validation(event) && lengthWorkRed === 2 && lengthWorkYellow === 2) {
         lengthWorkGreen = validation(event);
         lengthWorkRed += 1;
         lengthWorkYellow += 1;
         console.log(oldValueGreen);
      }
      else {
         lengthWorkGreen = validation(event);
         lengthWorkRed;
         lengthWorkYellow;
         console.log(oldValueGreen);
      }

      oldValueGreen = event.target.value;
      arrElements.push(lengthWorkRed);
      arrElements.push(lengthWorkYellow);
      arrElements.push(lengthWorkGreen);
      arrElements.push(lengthWork);
      //console.log(lengthWork);
      animationAddTrafficLight();
   } else {
      animationAddTrafficLight();
   }
   if (arrElements.length > 4) {
      arrElements.splice(0, 4);
   }
   localStorage.setItem("trafficLight", JSON.stringify(arrElements));
   //console.log(arrElements);

}

document.querySelector('.btn__standby-mode').addEventListener('click', (e) => {
   console.log(e.currentTarget);
   if (e.currentTarget.getAttribute('class') === 'btn__standby-mode' && standbyControl) {
      standbyControl = false;
      document.querySelector('.btn__paused').disabled = false;
      document.querySelector('.btn__onOff-red').disabled = false;
      document.querySelector('.btn__onOff-green').disabled = false;
      document.querySelector('.red-time').disabled = false;
      document.querySelector('.green-time').disabled = false;
      document.querySelector('.input-time').disabled = false;
      document.querySelectorAll('.grey').forEach(e => { e.classList.remove('grey') });
      animationAddTrafficLight();

   } else {
      standbyControl = true;
      document.querySelector('.btn__paused').disabled = true;
      document.querySelector('.btn__onOff-red').disabled = true;
      document.querySelector('.btn__onOff-green').disabled = true;
      document.querySelector('.red-time').disabled = true;
      document.querySelector('.green-time').disabled = true;
      document.querySelector('.yellow-time').disabled = true;
      document.querySelectorAll('[disabled]').forEach(e => { e.classList.add('grey'); })
      animationAddTrafficLight();
   }
})
document.querySelector('.btn__paused').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__paused' && paused === '') {
      paused = 'paused';
      animationAddTrafficLight();
   } else {
      paused = '';
      animationAddTrafficLight();
   }
})
document.querySelector('.onOff_traffic-light').addEventListener('change', (e) => {
   if (e.target.value === 'off') {
      standbyControl = true;
      animationAddTrafficLight();
      document.querySelectorAll('.control-lifht__input-button-group > button').forEach(e => {
         e.disabled = true;
      });
      document.querySelectorAll('[type="number"]').forEach(e => {
         e.disabled = true;
      });
      document.querySelector('.btn__standby-mode').disabled = true;
      document.querySelector('.btn__paused').disabled = true;
      document.querySelectorAll('[disabled]').forEach(e => { e.classList.add('grey'); })
   } else {
      standbyControl = false;
      document.querySelectorAll('.control-lifht__input-button-group > button').forEach(e => {
         e.disabled = false;
      });
      document.querySelectorAll('[type="number"]').forEach(e => {
         e.disabled = false;
      });
      document.querySelector('.btn__standby-mode').disabled = false;
      document.querySelector('.btn__paused').disabled = false;
      document.querySelectorAll('.grey').forEach(e => { e.classList.remove('grey') });
      animationAddTrafficLight();
   }
});
let clickElemRed = true;
document.querySelector('.btn__onOff-red').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__onOff-red' && clickElemRed) {
      document.querySelector('.light_red').style.animation = '';
      clickElemRed = false;
   } else {
      red.style.animation = `_red ${lengthWorkRed}s step-end infinite`;
      clickElemRed = true;
   }
})
let clickElemYellow = true;
document.querySelector('.btn__onOff-yellow').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__onOff-yellow' && clickElemYellow) {
      document.querySelector('.light_yellow').style.animation = '';
      clickElemYellow = false;
   } else {
      yellow.style.animation = `_yellow ${lengthWorkYellow}s step-end infinite`;
      clickElemYellow = true;
   }
})
let clickElemGreen = true;
document.querySelector('.btn__onOff-green').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__onOff-green' && clickElemGreen) {
      document.querySelector('.light_green').style.animation = '';
      clickElemGreen = false;
   } else {
      green.style.animation = `_green ${lengthWorkGreen}s step-end infinite`;
      clickElemGreen = true;
   }
})
document.querySelector('.hidden_traffic-light').addEventListener('change', (e) => {
   const controlHidden = e.target.checked;
   document.querySelector('.traffic-light__control').style.display = controlHidden ? 'none' : 'flex';
})
