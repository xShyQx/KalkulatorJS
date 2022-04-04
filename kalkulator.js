const input = document.querySelector("input");
let num = 0;
let newNum = true;

function add(x) {
    if(newNum == true) {
        input.setAttribute("value", x);
        newNum = false;
    } else {
        input.setAttribute("value", input.value + x);
    }
    console.log(input.value);
}

function oper(x) {
    switch(x) {
    case '+':
        num += input.value.parseInt();
        break;
    case '-':
        num -= input.value;
        break;
    case '*':
        num *= input.value;
        break;
    case '/':
        num /= input.value;
        break;
    } 
    newNum = true;
}

function answer() {
    input.setAttribute("value", num);
    newNum = true;
}

function nclear() {
    input.setAttribute("value", "");
    num = 0;
    console.log(input.value);
}