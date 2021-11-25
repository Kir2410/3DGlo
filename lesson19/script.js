const date = new Date();
const dateNewYear = new Date('01 January 2022').getTime();
const dateNow = new Date().getTime();
const day = date.getDay();

const week = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

const getDays = () => {
    let timeRemainig = (dateNewYear - dateNow) / 1000;
    let days = Math.floor(((timeRemainig / 60) / 60) / 24);
    return days;
}
const getTimeOfDay = () => {
    let timeOfDay = '';
    if (date.getHours() >= 0 && date.getHours() <= 5) {
        timeOfDay = 'Доброй ночи!';
    } else {
        if (date.getHours() >= 6 && date.getHours() <= 11) {
            timeOfDay = 'Доброе утро!';
        } else {
            if (date.getHours() >= 12 && date.getHours() <= 17) {
                timeOfDay = 'Добрый день!';
            } else {
                if (date.getHours() >= 18 && date.getHours() <= 23) {
                    timeOfDay = 'Добрый вечер!';
                }
            }
        }
    }
    return timeOfDay;
}


console.log(`${getTimeOfDay()}
Сегодня: ${week[day]}
Текущее время: ${date.toLocaleTimeString('en')}
До нового года осталось ${getDays()} дней`);