// In this Coding Task you will complete two incomplete functions.
// Then you will define your own function.

// #1) The function `product` prints the product of two numbers.

function product(num1, num2){
  // Your code here
  console.log(num1 * num2 )
}

// Tests          // Expected Output
product(3, 9);    // 27
product(-11, 2);  // -22
product(275, 175);// 48125


// #2) The function `printFullName` prints the full name of a user when given first and last names.

function printFullName(firstName, lastName){
  // Your code here
  let fullName = firstName +" " + lastName
  console.log(fullName)
  
}

// Tests                            // Expected Output
printFullName("Clarence", "Smith"); // Clarence Smith
printFullName("Mariah", "Carey");   // Mariah Carey
printFullName("Madonna", "");       // Madonna


// #3 The function `isEven` prints true if the given number is even, prints false if not.

function isEven(num){
  // Your code here
}

// Tests    // Expected Output
isEven(7);  // false
isEven(8);  // true
isEven(-4); // true

// #4 Declare a function called `helloSubject` that takes one argument, `subject`. It should print
// Hello to that subject.

// Define your function below:
function helloSubject(subject){
  console.log("Hello," + subject)
}




// Examples of how to test `helloSubject`
// Test                   //Expected Output
helloSubject("Marcus");   // Hello, Marcus!
helloSubject(2025);   // Hello, 2025!




// #5 Decalre a function called whisper that takes a string argument and returns a whispered version


// Examples of how to test `whisper`
// Test                                // Expected Output
// whisper("YO WHAT'S UP");            // ...yo what's up...
// whisper("Where did you find that?") //...where did you find that?...