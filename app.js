// select h2 and button
const h2 = document.getElementById("pin")
const pinBtn = document.getElementById("pinbutton")
const digitDisplay = document.getElementById("digitDisplay")
const moreDigitsBtn = document.getElementById("moreDigits")
const lessDigitsBtn = document.getElementById("lessDigits")

let digits = 4;

// Create Pin
pinBtn.addEventListener("click", () => {
    h2.textContent = createPin();
})

moreDigitsBtn.addEventListener("click", () => {
    digitDisplay.textContent = ++digits;
})

lessDigitsBtn.addEventListener("click", () => {
    digits--

    digits < 0 ? digits = 0 : ""; 

    digitDisplay.textContent = digits;
})

function createPin() {
    let newPin = "";

    for (let i = 0; i < digits; i++) {
        newPin += Math.floor(Math.random() * 10)
    }

    return newPin
}