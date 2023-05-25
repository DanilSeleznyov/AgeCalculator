const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const btn = document.querySelector('.btn')
const yearOut = document.querySelector('.year__output')
const monthOut = document.querySelector('.month__output')
const dayOut = document.querySelector('.day__output')
const requiredError = document.getElementsByClassName('app__error-required')
const validError = document.getElementsByClassName('app__error-valid')

btn.addEventListener('click', calculate);

const redInput = 'border:1px solid red;'
const normalInput = 'border:1px solid hsl(0, 0%, 86%);'

function calculate() {
    let date = new Date();
    let dayNum = date.getDate();
    let monthNum = date.getMonth() + 1;
    let yearNum = date.getFullYear();
    let yearAge = yearNum - year.value;
    let monthDays = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let monthAge = 0;
    let dayAge = 0;

    if (monthNum >= month.value) {
        monthAge = monthNum - month.value;

    } else if (monthNum < month.value) {
        yearAge = yearAge - 1
        monthAge = (12 - month.value) + monthNum

    }

    if (dayNum >= day.value) {
        dayAge = dayNum - day.value
    } else {
        monthAge = monthAge - 1
        dayAge = (dayNum - day.value) + monthDays[month.value]
    }


    yearOut.innerHTML = Math.abs(yearAge);
    monthOut.innerHTML = Math.abs(monthAge);
    dayOut.innerHTML = Math.abs(dayAge);

    if (day.value == 0) {
        day.style.cssText = redInput;
        let requiredArr = Array.from(requiredError)
        requiredArr[0].style.display = 'block'
        yearOut.innerHTML = '--'
        monthOut.innerHTML = '--'
        dayOut.innerHTML = '--'
    } else {
        day.style.cssText = normalInput;
        let requiredArr = Array.from(requiredError)
        requiredArr[0].style.display = 'none'
    }

    if (month.value == 0) {
        month.style.cssText = redInput;
        let requiredArr = Array.from(requiredError)
        requiredArr[1].style.display = 'block'
        yearOut.innerHTML = '--'
        monthOut.innerHTML = '--'
        dayOut.innerHTML = '--'
    } else {
        month.style.cssText = normalInput;
        let requiredArr = Array.from(requiredError)
        requiredArr[1].style.display = 'none'
    }

    if (year.value == 0) {
        year.style.cssText = redInput;
        let requiredArr = Array.from(requiredError)
        requiredArr[2].style.display = 'block'
        yearOut.innerHTML = '--'
        monthOut.innerHTML = '--'
        dayOut.innerHTML = '--'
    } else {
        year.style.cssText = normalInput;
        let requiredArr = Array.from(requiredError)
        requiredArr[2].style.display = 'none'
    }


    if (day.value > 31) {
        day.style.cssText = redInput;
        let requiredArr = Array.from(validError)
        requiredArr[0].style.display = 'block'
        yearOut.innerHTML = '--'
        monthOut.innerHTML = '--'
        dayOut.innerHTML = '--'
    }else if(day.value < 31 && day.value != 0){
        day.style.cssText = normalInput;
        let requiredArr = Array.from(validError)
        requiredArr[0].style.display = 'none'
    }

    if (month.value > 12) {
        month.style.cssText = redInput;
        let requiredArr = Array.from(validError)
        requiredArr[1].style.display = 'block'
        yearOut.innerHTML = '--'
        monthOut.innerHTML = '--'
        dayOut.innerHTML = '--'
    }else if(month.value < 12 && month.value != 0){
        month.style.cssText = normalInput;
        let requiredArr = Array.from(validError)
        requiredArr[1].style.display = 'none'
    }

    if (year.value > yearNum) {
        year.style.cssText = redInput;
        let requiredArr = Array.from(validError)
        requiredArr[2].style.display = 'block'
        yearOut.innerHTML = '--'
        monthOut.innerHTML = '--'
        dayOut.innerHTML = '--'
    }else if(year.value < yearNum && year.value != 0){
        year.style.cssText = normalInput;
        let requiredArr = Array.from(validError)
        requiredArr[2].style.display = 'none'
    }

}

