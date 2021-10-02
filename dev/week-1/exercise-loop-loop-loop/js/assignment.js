// Aaron Varga
// Intro to Development II
// Exercise - Loop, Loop, Loop
// September 27, 2021

/*
Instructions

Questions 1-4 must be done using a for loop and question 5 must use a while loop.
All results are shown in the Console. Do not use HTML.
Each question must be coded in its own function and then call those 5 functions inside an IIFE (20 points).
Name the functions question1, question 2, etc. You do not have to rewrite the questions in the console.
However, make sure each question is indicated clearly.

Question #1: 10 points

Display the numbers 1-10 (including the 1 and 10) in ascending order.
Question #2: 20 points

Display the numbers 10 through 0 in descending order.
Question #3: 20 points

Display only the even numbers between 10 and 50 (including 10 and 50).
Question #4: 20 points

Add 10 to a score variable 20 times and show the result of the variable score.
This will require you to create a variable named score.
Question #5: 10 points

While Loop: display how many attempts it took to finally roll a 3 on a typical 6 sided die.
You will show the result of each roll of the die and roll number until the number 3 is rolled.
See output example on what I am expecting. (of course your numbers may be different because of the random numbers)
*/

// Creating all functions!

// Question #1:
// Display the numbers 1-10 (including the 1 and 10) in ascending order.

function question1(){
    for (let i = 1; i<11; i++){
        console.log(i);
    }
}

// Question #2:
// Display the numbers 10 through 0 in descending order.

function question2(){
    for (let i = 10; i>-1; i--){
        console.log(i);
    }
}

// Question #3:
// Display only the even numbers between 10 and 50 (including 10 and 50).

function question3(){
    for (let i = 10; i<51; i+=2){
        console.log(i);
    }
}

// Question #4:
// Add 10 to a score variable 20 times and show the result of the variable score.
// This will require you to create a variable named score.

function question4(){
    let score = 0;
    for (let i = 20; i > 0; i--) {
        score += 10;
    }
    console.log(`Score: ${score}`)
}

// Question 5:
/* While Loop: display how many attempts it took to finally roll a 3 on a typical 6 sided die. You will show the result of each roll of the die and roll number until the number 3 is rolled. See output example on what I am expecting. (of course your numbers may be different because of the random numbers) */

function question5(){
    let i = 0;
    let roll = 1;
    while (i !== 3){
        i = Math.floor(Math.random()*6+1);
        console.log(`Roll: ${roll++}, Dice Value: ${i}`);
    }
    console.log(`It took ${roll - 1} tosses to roll a ${i}`);
}

// Calling all functions!

// Question 1 -

(function (){
    console.log("Question #1:");
    console.log("Display the numbers 1-10 (including the 1 and 10) in ascending order.");

    return question1();
})();

// Question 2 -

(function (){
    console.log("Question #2:");
    console.log("Display the numbers 10 through 0 in descending order.");

    return question2();
})();

// Question 3 -

(function (){
    console.log("Question #3:");
    console.log("Display only the even numbers between 10 and 50 (including 10 and 50).");

    return question3();
})();

// Question 4 -

(function (){
    console.log("Question #4:");
    console.log("Add 10 to a score variable 20 times and show the result of the variable score. This will require you to create a variable named score.");

    return question4();
})();

// Question 5 -

(function (){
    console.log("Question #5:");
    console.log("While Loop: display how many attempts it took to finally roll a 3 on a typical 6 sided die. You will show the result of each roll of the die and roll number until the number 3 is rolled. See output example on what I am expecting. (of course your numbers may be different because of the random numbers)");

    return question5();
})();
