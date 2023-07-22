let currentValue = "";

function addValue(value) {
    currentValue += value;
    document.getElementById("input").textContent = currentValue;
    updateResult();
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
        } catch (error) {
            document.getElementById("result").innerHTML = "Error";
        }
    }
}

function clearResult() {
    document.getElementById("input").innerHTML = "Ingrese una expresion...";
    document.getElementById("result").innerHTML = "Resultado";
    currentValue = "";
}

function updateResult() {
    document.getElementById("input").innerHTML = currentValue;
    MathJax.typeset();
}
