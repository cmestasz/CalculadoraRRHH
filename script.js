let currentValue = "";

function updateOpacity() {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    if (inputElement.textContent.trim() === "Ingrese una expresion...") {
        inputElement.classList.add("initial-value");
    } else {
        inputElement.classList.remove("initial-value");
    }
    if (resultElement.textContent.trim() === "Resultado") {
        resultElement.classList.add("initial-value");
    } else {
        resultElement.classList.remove("initial-value");
    }
}

function addValue(value) {
    currentValue += value;
    document.getElementById("input").textContent = currentValue;
    updateResult();
    updateOpacity();
}

function addOperator(operator) {
    if (currentValue !== "") {
        currentValue += operator;
        updateResult();
    }
}

function calculate() {
    if (currentValue !== "") {
        let result;
        try {
            result = eval(currentValue);
            result = parseFloat(result.toFixed(4))
            document.getElementById("result").innerHTML = result;
            currentValue = result.toString();
            updateOpacity();
        } catch (error) {
            document.getElementById("result").innerHTML = "Error";
        }
    }
}

function clearResult() {
    document.getElementById("input").innerHTML = "Ingrese una expresion...";
    document.getElementById("result").innerHTML = "Resultado";
    currentValue = "";
    updateOpacity();
}

function updateResult() {
    document.getElementById("input").innerHTML = currentValue;
    MathJax.typeset();
}
