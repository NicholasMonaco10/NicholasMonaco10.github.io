// Helper to get the current counter value as an integer
function getCounterValue() {
    return parseInt(document.getElementById('counter').innerText);
}

// 1. Simple Functions: Increase/Decrease Counter
function tickUp() {
    let count = getCounterValue();
    document.getElementById('counter').innerText = count + 1;
}

function tickDown() {
    let count = getCounterValue();
    document.getElementById('counter').innerText = count - 1;
}

// 2. Simple For Loop: Display 0 to Counter
function runForLoop() {
    let count = getCounterValue();
    let result = "";
    for (let i = 0; i <= count; i++) {
        result += i + " ";
    }
    document.getElementById('forLoopResult').innerText = result.trim();
}

// 3. Repetition with Condition: Odd Numbers 1 to Counter
function showOddNumbers() {
    let count = getCounterValue();
    let result = "";
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById('oddNumberResult').innerText = result.trim();
}

// 4. Arrays: Multiples of 5 in Reverse Order
function addMultiplesToArray() {
    let count = getCounterValue();
    let multiples = [];
    // Start from the largest multiple of 5 less than or equal to count
    for (let i = count; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }
    console.log(multiples);
}

// 5. Objects and Form Fields: Print current form data
function printCarObject() {
    let car = {
        cType: document.getElementById('carType').value,
        cMPG: document.getElementById('carMPG').value,
        cColor: document.getElementById('carColor').value
    };
    console.log(car);
}

// 6. Objects and Form Fields pt. 2: Load data from footer objects
function loadCar(carNum) {
    let selectedCar;
    if (carNum === 1) selectedCar = carObject1;
    if (carNum === 2) selectedCar = carObject2;
    if (carNum === 3) selectedCar = carObject3;

    document.getElementById('carType').value = selectedCar.cType;
    document.getElementById('carMPG').value = selectedCar.cMPG;
    document.getElementById('carColor').value = selectedCar.cColor;
}

// 7. Changing Styles: Change text color of specific paragraph
function changeColor(choice) {
    let para = document.getElementById('styleParagraph');
    if (choice === 1) para.style.color = "red";
    if (choice === 2) para.style.color = "green";
    if (choice === 3) para.style.color = "blue";
}
