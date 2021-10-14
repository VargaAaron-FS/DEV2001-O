// Aaron Varga
// Intro to Development II
// Assignment: Employee Tracker
// October 12, 2021

/*
Instructions

Assignment: Employee Tracker

Objective: Create a small employee tracker program that will utilize inheritance, modular design, and the use of data structures and more advanced array methods.

Key topics:
- Inheritance
- Array methods with iteration
- Modular design

Overview:

You will code a console based application that will track employee objects. You will be able to add, delete, and modify the employee data.

Assignment specifications:

Rubric (Employee tracker tab)

Make sure you view the assignment example to help get a better understanding of the assignment specs.

Setup
- Create a Main class that contains the majority of the logic. Do not have any code outside of a class except for the IIFE. The IIFE will be used to instantiate the Main class only and make sure you are using the defer attribute in the HTML script tag.

Classes

Besides the Main class, you will need to create the following classes:
- Employee - This is the super class or base class for the employee. It will contain all the necessary methods and properties that are intended to be inherited. Hint : The class should NOT be instantiated. You do not need any methods in this class.
- PartTime - This class will extend Employee and contain only the properties needed for a part time employee. It will also have a calculatePay() method. This class only has 3 properties, payRate, hours, and employee type.
- FullTime - This class will extend Employee and contain only the properties needed for a full time employee. It will also have a calculatePay() method. Full time is an employee who works 40+hours. This class only has 2 properties, payRate, and employee Type

The PartTime and FullTime class will inherit the name, age, and annualSalary properties from the Employee Class.

The calculatePay() method

This method is on both of the concrete classes (PartTime and FullTime) and should calculate the annual pay based on 52 weeks and assign that value to the annual salary property. Full time employees have a 40 hour work week and part time employees have some other value <40 depending on user input. Also, make sure there is a $1000 deduction in the annual pay for full time employees because of medical insurance costs. Hint: The formulas should be different on each class's calculatePay() method.

Ex 1: A Full Time employee working 40 hours a week that earns a whopping $5 per hour should earn an annual salary of $9400

Ex 2: A Part Time employee working 12 hours a week that earns a whopping $8 per hour should earn an annual salary of $4992

The Main Menu

The following menu options are required:
- Add Employee - Adds an employee to the table. This option will prompt the user the name, age, payrate and number of hours per week. Depending on the number of hours worked, a part time or full time employee is then instantiated and added to the employees array. Once added, display the updated table in the console. Hint: Use the Array split() method to convert the string prompt to an array.
- Remove Employee - Removes the desired employee from the employees array. This must be done by the employee number shown on the table in the console and also by typing the name of the employee. Once removed, display the updated table in the console. Hint: Use the filter() method to help you remove the employee by its name.
- Edit Employee - This option will allow to edit the payrate only for the chosen employee. For this option, you can just select the employee you want to edit by its employee number on the table shown in the console. Make sure the employee number starts at 1 in the console. Once edited, then display the updated table in the console.
- Display Employees - Display the employees information in the console. The Employee number(starting with 1), name, salary, hours, pay, and employee type is shown for each employee. Have a console.log() to show the column headers using tabs "\t" such as:

Javascript
console.log("Bob's Burger Joint");
console.log("ID\tName\tSalary\thrs\tpay\tFT/PT");

Code execution

3 employees are hard coded initially. Make sure the table is displayed showing those 3 employees when program starts along with the 4 menu options.
- Each menu option functionality is coded in its own function in the Main Class.
- An array is used to hold all employee instances.
- Console.Log() is used to display the employees in the console.
- A filter() method is used to delete an employee
- Make sure all code is in a class as stated in the setup instructions.
- Use the provided screen shot to get an idea of output expectations.

Sample output

Things to note:
- Nice use of tabs in the console.
- Employee number starting at 1 not 0
- The Data that is shown for each employee.

Submission

Commit you files and provide Github link and also zip your project file and submit here on FSO
 */

// Super class (or base class) for employees
class Employee{
    constructor(name,age,annualSalary) {
        this.name = name;
        this.age = age;
        this.annualSalary = annualSalary;
        console.log("Employee created!");
    }
}

class PartTime extends Employee{
    constructor(name,age,annualSalary,payRate,hours,employeeType) {
        super(name,age,annualSalary);
        this.payRate = payRate;
        this.hours = hours;
        this.employeeType = employeeType;
        console.log("PartTime Employee created!");
    }
    calculatePay(){
        console.log(this.hours*this.payRate*52);
    }
}

class FullTime extends Employee{
    constructor(name,age,annualSalary,payRate,employeeType) {
        super(name,age,annualSalary);
        this.payRate = payRate;
        this.employeeType = employeeType;
        console.log("FullTime Employee created!");
    }
    calculatePay(){
        console.log((40*this.payRate*52)-1000);
    }
}

class Main{
    constructor() {
        console.log("Main created!");

        // Button click events
        // Employee tracker tools buttons
        document.querySelector("#add-employee-btn").addEventListener("click", (e)=>this.addEmployeeForm(e));
        document.querySelector("#remove-employee-btn").addEventListener("click", (e)=>this.removeEmployeeForm(e));
        document.querySelector("#edit-employee-btn").addEventListener("click", (e)=>this.editEmployeeForm(e));

        // Cancel button
        document.querySelector("#cancel-add-btn").addEventListener("click", (e)=>this.cancel(e));
        document.querySelector("#cancel-remove-btn").addEventListener("click", (e)=>this.cancel(e));
        document.querySelector("#cancel-edit-btn").addEventListener("click", (e)=>this.cancel(e));

        // Form submission buttons
        document.querySelector("#add-submit-btn").addEventListener("click", (e)=>this.addEmployee(e));
        document.querySelector("#remove-submit-btn").addEventListener("click", (e)=>this.removeEmployee(e));
        document.querySelector("#edit-submit-btn").addEventListener("click", (e)=>this.editEmployee(e));
    }
    addEmployeeForm(e){
        document.querySelector("#add-employee-form-popup").style.display = "flex";
        document.querySelector(".popup-background").style.display = "flex";

        document.querySelector("#edit-employee-form-popup").style.display = "none";
    }
    removeEmployeeForm(e){
        document.querySelector("#remove-employee-form-popup").style.display = "flex";
        document.querySelector(".popup-background").style.display = "flex";

        document.querySelector("#add-employee-form-popup").style.display = "none";
        document.querySelector("#edit-employee-form-popup").style.display = "none";
    }
    editEmployeeForm(e){
        document.querySelector("#edit-employee-form-popup").style.display = "flex";
        document.querySelector(".popup-background").style.display = "flex";
    }
    displayEmployees(){
        // May not need if it is okay with Instructor to auto-show list and have it update in real-time/automatically
    }
    cancel(e){
        // Close all/any forms on cancel
        document.querySelector("#add-employee-form-popup").style.display = "none";
        document.querySelector("#remove-employee-form-popup").style.display = "none";
        document.querySelector("#edit-employee-form-popup").style.display = "none";
        document.querySelector(".popup-background").style.display = "none";

        // Reset form if partially filled out before cancelling so form is blank next time form is opened
        document.querySelector("#add-employee-form").reset();
        document.querySelector("#remove-employee-form").reset();
        document.querySelector("#edit-employee-form").reset();
    }
    addEmployee(e){
        console.log("Employee added!");
    }
    removeEmployee(e){
        console.log("Employee removed!");
    }
    editEmployee(e){
        console.log("Employee edited!");
    }
}

(()=>{
    const main = new Main();
})();