let result = 0;
let temp ;
let firstOp = true
let selectedOperator = "+" 
function calculate (currentOp) {
    temp = parseFloat(display.textContent)
    switch (currentOp) {
        case "+":
            result += temp ;
            break;
        case "-": 
            result -= temp ;
            break; 
        case "*": 
            result *= temp ;
            break; 
        case "/":
            result /= temp ;
            break;
        case "=": 
        setTimeout(function(){
            display.textContent = result;

        }, 100)
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
        calculate(selectedOperator) ; resetDisplay() ;
        firstOp = false ; 
        selectedOperator = "+" ;
    }
    else {
        selectedOperator = e.target.value
        calculate(selectedOperator) ; resetDisplay() ;
        console.log(result)
        if(result == NaN) {
            display.textContent = "Input ERROR"
        }
    }
})
