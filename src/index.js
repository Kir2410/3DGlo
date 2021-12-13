import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validator from './modules/validator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('31 december 2021 23:59')
menu()
modal()
validator()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'input',
        id: 'form2-message'
    }]
})
sendForm({
    formId: 'form3'
})