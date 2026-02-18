// 1pt: Simple Functions - Increment and Decrement
function tickUp() {
    const counterElement = document.getElementById('counter'); //
    let currentVal = parseInt(counterElement.innerText);
    counterElement.innerText = currentVal + 1;
}

function tickDown() {
    const counterElement = document.getElementById('counter'); //
    let currentVal = parseInt(counterElement.innerText);
    counterElement.innerText = currentVal - 1;
}

// 1pt: Simple For Loop - Display 0 to Counter
function runForLoop() {
    const count = parseInt(document.getElementById('counter').innerText);
    const resultArea = document.getElementById('forLoopResult'); //
    let output = "";
    
    for (let i = 0; i <= count; i++) {
        output += i + " ";
    }
    resultArea.innerText = output.trim();
}

// 1pt: Repetition with Condition - Odd Numbers
function showOddNumbers() {
    const count = parseInt(document.getElementById('counter').innerText);
    const resultArea = document.getElementById('oddNumberResult'); //
    let output = "";
    
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            output += i + " ";
        }
    }
    resultArea.innerText = output.trim();
}

// 1pt: Arrays - Multiples of 5 in Reverse
function addMultiplesToArray() {
    const count = parseInt(document.getElementById('counter').innerText);
    let multiples = [];
    
    // Start from the count and move down to 5
    for (let i = count; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }
    console.log(multiples); // Requirement: print the array itself
}

// 2pts: Objects and Form Fields - Print Object
function printCarObject() {
    const car = {
        cType: document.getElementById('carType').value, //
        cMPG: document.getElementById('carMPG').value,
        cColor: document.getElementById('carColor').value
    };
    console.log(car);
}

// 2pts: Objects and Form Fields pt. 2 - Load Footer Data
function loadCar(num) {
    let carData;
    // Accesses variables defined in the HTML footer
    if (num === 1) carData = carObject1;
    else if (num === 2) carData = carObject2;
    else if (num === 3) carData = carObject3;

    if (carData) {
        document.getElementById('carType').value = carData.cType;
        document.getElementById('carMPG').value = carData.cMPG;
        document.getElementById('carColor').value = carData.cColor;
    }
}

// 2pt: Changing Styles - Change Paragraph Color
function changeColor(choice) {
    const para = document.getElementById('styleParagraph'); //
    if (choice === 1) para.style.color = "red";
    else if (choice === 2) para.style.color = "green";
    else if (choice === 3) para.style.color = "blue";
}
