const screenA = document.querySelector('.screenA');
const screenB = document.querySelector('.screenB');
const buttons = document.querySelectorAll('button[id]')
const clear = document.querySelector('.clear')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const mlt = document.querySelector('.multi')
const dvid = document.querySelector('.divide')
const oper = document.querySelector('.equals')
const dec = document.querySelector('.dec')

let de = 0.0;
let result;
let number = 0;
let number2 = 0;
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;


function add() {

    let x = (number + number2);

    console.log(number);
    result = x;
    console.log(result);
    return result;

}

function sub() {
    let c = Number(a);
    let d = Number(b);

    let x = (c - d);

    console.log(x);
    result = x;
    return result;
}

function multi() {
    let c = Number(a);
    let d = Number(b);

    let x = (c * d);

    console.log(x);
    result = x;
    return result;
}

function div() {
    let c = Number(a);
    let d = Number(b);

    let x = (c / d);

    console.log(x);
    result = x;
    return result;
}

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        inputNumber(this.id)
    });
});

function remove() {
    if (clicked1 === true || clicked2 === true || clicked3 === true || clicked4 === true) {
        btn.removeEventListener('click');
    }
}

const inputNumber = a => {
    let screenNumber = screenA.innerHTML;
    if (screenNumber.length < 16) {
        screenA.innerHTML = parseInt(screenNumber + a).toString();
        number = Number(screenNumber + a);
        a = 0;
        return number;
    } 
}

const enterNumber = b => {
    let screenNumber2 = screenB.innerHTML;
    if (screenNumber2.length < 16) {
        screenB.innerHTML = parseInt(screenNumber2 + b).toString();
        number2 = Number(screenNumber2 + b);
        b = 0;
        console.log(number);
        return number2;
    }
}

//dec.addEventListener('click', function () {
    //let screenNumber = screenDisplay.innerHTML;
    //if (clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false) {
        //screenDisplay.innerHTML = screenNumber.toString + ".";
        //number = Number(screenNumber);
        //a = number;
        //console.log(a);
        //return a;
    //}
    //if (clicked1 == true || clicked2 == true || clicked3 == true || clicked4 == true && clicked5 == false) {
        //screenDisplay.innerHTML = parseFloat(screenNumber + de).toString();
        //number = Number(screenNumber);
        //b = number;
        //console.log(b);
        //return b;
    //}
//})





clear.addEventListener('click', function () {
        window.location.reload();
});

plus.addEventListener('click', function () {
    clicked1 = true;
    console.log(clicked1);
    operate(number)
});

minus.addEventListener('click', function () {
    let screenNumber = screenDisplay.innerHTML;
    screenNumber = 0;
    screenDisplay.innerHTML = parseInt(screenNumber).toString();
    console.log(screenDisplay);
    clicked2 = true;
    console.log(clicked2);
    operate(a)
});

mlt.addEventListener('click', function () {
    let screenNumber = screenDisplay.innerHTML;
    screenNumber = 0;
    screenDisplay.innerHTML = parseInt(screenNumber).toString();
    console.log(screenDisplay);
    clicked3 = true;
    console.log(clicked3);
    operate(a)
});

dvid.addEventListener('click', function () {
    let screenNumber = screenDisplay.innerHTML;
    screenNumber = 0;
    screenDisplay.innerHTML = parseInt(screenNumber).toString();
    console.log(screenDisplay);
    clicked4 = true;
    console.log(clicked4);
    operate(a)
});

function operate() {
    if (clicked1 == true) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                enterNumber(this.id)
            });
        });
    }
    else if (clicked2 == true) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                enterNumber(this.id)
            });
        });
    }
    else if (clicked3 == true) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                enterNumber(this.id)
            });
        }); 
    }
    else if (clicked4 == true) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                enterNumber(this.id)
            });
        });
    }
}

oper.addEventListener('click', function () {
    if (clicked1 == true) {
        clicked1 = false;
        console.log(clicked1);
        add(number, number2);
        console.log("this is the result" + result);
        number = result;
        screenA.innerHTML = parseInt(number).toString();
        screenB.innerHTML = parseInt(number2).toString();
        return result;
    }
    
});