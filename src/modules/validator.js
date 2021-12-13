const validator = () => {
    const calculate = document.querySelector('.calc-block');
    const calcItems = calculate.querySelectorAll('input.calc-item');
    const inputText = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputMail = document.querySelectorAll('input[type=email]');
    const inputTel = document.querySelectorAll('input[type=tel]');

    calcItems.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]+/, "");
        })
    });

    inputText.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^А-Яа-я\s]+/, "");
        })
    });

    inputMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я0-9\s\-\!\,\.\?\:\;\"]+/, "");
    });

    inputMail.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']+/, "");
        })
    });

    inputTel.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]+/, "");
        })
    });
}

export default validator;