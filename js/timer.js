export default function ({
    minutesDisplay,
    secondsDisplay
}) {

    let timeout
    let minutes = Number(minutesDisplay.textContent);

    function countDown() {
        timeout = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent);
            let seconds = Number(secondsDisplay.textContent);
            updateDisplay(minutes, 0);
            if (minutes <= 0 && seconds <= 0) {
                clearTimeout(timeout);
                updateDisplay();
                return;
            }

            if (seconds <= 0) {
                minutes--;
                seconds = 60;
            }
            updateDisplay(minutes, String(seconds - 1));

            countDown();
        }, 1000);

    }
    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes;
        seconds = seconds === undefined ? 0 : seconds;
        minutesDisplay.textContent = newMinutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }
    function stopTime() {
        clearTimeout(timeout);
        updateDisplay();
    }
    return{
        countDown,
        updateDisplay,
        stopTime
    }
}