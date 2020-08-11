// select h2 and button
const h2 = document.getElementById("pin")
const pinBtn = document.getElementById("pinbutton")
const digitDisplay = document.getElementById("digitDisplay")
const moreDigitsBtn = document.getElementById("moreDigits")
const lessDigitsBtn = document.getElementById("lessDigits")

let digits = 4;

// add event listeners
pinBtn.addEventListener("click", () => {
    h2.textContent = createPin();
})

// increase number of digits
moreDigitsBtn.addEventListener("click", () => {
    digitDisplay.textContent = ++digits;
})

// decrease number of digits
lessDigitsBtn.addEventListener("click", () => {
    digits--

    if (digits<1) digits = 1; 

    digitDisplay.textContent = digits;
})

//create pin
function createPin() {
    let newPin = "";

    for (let i = 0; i < digits; i++) {
        newPin += Math.floor(Math.random() * 10)
    }

    return newPin
}