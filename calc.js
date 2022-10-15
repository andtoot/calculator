const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button[id]')
const clear = document.querySelector('.clear')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mlt = document.querySelector('.multi')
const dvid = document.querySelector('.divide')
const oper = document.querySelector('.equals')
const remain = document.querySelector('.remainder')

let result;
let remove = false;
let number = 0;
let number2 = 0;
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;

function add() {

    let x = (number + number2);

    console.log(number);
    result = x;
    console.log(result);
    return result;

}

function sub() {
    let x = (number - number2);

    console.log(x);
    result = x;
    return result;
}

function multi() {
    let x = (number * number2);

    console.log(x);
    result = parseFloat(x.toFixed(5));;
    return result;
}

function div() {
    let x = (number / number2);

    console.log(x);
    result = parseFloat(x.toFixed(5));
    return result;
}

function rem() {
    let x = (number % number2);

    console.log(x);
    result = parseFloat(x.toFixed(5));
    return result;
}

buttons.forEach(btn => {
    while (clicked1 === false && clicked2 === false && clicked3 === false && clicked4 === false && clicked5 === false && clicked6 === false) {
        btn.addEventListener('click', function () {
            inputNumber(this.id)
        });
        break;
    }
});



const inputNumber = a => {
    let screenNumber = screenDisplay.innerHTML;
    if (screenNumber.length < 16 && clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false && clicked6 === false) {
        screenDisplay.innerHTML = parseFloat(screenNumber + a).toString();
        number = Number(screenNumber + a);
        a = 0;
        return number;
    } 
}

const enterNumber = b => {
    let screenNumber2 = screenDisplay.innerHTML;
    if (screenNumber2.length < 16 && (clicked1 == true || clicked2 == true || clicked3 == true || clicked4 == true || clicked6 === true)) {
        screenDisplay.innerHTML = parseFloat(screenNumber2 + b).toString();
        number2 = Number(screenNumber2 + b);
        b = 0;
        console.log(number);
        return number2;
    }
}


clear.addEventListener('click', function () {
        window.location.reload();
});

plus.addEventListener('click', function (e) {
    if (clicked1 == false) {
        let screenNumber = screenDisplay.innerHTML;
        screenNumber = 0;
        screenDisplay.innerHTML = parseFloat(screenNumber).toString();
        console.log(screenDisplay);
        clicked1 = true;
        console.log(clicked1);
        operate(number)
    }
});

minus.addEventListener('click', function () {
    if (clicked2 == false) {
        let screenNumber = screenDisplay.innerHTML;
        screenNumber = 0;
        screenDisplay.innerHTML = parseFloat(screenNumber).toString();
        console.log(screenDisplay);
        clicked2 = true;
        console.log(clicked2);
        operate(number)
    }
});

mlt.addEventListener('click', function () {
    if (clicked3 == false) {
        let screenNumber = screenDisplay.innerHTML;
        screenNumber = 0;
        screenDisplay.innerHTML = parseFloat(screenNumber).toString();
        console.log(screenDisplay);
        clicked3 = true;
        console.log(clicked3);
        operate(number)
    }
});

dvid.addEventListener('click', function () {
    if (clicked4 == false) {
        let screenNumber = screenDisplay.innerHTML;
        screenNumber = 0;
        screenDisplay.innerHTML = parseFloat(screenNumber).toString();
        console.log(screenDisplay);
        clicked4 = true;
        console.log(clicked4);
        operate(number)
        return;
    }
});

remain.addEventListener('click', function () {
    if (clicked6 == false) {
        let screenNumber = screenDisplay.innerHTML;
        screenNumber = 0;
        screenDisplay.innerHTML = parseFloat(screenNumber).toString();
        console.log(screenDisplay);
        clicked6 = true;
        console.log(clicked6);
        operate(number)
        return;
    }
});

function blah() {
    remove = true;
    enterNumber(this.id)
}

function operate() {
    while (clicked1 == true) {
        buttons.forEach(btn => 
            btn.addEventListener('click', blah));
            if (remove) {
                buttons.forEach(btn => btn.removeEventListener('click', blah))
            }

        break;
    }
    while (clicked2 == true) {
        buttons.forEach(btn => 
            btn.addEventListener('click', blah));
            if (remove) {
                buttons.forEach(btn => btn.removeEventListener('click', blah))
            }

        break;
    }
    while (clicked3 == true) {
        buttons.forEach(btn => 
            btn.addEventListener('click', blah));
            if (remove) {
                buttons.forEach(btn => btn.removeEventListener('click', blah))
            }

        break;
    }
    while (clicked4 == true) {
        buttons.forEach(btn => 
            btn.addEventListener('click', blah));
            if (remove) {
                buttons.forEach(btn => btn.removeEventListener('click', blah))
            }

        break;
    }
    while (clicked6 == true) {
        buttons.forEach(btn => 
            btn.addEventListener('click', blah));
            if (remove) {
                buttons.forEach(btn => btn.removeEventListener('click', blah))
            }

        break;
    }
}



oper.addEventListener('click', function () {
    if (clicked1 == true) {
        clicked5 = true;
        clicked1 = false;
        remove = false;
        console.log(clicked1);
        add(number, number2);
        console.log("this is the result" + result);
        number = result;
        number2 = 0;
        screenDisplay.innerHTML = parseFloat(number).toString();
        return result;
    }
    else if (clicked2 == true) {
        clicked5 = true;
        clicked2 = false;
        remove = false;
        console.log(clicked1);
        sub(number, number2);
        console.log("this is the result" + result);
        number = result;
        number2 = 0;
        screenDisplay.innerHTML = parseFloat(number).toString();
        return result;
    }
    else if (clicked3 == true) {
        clicked5 = true;
        clicked3 = false;
        remove = false;
        console.log(clicked1);
        multi(number, number2);
        console.log("this is the result" + result);
        number = result;
        number2 = 0;
        screenDisplay.innerHTML = parseFloat(number).toString();
        return result;
    }
    else if (clicked4 == true) {
        clicked5 = true;
        clicked4 = false;
        remove = false;
        console.log(clicked1);
        div(number, number2);
        console.log("this is the result" + result);
        number = result;
        number2 = 0;
        screenDisplay.innerHTML = parseFloat(number).toString();
        return result;
    }
    else if (clicked4 == true) {
        clicked5 = true;
        clicked4 = false;
        remove = false;
        console.log(clicked1);
        div(number, number2);
        console.log("this is the result" + result);
        number = result;
        number2 = 0;
        screenDisplay.innerHTML = parseFloat(number).toString();
        return result;
    }
    else if (clicked6 == true) {
        clicked5 = true;
        clicked6 = false;
        remove = false;
        console.log(clicked1);
        div(number, number2);
        console.log("this is the result" + result);
        number = result;
        number2 = 0;
        screenDisplay.innerHTML = parseFloat(number).toString();
        return result;
    }
    this.removeEventListener('click', arguments.callee);

});