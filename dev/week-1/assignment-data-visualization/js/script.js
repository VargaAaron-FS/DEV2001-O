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

// Setting up canvas
function createChart(min, max) {
    // Setup variables
    const canvas = document.querySelector("#canvas-graph");
    const ctx = canvas.getContext("2d");

    function randomNumsGen() {
        let total = 0;
        let randomNums = 0;

        for (let i = 0; i < 5; i++) {
            randomNums = Math.floor(Math.random() * (max - min) + 1);

            // Draw random bar graph columns
            ctx.beginPath();
            ctx.strokeStyle = "transparent";
            ctx.fillStyle = "orangered";
            ctx.lineWidth = 2;
            ctx.rect(12.5 + i * 100, 330, 75, randomNums * -1);
            ctx.stroke();
            ctx.fill();

            // Show numbers above columns
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fillText(`${randomNums}`, 34.5 + i * 100, randomNums * -1 + 320);
            ctx.stroke();
            ctx.fill();
            total += randomNums // this is the average
            // Average calc = (total/5),x,y
        }
        // Display average
        ctx.beginPath();
        ctx.font = "18px Poppins";
        ctx.fillText(`Average Class Graduation Size: ${total / 5}`, 90, 425);
        ctx.stroke();
        ctx.fill();
    }

    // Set canvas width and height
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;

    // Set canvas background color
    ctx.canvas.style.backgroundColor = "#eeeeee";

    // Display graph title
    ctx.font = "24px Poppins";
    ctx.fillText(`# Students Graduated Per Year`, 65, 75);

    // Display graph column titles 1-5
    for (let i = 0; i < 5; i++) {
        ctx.font = "16px Poppins";
        ctx.fillText(`${i + 2015}`, 30.5 + i * 100, 350);
    }

    randomNumsGen();
}

// Setting up button function
(function () {
    document.querySelector("#show-graph-btn").addEventListener("click", function (e) {
        // Validating form fields
        if (document.querySelector("#min-num-input").reportValidity() &&
            document.querySelector("#max-num-input").reportValidity()) {

            // Store input to variables
            let minNumInput = parseInt(document.querySelector("#min-num-input").value);
            let maxNumInput = parseInt(document.querySelector("#max-num-input").value);

            // min/max validation to make sure min is not greater than max value
            if (minNumInput >= maxNumInput) {
                document.querySelector("#success-msg").style.display = "none";

                document.querySelector("#min-max-error-msg").style.display = "block";

                document.querySelector("#graph-preview-box").style.display = "flex";

                document.querySelector("#graph-results-container").style.display = "none";

                // Change button text to "Recalculate"
                document.querySelector("#show-graph-btn").value = "Calculate Graph";
            } else {
                document.querySelector("#success-msg").style.display = "block";

                // Change button text to "Recalculate"
                document.querySelector("#show-graph-btn").value = "Recalculate Graph";

                // Hide error msg if displayed
                document.querySelector("#min-max-error-msg").style.display = "none";

                // Hide preview box
                document.querySelector("#graph-preview-box").style.display = "none";

                // Show graph
                document.querySelector("#graph-results-container").style.display = "block";

                // Call createChart function
                createChart(minNumInput, maxNumInput);
            }
        }
    });
})();