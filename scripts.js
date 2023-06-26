const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
    switch (btn.id) {
        case "=":
        calculateResult();
        break;
        case "ac":
        clearDisplay();
        break;
        case "de":
        deleteLastCharacter();
        break;
        case "+":
        appendOperator("+");
        break;
        case "-":
        appendOperator("-");
        break;
        case "*":
        appendOperator("*");
        break;
        case "/":
        appendOperator("/");
        break;
        case "^":
        appendOperator("**");
        break;
        default:
        appendNumber(btn.id);
    }
});
});

function calculateResult() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function appendOperator(operator) {
    display.value += operator;
}

function appendNumber(number) {
    display.value += number;
}
