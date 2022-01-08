document.write('<style>.container{width:50%;height:auto;margin:0 auto;display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap}.control__select-checkbox-group{width:100%;flex:0 1 100%;display:flex;flex-direction:row;flex-wrap:wrap;padding:0 0 20px 0}.title_select-checkbox{width:100%;display:block;flex:0 1 100%;text-align:center;font-size:45px}.button__group{flex:0 1 30%;display:flex;align-items:center;justify-content:center}.btn__standby-mode{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px;margin:0 5px 0 0}.btn__paused{width:90px;display:flex;align-items:center;justify-content:center;padding:17px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.block_select{flex:0 1 30%;display:flex;align-items:center;justify-content:center}.onOff_traffic-light{width:90px;height:45px;display:flex;align-items:center;justify-content:center;font-size:20px;border:2px solid #a9a9a9;color:#2f4f4f;border-radius:5px}.block_checkbox{flex:0 1 30%;display:flex;align-items:center;justify-content:center;font-size:20px}.traffic_light{width:100px;height:270px;background-color:#000;border:2px solid grey;border-radius:15px;box-shadow:5px 5px 5px 2px #080818;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 74px 0 0}.light_red{width:80px;height:80px;border:1px solid grey;border-radius:50%}.light_yellow{width:80px;height:80px;border:1px solid grey;border-radius:50%}.light_green{width:80px;height:80px;border:1px solid grey;border-radius:50%}.traffic-light__control{flex:0 1 70%;display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px solid teal;border-radius:15px;background-color:#f5e4f5;padding:10px;margin:20px}.controle__title{text-align:center}.control__input-time{display:flex;align-items:center;justify-content:center}.control-lifht__input-button-group{width:100%;display:grid;grid-template-columns:repeat(2,1fr);gap:4%;align-items:center;justify-content:center;padding:10px}.red-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-red{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-red span{color:red;padding:0 0 0 10px}.yellow-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-yellow{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-yellow span{color:#ff0;padding:0 0 0 10px}.green-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-green{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-green span{color:green;padding:0 0 0 10px}.grey{background-color:grey;color:#313030}.green-time,.input-time,.red-time,.yellow-time{width:50px;border:3px solid #adff2f;border-radius:5px;margin:0 5px 0 5px;text-align:center;font-weight:900}.blockGreenNumber,.blockRedNumber,.blockYellowNumber{width:100%;display:flex;align-items:center;justify-content:center}.buttonGreen_max,.buttonGreen_min,.buttonLeng_max,.buttonLeng_min,.buttonRed_max,.buttonRed_min,.buttonYellow_max,.buttonYellow_min{display:flex;align-items:center;justify-content:center;width:15px;height:15px;background-color:#8a2be2;color:#f0f8ff;border-radius:5px}.green-time::-webkit-inner-spin-button,.green-time::-webkit-outer-spin-button,.input-time::-webkit-inner-spin-button,.input-time::-webkit-outer-spin-button,.red-time::-webkit-inner-spin-button,.red-time::-webkit-outer-spin-button,.yellow-time::-webkit-inner-spin-button,.yellow-time::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}</style>')
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


const buttonLengMax = document.querySelector('.buttonLeng_max');
const buttonLengMin = document.querySelector('.buttonLeng_min');
const buttonRedMax = document.querySelector('.buttonRed_max');
const buttonRedMin = document.querySelector('.buttonRed_min');
const buttonYellowMax = document.querySelector('.buttonYellow_max');
const buttonYellowMin = document.querySelector('.buttonYellow_min');
const buttonGreenMax = document.querySelector('.buttonGreen_max');
const buttonGreenMin = document.querySelector('.buttonGreen_min');

inputTime.setAttribute('pattern', /[^\d]/g);
redTime.setAttribute('max', '8');
yellowTime.setAttribute('max', '8');
greenTime.setAttribute('max', '8');
redTime.setAttribute('pattern', /[^\d]/g);
yellowTime.setAttribute('pattern', /[^\d]/g);
greenTime.setAttribute('pattern', /[^\d]/g);


let RED_K = 1;
let YELLOW_K = 1;
let GREEN_K = 1;


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
   lengthWork = +inputTime.value;
} else {
   inputTime.value = 12;
   lengthWork = +inputTime.value;
   lengthWorkRed = lengthWork / 3;
   lengthWorkYellow = lengthWork / 3;
   lengthWorkGreen = lengthWork / 3;

}
document.querySelectorAll('[type="number"]').forEach(e => {
   e.disabled = true;
});

function setInputValue() {
   lengthWorkRED = lengthWorkRed * RED_K;
   lengthWorkYELLOW = lengthWorkYellow * YELLOW_K;
   lengthWorkGREEN = lengthWorkGreen * GREEN_K;
   redTime.value = lengthWorkRED;
   yellowTime.value = lengthWorkYELLOW;
   greenTime.value = lengthWorkGREEN;
   createAnimation();

}
setInputValue();
function animationAddTrafficLight() {
   if (standbyControl) {
      red.style.animation = `_redStandby ${lengthWork}s step-end infinite`;
      yellow.style.animation = `_yellowStandby ${lengthWork}s step-end infinite`;
      green.style.animation = `_greenStandby ${lengthWork}s step-end infinite`;

   } else if (paused === 'paused' && !standbyControl) {
      red.style.animation = `_red ${lengthWork}s ${paused} step-end infinite`;
      yellow.style.animation = `_yellow ${lengthWork}s ${paused} step-end infinite`;
      green.style.animation = `_green ${lengthWork}s ${paused} step-end infinite`;

   } else {
      red.style.animation = `_red ${lengthWork}s step-end infinite`;
      yellow.style.animation = `_yellow ${lengthWork}s step-end infinite`;
      green.style.animation = `_green ${lengthWork}s step-end infinite`;

   }
}
animationAddTrafficLight();

function createAnimation() {
   let RED = lengthWorkRED * 10;
   let YELLOW = RED;
   let YELLOW_ONE = RED / 2;
   let YELLOW_TWO = RED + YELLOW / 2;
   let GREEN = RED;
   let GREEN_END = YELLOW_TWO;
   if (standbyControl) {
      animation.innerHTML = `<style>
   @keyframes _redStandby{
      0%{
          background-color: grey;    
      }
      100%{
          background-color: grey;
      }
      }
      @keyframes _yellowStandby{
          0%{
              background-color: grey;
          }
          5%{
              background-color: yellow;
          }
          10%{
              background-color: grey;
          }
          15%{
              background-color: yellow;
          }
          20%{
              background-color: grey;
          }
          25%{
              background-color: yellow;
          }
          30%{
              background-color: grey;
          }
          35%{
              background-color: yellow;
          }
          40%{
              background-color: grey;
          }
          45%{
              background-color: yellow;
          }
          50%{
              background-color: grey;
          }
          55%{
              background-color: yellow;
          }
          60%{
              background-color: grey;
          }
          65%{
              background-color: yellow;
          }
          70%{
              background-color: grey;
          }
          75%{
              background-color: yellow;
          }
          80%{
              background-color: grey;
          }
          85%{
              background-color: yellow;
          }
          90%{
              background-color: grey;
          }
          95%{
              background-color: yellow;
          }
          100%{
              background-color: grey;
          }
      }
      @keyframes _greenStandby{
          0%{
              background-color: grey;    
          }
          100%{
              background-color: grey;
          }
      }
   </style>`
   } else {
      animation.innerHTML = `<style>
   @keyframes _red{
      0%{
          background-color: red;
      }
      ${RED}%{
          background-color: grey;
      }

      100%{
          background-color: grey;
      }

      }

      @keyframes _yellow{
      0%{
          background-color: grey;
      }

      ${YELLOW_ONE}%{
          background-color: yellow;
      }
      ${YELLOW}%{
          background-color: grey;
      }
      ${YELLOW_TWO}%{
          background-color: yellow;
      }
      95%{
         background-color: yellow;
     }  
      100%{
          background-color: yellow;
      }  

      }
      @keyframes _green{
      0%{
          background-color: grey;
      }
      20%{
          background-color: grey;
      }
      ${GREEN}%{
          background-color: green;
      }
      ${GREEN_END}%{
          background-color: grey;
      }

      100%{
          background-color: grey;
      }

   </style>`
   }
}
createAnimation();
buttonRedMax.addEventListener('click', () => {
   if (lengthWorkRed % 2 === 1) {
      lengthWorkRed;
      lengthWorkYellow;
      lengthWorkGreen;
   } else {
      if (lengthWorkRed === (inputTime.value - 4)) {
         lengthWorkRed;
         lengthWorkYellow;
         lengthWorkGreen;
      } else if (lengthWorkYellow === 2) {
         lengthWorkRed += 2;
         lengthWorkYellow;
         lengthWorkGreen -= 2;
      } else if (lengthWorkGreen === 2) {
         lengthWorkRed += 2;
         lengthWorkYellow -= 2;
         lengthWorkGreen;
      } else {
         lengthWorkRed += 2;
         lengthWorkYellow--;
         lengthWorkGreen--;
      }
   }
   saveLocalStorage();
   setInputValue();
   createAnimation()

})
buttonRedMin.addEventListener('click', () => {
   if (lengthWorkRed % 2 === 1) {
      lengthWorkRed;
      lengthWorkYellow;
      lengthWorkGreen;
   } else {
      if (lengthWorkRed === 2) {
         lengthWorkRed;
         lengthWorkYellow;
         lengthWorkGreen;
      } else {
         lengthWorkRed -= 2;
         lengthWorkYellow++;
         lengthWorkGreen++;
      }
   }
   saveLocalStorage();
   setInputValue();
   createAnimation()
})
buttonYellowMax.addEventListener('click', () => {
   if (lengthWorkYellow % 2 === 1) {
      lengthWorkYellow;
      lengthWorkGreen;
      lengthWorkRed;
   } else {
      if (lengthWorkYellow === (inputTime.value - 4)) {
         lengthWorkYellow;
         lengthWorkRed;
         lengthWorkGreen;
      } else if (lengthWorkGreen === 2) {
         lengthWorkYellow += 2;
         lengthWorkRed -= 2;
         lengthWorkGreen;
      } else if (lengthWorkRed === 2) {
         lengthWorkYellow += 2;
         lengthWorkRed;
         lengthWorkGreen -= 2;
      } else {
         lengthWorkYellow += 2;
         lengthWorkRed--;
         lengthWorkGreen--;
      }
   }
   saveLocalStorage();
   setInputValue();
})
buttonYellowMin.addEventListener('click', () => {
   if (lengthWorkYellow % 2 === 1) {
      lengthWorkGreen;
      lengthWorkYellow;
      lengthWorkRed;
   } else {
      if (lengthWorkYellow === 2) {
         lengthWorkYellow;
         lengthWorkRed;
         lengthWorkGreen;
      } else {
         lengthWorkYellow -= 2;
         lengthWorkRed++;
         lengthWorkGreen++;
      }
   }
   saveLocalStorage();
   setInputValue();
})
buttonGreenMax.addEventListener('click', () => {
   if (lengthWorkGreen % 2 === 1) {
      lengthWorkGreen;
      lengthWorkYellow;
      lengthWorkRed;
   } else {
      if (lengthWorkGreen === (inputTime.value - 4)) {
         lengthWorkGreen;
         lengthWorkYellow;
         lengthWorkRed;
      } else if (lengthWorkYellow === 2) {
         lengthWorkGreen += 2;
         lengthWorkYellow;
         lengthWorkRed -= 2;
      } else if (lengthWorkRed === 2) {
         lengthWorkGreen += 2;
         lengthWorkYellow -= 2;
         lengthWorkRed;
      } else {
         lengthWorkGreen += 2;
         lengthWorkYellow--;
         lengthWorkRed--;
      }
   }
   saveLocalStorage();
   setInputValue();
})
buttonGreenMin.addEventListener('click', () => {
   if (lengthWorkGreen % 2 === 1) {
      lengthWorkGreen;
      lengthWorkYellow;
      lengthWorkRed;
   } else {
      if (lengthWorkGreen === 2) {
         lengthWorkGreen;
         lengthWorkYellow;
         lengthWorkRed;
      } else {
         lengthWorkGreen -= 2;
         lengthWorkYellow++;
         lengthWorkRed++;
      }
   }

   saveLocalStorage();
   setInputValue();
})
function saveLocalStorage() {
   arrElements.push(lengthWorkRed);
   arrElements.push(lengthWorkYellow);
   arrElements.push(lengthWorkGreen);
   arrElements.push(+inputTime.value);
   if (arrElements.length > 4) {
      arrElements.splice(0, 4);
   }
   localStorage.setItem("trafficLight", JSON.stringify(arrElements));
   return arrElements;
}

buttonLengMax.addEventListener('click', () => {
   lengthWork += 6;
   lengthWorkRed += 2;
   lengthWorkYellow += 2;
   lengthWorkGreen += 2;
   inputTime.value = lengthWork;
   saveLocalStorage();
   animationAddTrafficLight();
})
buttonLengMin.addEventListener('click', () => {
   if (lengthWork > 12) {
      lengthWork -= 6,
         lengthWorkRed = lengthWork / 3,
         lengthWorkYellow = lengthWork / 3,
         lengthWorkGreen = lengthWork / 3;
      inputTime.value = lengthWork;
   } else {
      lengthWorkRed,
         lengthWorkYellow,
         lengthWorkGreen;
   }
   saveLocalStorage();
   animationAddTrafficLight();
})

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
      buttonLengMax.disabled = false;
      buttonLengMin.disabled = false;
      buttonRedMax.disabled = false;
      buttonRedMin.disabled = false;
      buttonYellowMax.disabled = false;
      buttonYellowMin.disabled = false;
      buttonGreenMax.disabled = false;
      buttonGreenMin.disabled = false;
      document.querySelectorAll('.grey').forEach(e => { e.classList.remove('grey') });
      createAnimation();
      animationAddTrafficLight();

   } else {
      standbyControl = true;
      document.querySelector('.btn__paused').disabled = true;
      document.querySelector('.btn__onOff-red').disabled = true;
      document.querySelector('.btn__onOff-green').disabled = true;
      document.querySelector('.red-time').disabled = true;
      document.querySelector('.green-time').disabled = true;
      document.querySelector('.yellow-time').disabled = true;
      buttonLengMax.disabled = true;
      buttonLengMin.disabled = true;
      buttonRedMax.disabled = true;
      buttonRedMin.disabled = true;
      buttonYellowMax.disabled = true;
      buttonYellowMin.disabled = true;
      buttonGreenMax.disabled = true;
      buttonGreenMin.disabled = true;
      document.querySelectorAll('[disabled]').forEach(e => { e.classList.add('grey'); })
      createAnimation();
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
      createAnimation();
      animationAddTrafficLight();
      document.querySelectorAll('.control-lifht__input-button-group > button').forEach(e => {
         e.disabled = true;
      });
      document.querySelectorAll('[type="number"]').forEach(e => {
         e.disabled = true;
      });
      document.querySelector('.btn__standby-mode').disabled = true;
      document.querySelector('.btn__paused').disabled = true;
      buttonLengMax.disabled = true;
      buttonLengMin.disabled = true;
      buttonRedMax.disabled = true;
      buttonRedMin.disabled = true;
      buttonYellowMax.disabled = true;
      buttonYellowMin.disabled = true;
      buttonGreenMax.disabled = true;
      buttonGreenMin.disabled = true;
      document.querySelectorAll('[disabled]').forEach(e => { e.classList.add('grey'); });

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
      buttonLengMax.disabled = false;
      buttonLengMin.disabled = false;
      buttonRedMax.disabled = false;
      buttonRedMin.disabled = false;
      buttonYellowMax.disabled = false;
      buttonYellowMin.disabled = false;
      buttonGreenMax.disabled = false;
      buttonGreenMin.disabled = false;
      document.querySelectorAll('.grey').forEach(e => { e.classList.remove('grey') });
      createAnimation();
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
