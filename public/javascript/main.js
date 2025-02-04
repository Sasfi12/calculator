let result = 0;
let temp ;
let temp2 ; 
let firstOp = true
let selectedOperator = "+" 
function calculate (currentOp) {
    switch (currentOp) {
        case "+":
            console.log(`result: ${result}\n temp :${temp}`);
            result += temp ;
            break;
        case "-": 
            console.log(`result: ${result}\n temp :${temp}`);
            result -= temp ;
            break; 
        case "*": 
            console.log(`result: ${result}\n temp :${temp}`);
            result *= temp ;
            break; 
        case "/":
            console.log(`result: ${result}\n temp :${temp}`);
            result /= temp ;
            break;
        case "=": 
            display.textContent = result;
            console.log(`result: ${result}\n temp :${temp}`);
        default:
            break;
        
    } 
    
} 

function resetDisplay () {
    display.textContent = "";
}

const display = document.querySelector("#result");
const numbers = document.querySelector("#numbers");
numbers.addEventListener("click", function (e) {
    if (e.target.value == "CA") {
        display.textContent = ""
        result = 0
    }
    else if (e.target.value != undefined) {
        display.textContent += e.target.value
    }
})
const inputs = document.querySelector("#inputs")

inputs.addEventListener("mousedown", function (e) {
    
    if(firstOp) {
        result += parseFloat(display.textContent); resetDisplay()
        firstOp = false ; 
        selectedOperator = "+" ;
    }
    else {
        selectedOperator = e.target.value
        calculate(selectedOperator) ; resetDisplay() ;
        console.log(result)
        if(isNaN(result)) {
            display.textContent = "Input ERROR"
        }
    }
})
