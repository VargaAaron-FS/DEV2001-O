// Aaron Varga
// Intro to Development II
// Exercise: Arrays and Classes
// Oct 6, 2021

/*
Instructions

Write valid JavaScript to answer the questions below. Make sure there are no errors present. Separate each question with comments, such as "/---Question 1------". Also, you can write all the answers in the IIFE. However, the class for #4 may need to be written at the top of your script, outside the IIFE.

Question 1: 10 points

Create an array named 'myArray' containing 5 elements with 3 being strings and 2 integers and loop through the array using a for loop to show all 5 elements in the console.

Question 2: 20 points

Create 2 variables. One is 'myName' and the other is 'favFood'. Assign string values to those variables. Next, add both of those variables to an array called 'stuff' using the appropriate array method.

Question 3: 20 points

Create a loop that will loop completely through an array regardless of the number of elements the array has. Just make up an array to use for the loop.

Question 4: 20 points

Create any class containing 3 methods (including the constructor) and 2 properties. Make sure you are also instantiating that class.

Question 5: 30 points

Create a function called getEvenNumbers() that has an array as its only parameter. The function will return an array of only the even numbers from the given array argument.

Example:

let testArray = [1, 2, 5, 6, 9, 10, 14, 15];
let evenNumbers = getEvenNumbers(testArray);

console.log(evenNumbers);   // displays [2, 6, 10, 14] as an array
 */

(()=>{
    // Question 1 -
    console.log("Question 1:");
    console.log("Create an array named 'myArray' containing 5 elements with 3 being strings and 2 integers and loop through the array using a for loop to show all 5 elements in the console.");
    console.log("Output:");
    // Create array with 5 elements, 3 strings, 2 integers
    let myArray = ["aaron", 5, "varga", 10, "web"];
    // Create for loop to loop through the array and display all elements in console.
    for (let i = 0; i < myArray.length; i++){
        // Console log each element in array
        console.log(myArray[i]);
    }

    // Blank console log to separate questions
    console.log("");

    // Question 2 -
    console.log("Question 2:");
    console.log("Create 2 variables. One is 'myName' and the other is 'favFood'. Assign string values to those variables. Next, add both of those variables to an array called 'stuff' using the appropriate array method.");
    console.log("Output:");

    // Create the 2 variables and assign string values
    let myName = "Aaron";
    let favFood = "Chinese";

    // Create array to hold both variables
    let stuff = [myName,favFood];

    // Console log the array output
    console.log(stuff);

    // Blank console log to separate questions
    console.log("");

    // Question 3 -
    console.log("Question 3:");
    console.log("Create a loop that will loop completely through an array regardless of the number of elements the array has. Just make up an array to use for the loop.");
    console.log("Output:");

    // Create array
    let arrayAaron = [5,10,15,20,25];

    // Create dynamic loop
    for (let i = 0; i < arrayAaron.length; i++){
        // Console log output
        console.log(arrayAaron[i]);
    }

    // Blank console log to separate questions
    console.log("");

    // Question 4 -
    console.log("Question 4:");
    console.log("Create any class containing 3 methods (including the constructor) and 2 properties. Make sure you are also instantiating that class.");
    console.log("Output:");

    class Pie{
        constructor(type,quantity) {
            console.log("Welcome to my pie shop! What can I get for you?")
            this.type = type;
            this.quantity = quantity;
        }
        order(){
            console.log(`I would like ${this.quantity} ${this.type} pies, please!`);
        }
    }

    const myPieOrder = new Pie("apple",5);

    myPieOrder.order();

    // Blank console log to separate questions
    console.log("");

    // Question 5 -
    console.log("Question 5:");
    console.log("Create a function called getEvenNumbers() that has an array as its only parameter. The function will return an array of only the even numbers from the given array argument.");
    console.log("Output:");

    // Create array
    let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    // Create function
    function getEvenNumbers(){
        for (let i = 0; i < testArray.length; i++){
            if(testArray[i] % 2 === 0){
                console.log(testArray[i]);
            }
        }
    }

    // Call function to get even numbers from array
    getEvenNumbers(testArray);
})();