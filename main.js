// Function to print entered number
function printNumber() {
    var number = document.getElementById("numberInput").value;
    document.getElementById("output1").innerHTML = "You entered: " + number;
}

document.write("<br>");

// Function to check if a number can divide by 3 and 4
function checkDivisibility() {
    var number = document.getElementById("divisibleInput").value;
    if (number % 3 === 0 && number % 4 === 0) {
        document.getElementById("output2").innerHTML = "Yes";
    } else {
        document.getElementById("output2").innerHTML = "No";
    }
}
document.write("<br>");

// Function to find the maximum of two integers
function findMax() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var max = num1 > num2 ? num1 : num2;
    document.getElementById("output3").innerHTML = "The maximum number is: " + max;
}
document.write("<br>");
// Function to check if an integer is negative or positive
function checkPositiveNegative() {
    var number = parseInt(document.getElementById("integerInput").value);
    if (number < 0) {
        document.getElementById("output4").innerHTML = "Negative";
    } else if (number > 0) {
        document.getElementById("output4").innerHTML = "Positive";
    } else {
        document.getElementById("output4").innerHTML = "Zero";
    }
}
document.write("<br>");
// Function to find the maximum and minimum of three integers
function findMinMax() {
    var num1 = parseInt(document.getElementById("num3").value);
    var num2 = parseInt(document.getElementById("num4").value);
    var num3 = parseInt(document.getElementById("num5").value);
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    document.getElementById("output5").innerHTML = "Max: " + max + ", Min: " + min;
}
document.write("<br>");
// Function to check if an integer is even or odd
function checkEvenOdd() {
    var number = parseInt(document.getElementById("numberInput").value);
    if (number % 2 === 0) {
        document.getElementById("output6").innerHTML = "Even";
    } else {
        document.getElementById("output6").innerHTML = "Odd";
    }
}
document.write("<br>");
// Function to check if a character is a vowel or consonant
function checkVowelConsonant() {
    var char = document.getElementById("charInput").value.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        document.getElementById("output7").innerHTML = "Vowel";
    } else {
        document.getElementById("output7").innerHTML = "Consonant";
    }
}
document.write("<br>");
// Function to print numbers from 1 to a given number
function printNumbersInRange() {
    var number = parseInt(document.getElementById("numberRangeInput").value);
    var output = "";
    for (var i = 1; i <= number; i++) {
        output += i + " ";
    }
    document.getElementById("output8").innerHTML = output;
}
document.write("<br>");
// Function to print multiplication table of a given number up to 12
function printMultiplicationTable() {
    var number = parseInt(document.getElementById("multiplicationInput").value);
    var output = "";
    for (var i = 1; i <= 12; i++) {
        output += number + " x " + i + " = " + (number * i) + "<br>";
    }
    document.getElementById("output9").innerHTML = output;
}
document.write("<br>");
// Function to print all even numbers between 1 and a given number
function printEvenNumbers() {
    var number = parseInt(document.getElementById("evenNumberInput").value);
    var output = "";
    for (var i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            output += i + " ";
        }
    }
    document.getElementById("output10").innerHTML = output;
}
document.write("<br>");
// Function to calculate the power of a base number with an exponent
function calculatePower() {
    var base = parseInt(document.getElementById("baseInput").value);
    var exponent = parseInt(document.getElementById("exponentInput").value);
    var result = Math.pow(base, exponent);
    document.getElementById("output11").innerHTML = base + " ^ " + exponent + " = " + result;
}
document.write("<br>");
// Function to calculate total, average, and percentage of marks in five subjects
function calculateMarks() {
    var physics = parseInt(document.getElementById("physicsMarks").value);
    var chemistry = parseInt(document.getElementById("chemistryMarks").value);
    var biology = parseInt(document.getElementById("biologyMarks").value);
    var math = parseInt(document.getElementById("mathMarks").value);
    var computer = parseInt(document.getElementById("computerMarks").value);

    var total = physics + chemistry + biology + math + computer;
    var average = total / 5;
    var percentage = (total / 500) * 100;

    document.getElementById("output12").innerHTML = "Total: " + total + "<br>" +
        "Average: " + average + "<br>" +
        "Percentage: " + percentage + "%";
}
document.write("<br>");
// Function to calculate the number of days in a given month
function calculateDaysInMonth() {
    var month = parseInt(document.getElementById("monthInput").value);
    var days;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28; // or 29 in a leap year
            break;
        default:
            days = "Invalid month";
    }
    document.getElementById("output13").innerHTML = "Number of days: " + days;
}
document.write("<br>");
// Function to calculate percentage and grade based on marks in five subjects
function calculatePercentageAndGrade() {
    var physics = parseInt(document.getElementById("physicsMarks2").value);
    var chemistry = parseInt(document.getElementById("chemistryMarks2").value);
    var biology = parseInt(document.getElementById("biologyMarks2").value);
    var math = parseInt(document.getElementById("mathMarks2").value);
    var computer = parseInt(document.getElementById("computerMarks2").value);

    var total = physics + chemistry + biology + math + computer;
    var percentage = (total / 500) * 100;
    var grade;

    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("output14").innerHTML = "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}
document.write("<br>");
// Function to execute different cases using a switch statement
function executeSwitchCase() {
    var caseNumber = parseInt(document.getElementById("caseInput").value);
    var output;
    switch (caseNumber) {
        case 1:
            output = "Case 1 selected";
            break;
        case 2:
            output = "Case 2 selected";
            break;
        case 3:
            output = "Case 3 selected";
            break;
        case 4:
            output = "Case 4 selected";
            break;
        case 5:
            output = "Case 5 selected";
            break;
        case 6:
            output = "Case 6 selected";
            break;
        default:
            output = "Invalid case";
    }
    document.getElementById("output15").innerHTML = output;
}
document.write("<br>");
// Function to print numbers from 1 to 10
function printNumbers1to10() {
    var output = "";
    for (var i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById("output16").innerHTML = output;
}
document.write("<br>");
// Function to calculate sum of first 10 natural numbers
function calculateSumOfFirst10() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    document.getElementById("output17").innerHTML = "Sum of first 10 natural numbers: " + sum;
}
document.write("<br>");
// Function to print even numbers between 1 and 20
function printEvenNumbers1to20() {
    var output = "";
    for (var i = 2; i <= 20; i += 2) {
        output += i + " ";
    }
    document.getElementById("output18").innerHTML = output;
}
document.write("<br>");
// Function to calculate factorial of a number
function calculateFactorial() {
    var number = parseInt(document.getElementById("factorialInput").value);
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("output19").innerHTML = "Factorial of " + number + " is " + factorial;
}
document.write("<br>");
// Function to reverse a string
function reverseString() {
    var str = document.getElementById("reverseStringInput").value;
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    document.getElementById("output20").innerHTML = "Reversed string: " + reversed;
}
document.write("<br>");
// Function to print elements of an array
function printArrayElements() {
    var array = [1, 2, 3, 4, 5]; // Example array
    var output = "Array elements: ";
    for (var i = 0; i < array.length; i++) {
        output += array[i] + " ";
    }
    document.getElementById("output21").innerHTML = output;
}
document.write("<br>");
// Function to find maximum in an array
function findMaxInArray() {
    var array = [5, 3, 9, 1, 7]; // Example array
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    document.getElementById("output22").innerHTML = "Maximum number in array: " + max;
}
document.write("<br>");
// Function to print multiplication table of a number using a loop
function printMultiplicationTableLoop() {
    var number = parseInt(document.getElementById("multiplicationTableInput").value);
    var output = "";
    for (var i = 1; i <= 12; i++) {
        output += number + " x " + i + " = " + (number * i) + "<br>";
    }
    document.getElementById("output23").innerHTML = output;
}
document.write("<br>");
// Function to count vowels in a string
function countVowels() {
    var str = document.getElementById("countVowelsInput").value.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    document.getElementById("output24").innerHTML = "Number of vowels: " + count;
}
document.write("<br>");
// Function to check if a number is prime
function checkPrime() {
    var number = parseInt(document.getElementById("primeNumberInput").value);
    var prime = true;
    if (number === 1) {
        prime = false;
    } else if (number > 1) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                prime = false;
                break;
            }
        }
    } else {
        prime = false;
    }

    if (prime) {
        document.getElementById("output25").innerHTML = number + " is a prime number";
    } else {
        document.getElementById("output25").innerHTML = number + " is not a prime number";
    }
}
