import { elements } from "./elements.js";
const {
    buttonStart,
    buttonStop,
    addFiveMinutes,
    subFiveMinutes,
    floresta,
    chuva,
    cafeteria,
    lareira,
    time,
    light,
    dark,
    buttonRectFloresta,
    buttonCircleFloresta,
    buttonRectChuva,
    buttonCircleChuva,
    buttonRectCafeteria,
    buttonCircleCafeteria,
    buttonRectLareira,
    buttonCircleLareira,
    cardChuva,
    cardCafeteria,
    cardLareira,
    cardFloresta
} = elements;
export default function ({
    timer,
    sound,
    addFive,
    subFive,
    darkFill,
    lightFill,
    darkButton,
    lightButton,
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
            cardFloresta.style.fill = '#fff';
            buttonRectFloresta.style.fill = '#fff';
            buttonCircleFloresta.style.fill = '#fff';
        }
        else {
            sound.floresta.pause();
            cardFloresta.style.fill = '#C4C4CC';
            buttonRectFloresta.style.fill = '#fff';
            buttonCircleFloresta.style.fill = '#fff';
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
            cardChuva.style.fill = '#fff';
            buttonRectChuva.style.fill = '#fff';
            buttonCircleChuva.style.fill = '#fff';
        }
        else {
            sound.chuva.pause();
            cardChuva.style.fill = '#C4C4CC';
            buttonRectChuva.style.fill = '#fff';
            buttonCircleChuva.style.fill = '#fff';
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
            cardCafeteria.style.fill = '#fff';
            buttonRectCafeteria.style.fill = '#fff';
            buttonCircleCafeteria.style.fill = '#fff';
        }
        else {
            sound.cafeteria.pause();
            cardCafeteria.style.fill = '#C4C4CC';
            buttonRectCafeteria.style.fill = '#fff';
            buttonCircleCafeteria.style.fill = '#fff';
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
            cardLareira.style.fill = '#fff';
            buttonRectLareira.style.fill = '#fff';
            buttonCircleLareira.style.fill = '#fff';
        }
        else {
            sound.lareira.pause();
            cardLareira.style.fill = '#C4C4CC';
            buttonRectLareira.style.fill = '#fff';
            buttonCircleLareira.style.fill = '#fff';
        }
        

    })

    light.addEventListener('click', () => {
        document.body.style.backgroundColor = '#121214'
        light.classList.toggle('hide')
        dark.classList.toggle('hide')
        time.style.color = '#fff'
        floresta.classList.add('cardDark')
        chuva.classList.add('cardDark')
        cafeteria.classList.add('cardDark')
        lareira.classList.add('cardDark')
        buttonCircleFloresta.style.fill = '#fff'
        buttonRectFloresta.style.fill = '#fff'
        buttonCircleChuva.style.fill = '#fff'
        buttonRectChuva.style.fill = '#fff'
        buttonCircleCafeteria.style.fill = '#fff'
        buttonRectCafeteria.style.fill = '#fff'
        buttonCircleLareira.style.fill = '#fff'
        buttonRectLareira.style.fill = '#fff'
        lightFill()
        lightButton()


    })
    dark.addEventListener('click', () => {
        document.body.style.backgroundColor = '#fff'
        light.classList.toggle('hide')
        dark.classList.toggle('hide')
        time.style.color = '#323238'
        floresta.classList.add('card')
        chuva.classList.add('card')
        chuva.classList.remove('cardDark')
        floresta.classList.remove('cardDark')
        cafeteria.classList.remove('cardDark')
        lareira.classList.remove('cardDark')
        buttonCircleFloresta.style.fill = '#323238'
        buttonRectFloresta.style.fill = '#323238'
        buttonCircleChuva.style.fill = '#323238'
        buttonRectChuva.style.fill = '#323238'
        buttonCircleCafeteria.style.fill = '#323238'
        buttonRectCafeteria.style.fill = '#323238'
        buttonCircleLareira.style.fill = '#323238'
        buttonRectLareira.style.fill = '#323238'
        darkFill()
        darkButton()

    })

}