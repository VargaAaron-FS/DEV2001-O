// Aaron Varga
// Intro to Development II
// Assignment: Object Creation
// Oct 7, 2021

/*
Assignment: Object Creation

Objective: Create instances of various custom classes including a Utility class and store the instances in an array. Array iteration is also implemented along with arrow functions and modular design.

Key topics:

- Custom and Utility classes
- Arrays
- Arrow functions
- Form validation

Overview:

You will code an application that utilizes a form to create and stores multiple instances of an object and displays their data and other calculations in the browser.

Assignment specifications:

Rubric (Object Creation Tab)

Make sure you view the assignment example to help get a better understanding of the assignment specs.

Setup

- Create a Main class that contains the majority of the logic. Do not have any code outside of a class except for the IIFE.  The IIFE will be used to instantiate the Main class only and make sure you are using the defer attribute in the HTML script tag.

The Form

- An HTML form is used to create an object of your choice. This form  must have at least 3 input fields using a combination of strings and numbers
- The above form has an add and display button. The add button when clicked, creates the object. The display button will display all of the objects data.
- Confirmation message. When an object is added, some confirmation message is displayed on the screen. Ex: "Employee added"
- Form validation. No blank fields, on invalid numeric ranges should be accepted in the form

Object and Class Creation

Create a class that the form will produce an object from. This is up to you, such as an Employee, Student, Movie, Car, etc.

- The class has at least 3 properties and 1 method. As the form instructions state, the properties must be a combination of strings and numbers.
- What the method does it up to you. It could return some string, calculate an average, or something more fun!  Just remember that it is called on each object and the result of that method is shown in the output when user clicks the the display button.
- A Utility class with one static method is used in your program

Code form and execution

- All instances created from the form are stored in an array. This is done so data from each of the objects is shown clearly in the browser when you click the display button
- A separate method call Add() in the Main class is called when the user clicks the add button. Code that is responsible for this process goes here.
- A separate method called Display() is called when the user clicks the Display All button. Code that is responsible for displaying the outputted data in the HTML goes here.

Output

Information about all the objects created from the form is displayed in the HTML and styled with clean CSS. Make sure the result of that method requirement on the object is also shown. The data must make sense and well formatted.
 */

class User{
    constructor(name,email,username,password) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

class Main{
    constructor() {
        // Empty array awaiting future data
        this.users = [];

        // Button click events
        document.querySelector("#add-btn").addEventListener("click", (e)=>this.add(e));

        document.querySelector("#display-btn").addEventListener("click", (e)=>this.display(e));
    }
    add(e){
        // Conditional to make sure passwords match before adding user to array
        // How to validate ALL at once?
        if(document.querySelector("#name").checkValidity() &&
            document.querySelector("#email").checkValidity() &&
            document.querySelector("#username").checkValidity() &&
            document.querySelector("#password").checkValidity() &&
            document.querySelector("#confirm-password").checkValidity()){

            e.preventDefault();

            if(document.querySelector("#password").value === document.querySelector("#confirm-password").value){
                // Assigning form input values to variables
                let name = document.querySelector("#name").value;
                let email = document.querySelector("#email").value;
                let username = document.querySelector("#username").value;
                let password = document.querySelector("#password").value;

                // Store new user in variable
                let user = new User(name,email,username,password);

                // Add or "push" new user to array to be stored
                this.users.push(user);

                // Create something where it adds one more to a number next to "User Database (#)"
                for (let i = 0; i < this.users.length; i++){
                    document.querySelector("#number-of-users-created").innerHTML = `(${1+i})`;
                }

                // Remove initial instructions
                document.querySelector("#initial-instructions").style.display = "none";

                // Do not show error message if passwords do not match
                document.querySelector("#password-confirmation-error-msg").style.display = "none";

                // Show successful user creation message
                document.querySelector("#user-created-successfully-msg").style.display = "block";

                // Show instructions after add
                document.querySelector("#instructions-after-add").style.display = "block";

                // Reset all fields on add button click for next user creation
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#username").value = "";
                document.querySelector("#password").value = "";
                document.querySelector("#confirm-password").value = "";
            }
            else{
                // Do not show successful user creation message
                document.querySelector("#user-created-successfully-msg").style.display = "none";

                // Do not show instructions after add
                document.querySelector("#instructions-after-add").style.display = "none";

                // Show error message if passwords do not match
                document.querySelector("#password-confirmation-error-msg").style.display = "block";
            }
            }
    }
    display(e){
        for (let i = 0; i < this.users.length; i++){
            console.log(this.users[i]);

            // Make something say you need to create a user first if they click this button before creating 1 user!

            // Remove initial instructions
            document.querySelector("#initial-instructions").style.display = "none";

            // Do not show successful user creation message
            document.querySelector("#user-created-successfully-msg").style.display = "none";

            // Do not show instructions after add
            document.querySelector("#instructions-after-add").style.display = "none";

            // Do not show error message if passwords do not match
            document.querySelector("#password-confirmation-error-msg").style.display = "none";
        }
    }
}

// IIFE arrow function
(()=>{
    // Instantiate Main class
    const main = new Main();
})();