import { DateTime } from './luxon.js';
import getDateDiff from './getDAteDiff.js';
import { printError, printResult } from './printResult.js'
import { checkoutTabs } from './toggle.js'


const form = document.getElementById("datecalc");

form.onsubmit = (event) => {
    event.preventDefault()
    //console.log('form', event.target)
    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    //const dataFromObj = DateTime.fromISO(firstDate)
    // const dataToObj = DateTime.fromISO(secondDate)

    // const result = dataFromObj.diff(dataToObj, ['years', 'months', 'days']).toObject()

    if (!firstDate || !secondDate) {
        printError('Вы не ввели ни одного значения')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }
}


const chooseTime = document.getElementById('time')
const clickStart = document.querySelector('.start')
const clickStop = document.querySelector('.stop')
const startTimer = document.getElementById('timer')
let timeMinut
clickStart.addEventListener('click', function () {

    console.log(chooseTime.value)
    let arr = chooseTime.value.split(':');
    let strSplitMinutes = arr[0];
    let strSplitSeconds = arr[1];
    //получаем кол-во секунд
    timeMinut = parseInt(strSplitMinutes * 60) + parseInt(strSplitSeconds)
    console.log(timeMinut)
    console.log(typeof timeMinut)

})

function countTimer(time) {
    let seconds = time % 60 // Получаем секунды
    let minutes = time / 60 % 60 // Получаем минуты
    let hour = time / 60 / 60 % 60 // Получаем часы
    if (hour < 10) { hour = "0" + hour };

    if (minutes < 10) { minutes = "0" + minutes };
    if (seconds < 10) { seconds = "0" + seconds };

    let correctTime = `${Math.trunc(hour)}: ${Math.trunc(minutes)}: ${Math.trunc(seconds)}`;

    startTimer.innerText = correctTime
    console.log(time)
    time = time - 1
    console.log(time)
}

countTimer(timeMinut)

