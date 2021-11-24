const timer = (deadLine) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemainig = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemainig = (dateStop - dateNow) / 1000;
        let hours = Math.floor(((timeRemainig / 60) / 60) % 24);
        let minutes = Math.floor((timeRemainig / 60) % 60);
        let seconds = Math.floor(timeRemainig % 60);

        return {
            timeRemainig,
            hours,
            minutes,
            seconds
        }
    };

    const updateClock = () => {
        let getTime = getTimeRemainig();
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
        console.log("test");

        if (getTime.timeRemainig <= 1) {
            clearInterval(timeCounter);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    }

    let timeCounter = setInterval(updateClock, 1000);
};

export default timer;