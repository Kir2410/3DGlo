const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId)
    const formElements = form.querySelectorAll('input')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка!'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется.'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            statusBlock.textContent = errorText
            alert('Заполните пустые поля!')
        }

    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            formElements.forEach((elem) => {
                if (elem.value !== '') {
                    elem.classList.add('success')
                }
            })
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm