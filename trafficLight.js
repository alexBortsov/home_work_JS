document.write('<style>.container{width:50%;height:auto;margin:0 auto;display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap}.control__select-checkbox-group{width:100%;flex:0 1 100%;display:flex;flex-direction:row;flex-wrap:wrap;padding:0 0 20px 0}.title_select-checkbox{width:100%;display:block;flex:0 1 100%;text-align:center;font-size:45px}.button__group{flex:0 1 30%;display:flex;align-items:center;justify-content:center}.btn__standby-mode{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px;margin:0 5px 0 0}.btn__paused{width:90px;display:flex;align-items:center;justify-content:center;padding:17px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.block_select{flex:0 1 30%;display:flex;align-items:center;justify-content:center}.onOff_traffic-light{width:90px;height:45px;display:flex;align-items:center;justify-content:center;font-size:20px;border:2px solid #a9a9a9;color:#2f4f4f;border-radius:5px}.block_checkbox{flex:0 1 30%;display:flex;align-items:center;justify-content:center;font-size:20px}.traffic_light{width:100px;height:270px;background-color:#000;border:2px solid grey;border-radius:15px;box-shadow:5px 5px 5px 2px #080818;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 74px 0 0}.light_red{width:80px;height:80px;border:1px solid grey;border-radius:50%}.light_yellow{width:80px;height:80px;border:1px solid grey;border-radius:50%}.light_green{width:80px;height:80px;border:1px solid grey;border-radius:50%}.control-lifht__input-button-group{width:100%;flex:0 1 50%;display:grid;grid-template-columns:repeat(2,1fr);gap:4%;align-items:center;justify-content:center;border:2px solid teal;padding:10px;border-radius:15px;background-color:#f5e4f5}.red-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-red{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-red span{color:red;padding:0 0 0 10px}.yellow-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-yellow{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-yellow span{color:#ff0;padding:0 0 0 10px}.green-time{width:40px;border:2px solid grey;color:red;border-radius:5px}.btn__onOff-green{width:90px;display:flex;align-items:center;justify-content:center;padding:10px 55px;border:2px solid #a9a9a9;background-color:#2f4f4f;color:#fffaf0;border-radius:5px}.btn__onOff-green span{color:green;padding:0 0 0 10px}.grey{background-color:grey;color:#313030}</style>')
document.write('<style>@keyframes _red{0%{background-color:red}40%{background-color:red}40%{background-color:grey}100%{background-color:grey}}@keyframes _yellow{0%{background-color:grey}20%{background-color:#ff0}40%{background-color:grey}80%{background-color:#ff0}100%{background-color:grey}}@keyframes _green{0%{background-color:grey}20%{background-color:grey}40%{background-color:green}60%{background-color:grey}62.5%{background-color:green}65%{background-color:grey}67.5%{background-color:green}70%{background-color:grey}72.5%{background-color:green}75%{background-color:grey}77.5%{background-color:green}80%{background-color:grey}100%{background-color:grey}}@keyframes _redStandby{0%{background-color:grey}100%{background-color:grey}}@keyframes _yellowStandby{0%{background-color:grey}5%{background-color:#ff0}10%{background-color:grey}15%{background-color:#ff0}20%{background-color:grey}25%{background-color:#ff0}30%{background-color:grey}35%{background-color:#ff0}40%{background-color:grey}45%{background-color:#ff0}50%{background-color:grey}55%{background-color:#ff0}60%{background-color:grey}65%{background-color:#ff0}70%{background-color:grey}75%{background-color:#ff0}80%{background-color:grey}85%{background-color:#ff0}90%{background-color:grey}95%{background-color:#ff0}100%{background-color:grey}}@keyframes _greenStandby{0%{background-color:grey}100%{background-color:grey}}</style>');
const red = document.querySelector('[data-red]');
const yellow = document.querySelector('[data-yellow]');
const green = document.querySelector('[data-green]');

const redTime = document.querySelector('[data-time-red]');
const yellowTime = document.querySelector('[data-time-yellow]');
const greenTime = document.querySelector('[data-time-green]');

const redButton = document.querySelector('.btn__onOff-red');
const yellowButton = document.querySelector('.btn__onOff-yellow');
const greenButton = document.querySelector('.btn__onOff-green');

const RED_K = 0.4;
const YELLOW_K = 0.4;
const GREEN_K = 0.4;

let lengthWork = 10;
let lengthWorkRED, lengthWorkYELLOW, lengthWorkGREEN;
let standbyControl = false;
let arrElements = [];
let paused = 'paused';
let trafficLightElements = document.querySelectorAll('.traffic_light > *');
for (let j = 0; j < trafficLightElements.length; j++) {
   const element = trafficLightElements[j].getAttribute('class').match(/_[a-z].*?\S+/g).join('');
   arrElements.push(element);
}

function animationAddTrafficLight() {
   lengthWorkRED = lengthWork * RED_K;
   lengthWorkYELLOW = lengthWork * YELLOW_K;
   lengthWorkGREEN = lengthWork * GREEN_K;

   redTime.value = lengthWorkRED;
   yellowTime.value = lengthWorkYELLOW;
   greenTime.value = lengthWorkGREEN;
   if (standbyControl) {
      for (let i = 0; i < arrElements.length; i++) {
         document.querySelectorAll('.lightColor')[i].style.animation = `${arrElements[i] + 'Standby'} ${lengthWork}s step-end infinite`;
      }
   } else {
      for (let i = 0; i < arrElements.length; i++) {
         document.querySelectorAll('.lightColor')[i].style.animation = `${arrElements[i]} ${lengthWork}s step-end infinite`;
      }
   }

}
animationAddTrafficLight();

redTime.addEventListener('input', (event) => {
   lengthWork = validation(event) / RED_K;
   animationAddTrafficLight();

});

yellowTime.addEventListener('input', (event) => {
   lengthWork = validation(event) / YELLOW_K;
   animationAddTrafficLight();
});

greenTime.addEventListener('input', (event) => {
   lengthWork = validation(event) / GREEN_K;
   animationAddTrafficLight();
});

function validation(event) {
   const val = +(event.target.value.replace(/[^\d]/g, ''));
   event.target.value = val;
   return val;
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
      document.querySelectorAll('.grey').forEach(e =>{e.classList.remove('grey')});
      for (let i = 0; i < arrElements.length; i++) {
         document.querySelectorAll('.lightColor')[i].style.animation = `${arrElements[i]} ${lengthWork}s step-end infinite`;
      }
   } else {
      standbyControl = true;
      document.querySelector('.btn__paused').disabled = true;
      document.querySelector('.btn__onOff-red').disabled = true;
      document.querySelector('.btn__onOff-green').disabled = true;
      document.querySelector('.red-time').disabled = true;
      document.querySelector('.green-time').disabled = true;
      document.querySelectorAll('[disabled]').forEach(e =>{ e.classList.add('grey');})
      for (let i = 0; i < arrElements.length; i++) {
         document.querySelectorAll('.lightColor')[i].style.animation = `${arrElements[i] + 'Standby'} ${lengthWork}s step-end infinite`;
      }
   }
})
document.querySelector('.btn__paused').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__paused' && paused === 'paused') {

      console.log('1');
      for (let i = 0; i < arrElements.length; i++) {
         document.querySelectorAll('.lightColor')[i].style.animation = `${arrElements[i]} ${lengthWork}s ${paused} step-end infinite`;
      }
      paused = '';
   } else {
      console.log('2');
      for (let i = 0; i < arrElements.length; i++) {
         document.querySelectorAll('.lightColor')[i].style.animation = `${arrElements[i]} ${lengthWork}s ${paused} step-end infinite`;
      }
      paused = 'paused';
   }
})
document.querySelector('.onOff_traffic-light').addEventListener('change', (e) => {
   if (e.target.value === 'off') {
      document.querySelectorAll('.lightColor').forEach((e, index) => {
         e.style.animation = `${arrElements[index] + 'Standby'} ${lengthWork}s step-end infinite`;

      })
      document.querySelectorAll('.control-lifht__input-button-group > button').forEach(e => {
         e.disabled = true;
      });
      document.querySelectorAll('[type="number"]').forEach(e => {
         e.disabled = true;
      });
      document.querySelector('.btn__standby-mode').disabled = true;
      document.querySelector('.btn__paused').disabled = true;
      document.querySelectorAll('[disabled]').forEach(e =>{ e.classList.add('grey');})
   } else {
      
      document.querySelectorAll('.control-lifht__input-button-group > button').forEach(e => {
         e.disabled = false;
      });
      document.querySelectorAll('[type="number"]').forEach(e => {
         e.disabled = false;
      });
      document.querySelector('.btn__standby-mode').disabled = false;
      document.querySelector('.btn__paused').disabled = false;
      document.querySelectorAll('.grey').forEach(e =>{e.classList.remove('grey')});

      animationAddTrafficLight();

   }
});
let clickElemRed = true;
document.querySelector('.btn__onOff-red').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__onOff-red' && clickElemRed) {
      document.querySelector('.light_red').style.animation = '';
      clickElemRed = false;
   } else {
      document.querySelector('.light_red').style.animation = `${arrElements[0]} ${lengthWork}s step-end infinite`;
      clickElemRed = true;
   }
})
let clickElemYellow = true;
document.querySelector('.btn__onOff-yellow').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__onOff-yellow' && clickElemYellow) {
      document.querySelector('.light_yellow').style.animation = '';
      clickElemYellow = false;
   } else {
      document.querySelector('.light_yellow').style.animation = `${arrElements[1]} ${lengthWork}s step-end infinite`;
      clickElemYellow = true;
   }
})
let clickElemGreen = true;
document.querySelector('.btn__onOff-green').addEventListener('click', (e) => {
   if (e.currentTarget.getAttribute('class') === 'btn__onOff-green' && clickElemGreen) {
      document.querySelector('.light_green').style.animation = '';
      clickElemGreen = false;
   } else {
      document.querySelector('.light_green').style.animation = `${arrElements[2]} ${lengthWork}s step-end infinite`;
      clickElemGreen = true;
   }
})
document.querySelector('.hidden_traffic-light').addEventListener('change', (e) => {
   const controlHidden = e.target.checked;
   document.querySelector('.control-lifht__input-button-group').style.display = controlHidden ? 'none' : 'grid';
})

