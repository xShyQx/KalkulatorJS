const input = document.querySelector("input");
let eq = [0];
let inx = 0;
let newNum = true;

function add(x) {
    if(newNum == true) {
        input.setAttribute("value", x);
        newNum = false;
    } else {
        input.setAttribute("value", input.value + x);
    }
    eq[inx] = parseInt(input.value);
}

function oper(x) {
    eq.push(0);
    inx = eq.length - 1;
    eq.push(x);
    newNum = true;
    console.log(eq);
}

function ans(x) {
    let RX = [];
    for(let i=0; i<x.length; i++) {
        if(typeof x[i] === "number") {
            RX.push(x[i]);
        }
        else switch(x[i]) {
        case '+':
            RX[0] = RX[0] + RX[1];
            RX.pop();
            break;
        case '-':
            RX[0] = RX[0] - RX[1];
            RX.pop();
            break;
        case '*':
            RX[0] = RX[0] * RX[1];
            RX.pop();
            break;
        case '/':
            RX[0] = RX[0] / RX[1];
            RX.pop();
            break;
        }
        console.log(RX);
    }
    return RX[0];
}

function answer() {
    console.log(eq);
    input.setAttribute("value", ans(eq));
    newNum = true;
}

function nclear() {
    input.setAttribute("value", "");
    while(eq.length !== 0) {
        eq.pop();
    }
}