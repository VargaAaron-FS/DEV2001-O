// Aaron Varga
// Intro to Development II
// Assignment: Data Visualization
// October 1, 2021

/*
Assignment: Data Visualization

Objective: Create a program that displays a series of data points on a graph using the Canvas API

Key topics:

- Functions
- Canvas API
- Loops
- Random number generation

Overview:

You will create a graph showing at least 5 random numbers using the Canvas API. This can be any type of graph such as a line graph or bar graph. The numbers will be generated programmatically and not from any sort of user input. Have the numbers relate to something such as test scores, average temperature, etc. Then use that as the title of the graph. Somewhere in the HTML (not console), show the average of those 5 numbers.

Assignment specifications:

Rubric (Data Viz Tab)

- A for loop is used to help draw the data points and other graph elements. Do not use code repetition to draw your points or rectangles (if a bar graph) or chart labels.
- The graph is using the canvas API and no external JS libraries of any kind.
- At least 5 random numbers are generated using the random() method. These numbers must be positive integers and are shown on the graph where appropriate
- The minimum and maximum number (the range) will be provided from the user via an HTML form
- The graph is shown when user clicks a '"show graph" button the the form.
- The code that is responsible for creating the graphics for the chart is written in a function called createChart()
- The type of graph is up to you. Suggestions would be a line chart or bar chart
- The average of the data point values is shown
- Form validation - Make sure all fields validate correctly. No empty values, string where numbers are expected, and proper range values (no negative numbers)
- Each data point must have a corresponding label (Usually on the X axis)
- Follow the provided rubric

Extra Credit

If you can still fulfil all requirements but create a pie chart instead, or you go above and beyond the requirements in CSS / Aesthetics then up to 10 points extra credit could be earned.

Submission

Archive your entire project folder and upload here. Make sure your name is commented at the top of your HTML file.
 */

(function(){
    console.log("Canvas Demo");
    // Setup variables
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    // Set width and height
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;

    // Set canvas border
    ctx.canvas.style.border = "2px solid black";

    // Draw
    ctx.strokeStyle = "#FF0000";  //red line
    ctx.beginPath();
    ctx.lineWidth = 2;     //set width of line
    ctx.moveTo(0,250);     //start pin here
    ctx.lineTo(500,250);   //move pin to here
    ctx.stroke();          //render the line
    ctx.beginPath();       //start a new line
    ctx.strokeStyle = "#00ff00";  //green line
    ctx.moveTo(250,0);
    ctx.lineTo(250,500);
    ctx.stroke();
    ctx.closePath();
})();