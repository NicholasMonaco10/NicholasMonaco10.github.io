<script>
    // --- Helper Function ---
    // Safely retrieves the current counter value from the UI
    function getCount() {
        return parseInt(document.getElementById('counter').innerText);
    }

    // --- 1pt: Simple Functions ---
    // Increments the counter display
    function tickUp() {
        const counter = document.getElementById('counter');
        counter.innerText = getCount() + 1;
    }

    // Decrements the counter display
    function tickDown() {
        const counter = document.getElementById('counter');
        counter.innerText = getCount() - 1;
    }

    // --- 1pt: Simple For Loop ---
    // Displays all numbers from 0 to the current counter
    function runForLoop() {
        let count = getCount();
        let result = "";
        for (let i = 0; i <= count; i++) {
            result += i + " ";
        }
        document.getElementById('forLoopResult').innerText = result.trim();
    }

    // --- 1pt: Repetition with Condition ---
    // Displays only odd numbers from 1 to the current counter
    function showOddNumbers() {
        let count = getCount();
        let result = "";
        for (let i = 1; i <= count; i++) {
            if (i % 2 !== 0) {
                result += i + " ";
            }
        }
        document.getElementById('oddNumberResult').innerText = result.trim();
    }

    // --- 1pt: Arrays ---
    // Creates an array of multiples of 5 in reverse order and prints it to console
    function addMultiplesToArray() {
        let count = getCount();
        let multiples = [];
        // Requirements: reverse order, multiples of 5, empty if count < 5
        for (let i = count; i >= 5; i--) {
            if (i % 5 === 0) {
                multiples.push(i);
            }
        }
        console.log(multiples);
    }

    // --- 2pts: Objects and Form Fields ---
    // Captures form data into an object and prints the object to console
    function printCarObject() {
        const car = {
            cType: document.getElementById('carType').value,
            cMPG: document.getElementById('carMPG').value,
            cColor: document.getElementById('carColor').value
        };
        console.log(car);
    }

    // --- 2pts: Objects and Form Fields pt. 2 ---
    // Loads pre-defined car data from the footer into the form fields
    function loadCar(carNum) {
        let car;
        if (carNum === 1) car = carObject1;
        else if (carNum === 2) car = carObject2;
        else if (carNum === 3) car = carObject3;

        if (car) {
            document.getElementById('carType').value = car.cType;
            document.getElementById('carMPG').value = car.cMPG;
            document.getElementById('carColor').value = car.cColor;
        }
    }

    // --- 2pt: Changing Styles ---
    // Changes the text color of the specific paragraph based on button clicked
    function changeColor(choice) {
        const para = document.getElementById('styleParagraph');
        if (choice === 1) para.style.color = "red";
        else if (choice === 2) para.style.color = "green";
        else if (choice === 3) para.style.color = "blue";
    }
</script>
