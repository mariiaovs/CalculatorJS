const resultElement = document.getElementById('result');

const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');

const submitBtn = document.getElementById('submit');

const plusBtn = document.getElementById('plus');

const minusBtn = document.getElementById('minus');

const multBtn = document.getElementById('mult');

const divisionBtn = document.getElementById('division');


let action = '+';


//input1.value = 11;

//console.log(resultElement.textContent, input1.textContent, input2.value);
console.log(resultElement.textContent, input1.value, input2.value);


//console.log(typeof input1.value, typeof resultElement.textContent)

plusBtn.onclick = function () {
    action = '+';
}

minusBtn.onclick = function () {
    action = '-';
}

multBtn.onclick = function () {
    action = '*';
}

divisionBtn.onclick = function () {
    action = '/';
}

function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else resultElement.style.color = 'green';
    resultElement.textContent = result;
}

function getResult (inp1, inp2, actionType) {
    let num1 = Number(inp1.value);
    let num2 = Number(inp2.value);
    if (actionType == '+') {
        return num1 + num2;              
    }
    else if (actionType == '-') {
        return num1 - num2;               
    }
    else if (actionType == '*') {
        return num1 * num2;                 
    }
    else if (actionType == '/') {
        return num1 / num2;          
    }
}

submitBtn.onclick = function () {
    const result = getResult (input1, input2, action);
    printResult (result);
    
    /* switch (action) {
        case '+': resultElement.textContent = Number(input1.value) + Number(input2.value);
        break;
        case '-': resultElement.textContent = Number(input1.value) - Number(input2.value);
        break;
        case '*': resultElement.textContent = Number(input1.value) * Number(input2.value);
        break;
        case '/': resultElement.textContent = Number(input1.value) / Number(input2.value);
        break;
    }  */
    
}

