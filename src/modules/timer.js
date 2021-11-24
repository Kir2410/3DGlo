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
        if (getTime.hours < 10) {
            getTime.hours = '0' + getTime.hours;
        };
        if (getTime.minutes < 10) {
            getTime.minutes = '0' + getTime.minutes;
        };
        if (getTime.seconds < 10) {
            getTime.seconds = '0' + getTime.seconds;
        };
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