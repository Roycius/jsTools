function getRandIntFromRange(min, max) { /* Inclusive */
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

const randInt = document.querySelector("#randInt")
const randIntBtn = document.querySelector("#randIntBtn")
const randIntMin = document.querySelector("#randIntMin")
const randIntMax = document.querySelector("#randIntMax")

let randIntMinVal = undefined
let randIntMaxVal = undefined

randIntMin.addEventListener('change', function () {
    randIntMinVal = parseInt(this.value)
})

randIntMax.addEventListener('change', function () {
    randIntMaxVal = parseInt(this.value)
})

randIntBtn.addEventListener('click', function () {
    if (randIntMinVal === undefined || randIntMaxVal === undefined) {
        randInt.innerHTML = `<b>Please fill in the minimum and maximum values!</b>`
    } else if (randIntMaxVal < randIntMinVal) {
        randInt.innerHTML = `<b>Maximum value cannot be less than minimum!</b>`
    } else {
        randInt.innerHTML = `<b>${getRandIntFromRange(randIntMinVal, randIntMaxVal)}</b>`
    }
})

const randColor = document.querySelector("#randColor")
const randColorBtn = document.querySelector("#randColorBtn")

let randColorVal = undefined

function getRandHexColorValues() {
    const r = getRandIntFromRange(0,255).toString(16).padStart(2, '0')
    const g = getRandIntFromRange(0,255).toString(16).padStart(2, '0')
    const b = getRandIntFromRange(0,255).toString(16).padStart(2, '0')
    return `${r}${g}${b}`
}

function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

randColorBtn.addEventListener('click', function () {
    const randHexColor = getRandHexColorValues()
    randColor.innerHTML = `<b>#${randHexColor}</b>`
    randColor.style.color = `#${randHexColor}`
})