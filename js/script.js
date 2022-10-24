import Timer from './timer.js';
import { elements } from './elements.js';
import { sounds } from './sounds.js';
import events from './events.js';
const {
    minutesDisplay,
    secondsDisplay,
    cardCafeteria,
    cardChuva,
    cardFloresta,
    cardLareira,
    cardStart,
    cardStop,
    cardAddFiveMinutes,
    cardSubFiveMinutes
} = elements;

const timer = Timer({
    minutesDisplay,
    secondsDisplay
});
const sound = sounds;

function addFive() {
    let minutes = Number(minutesDisplay.textContent);
    minutes += 5;
    timer.updateDisplay(minutes, 0);
}
function subFive() {
    let minutes = Number(minutesDisplay.textContent);
    minutes -= 5;
    timer.updateDisplay(minutes, 0);
}
function darkFill() {
    cardCafeteria.style.fill = '#323238'
    cardLareira.style.fill = '#323238'
    cardFloresta.style.fill = '#323238'
    cardChuva.style.fill = '#323238'
}

function lightFill() {
    cardFloresta.style.fill = '#c4c4cc'
    cardChuva.style.fill = '#c4c4cc'
    cardCafeteria.style.fill = '#c4c4cc'
    cardLareira.style.fill = '#c4c4cc'
}
function darkButton(){
    cardStart.style.fill = '#323238'
    cardStop.style.fill = '#323238'
    cardAddFiveMinutes.style.fill = '#323238'
    cardSubFiveMinutes.style.fill = '#323238'
}
function lightButton(){
    cardStart.style.fill = '#fff'
    cardStop.style.fill = '#fff'
    cardAddFiveMinutes.style.fill = '#fff'
    cardSubFiveMinutes.style.fill = '#fff'
}



events({
    timer,
    sound,
    addFive,
    subFive,
    darkFill,
    lightFill,
    darkButton,
    lightButton,
});
