import Timer from './timer.js';
import { elements } from './elements.js';
import { sounds } from './sounds.js';
import events from './events.js';
const {
    minutesDisplay,
    secondsDisplay,
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

events({
    timer,
    sound,
    addFive,
    subFive,
});
