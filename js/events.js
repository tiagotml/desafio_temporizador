import { elements } from "./elements.js";
const {
    buttonStart,
    buttonStop,
    addFiveMinutes,
    subFiveMinutes,
    floresta,
    chuva,
    cafeteria,
    lareira
} = elements;
export default function ({
    timer,
    sound,
    addFive,
    subFive,
}) {

    buttonStart.addEventListener('click', () => {
        timer.countDown();
    })
    buttonStop.addEventListener('click', () => {
        timer.stopTime();
    })
    addFiveMinutes.addEventListener('click', () => {
        addFive();
    })
    subFiveMinutes.addEventListener('click', () => {
        subFive();
    })
    floresta.addEventListener('click', () => {
        floresta.classList.toggle('selectedCard');
        floresta.classList.toggle('card');
        chuva.classList.remove('selectedCard');
        chuva.classList.add('card');
        sound.chuva.pause();
        cafeteria.classList.remove('selectedCard');
        cafeteria.classList.add('card');
        sound.cafeteria.pause();
        lareira.classList.remove('selectedCard');
        lareira.classList.add('card');
        sound.lareira.pause();
        if (floresta.classList.contains('selectedCard')) {
            sound.floresta.play();
        }
        else {
            sound.floresta.pause();
        }
    })

    chuva.addEventListener('click', () => {
        chuva.classList.toggle('selectedCard');
        chuva.classList.toggle('card');
        floresta.classList.remove('selectedCard');
        floresta.classList.add('card');
        sound.floresta.pause();
        cafeteria.classList.remove('selectedCard');
        cafeteria.classList.add('card');
        sound.cafeteria.pause();
        lareira.classList.remove('selectedCard');
        lareira.classList.add('card');
        sound.lareira.pause();
        if (chuva.classList.contains('selectedCard')) {
            sound.chuva.play();
        }
        else {
            sound.chuva.pause();
        }
    })
    cafeteria.addEventListener('click', () => {
        cafeteria.classList.toggle('selectedCard');
        cafeteria.classList.toggle('card');
        floresta.classList.remove('selectedCard');
        floresta.classList.add('card');
        sound.floresta.pause();
        chuva.classList.remove('selectedCard');
        chuva.classList.add('card');
        sound.chuva.pause();
        lareira.classList.remove('selectedCard');
        lareira.classList.add('card');
        sound.lareira.pause();
        if (cafeteria.classList.contains('selectedCard')) {
            sound.cafeteria.play();
        }
        else {
            sound.cafeteria.pause();
        }
    })
    lareira.addEventListener('click', () => {
        lareira.classList.toggle('selectedCard');
        lareira.classList.toggle('card');
        floresta.classList.remove('selectedCard');
        floresta.classList.add('card');
        sound.floresta.pause();
        chuva.classList.remove('selectedCard');
        chuva.classList.add('card');
        sound.chuva.pause();
        cafeteria.classList.remove('selectedCard');
        cafeteria.classList.add('card');
        sound.cafeteria.pause();
        if (lareira.classList.contains('selectedCard')) {
            sound.lareira.play();
        }
        else {
            sound.lareira.pause();
        }
    })
}