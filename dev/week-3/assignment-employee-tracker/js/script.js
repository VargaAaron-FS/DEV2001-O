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
        this.employeeType = "PT";
        console.log("PartTime Employee created!");
    }
    calculatePay(){
        console.log(this.hours*this.payRate*52);
    }
}

class FullTime extends Employee{
    constructor(name,age,annualSalary,payRate,hours,employeeType) {
        super(name,age,annualSalary);
        this.payRate = payRate;
        this.hours = 40;
        this.employeeType = "FT";
        console.log("FullTime Employee created!");
    }
    calculatePay(){
        console.log((this.hours*this.payRate*52)-1000);
    }
}

class Main{
    constructor() {
        console.log("Main created!");

        this.employees = [];

        // Initial employees
        // Inject Scott's data into HTML
        (()=>{
            const scott = new FullTime("Scott",40,19800,10, 40,"FT");
            this.employees.push(scott);

            // Get a reference to the table
            let tableRef = document.getElementById(`employee-list-table`);

            // Insert a row at the end of the table
            let newRow = tableRef.insertRow(-1);

            // Insert a cell in the row at index 0
            let newCell = newRow.insertCell(0);
            let newCell2 = newRow.insertCell(1);
            let newCell3 = newRow.insertCell(2);
            let newCell4 = newRow.insertCell(3);
            let newCell5 = newRow.insertCell(4);
            let newCell6 = newRow.insertCell(5);

            // Append a text node to the cell
            let newId = document.createTextNode(`${this.employees.length}`);
            let newName = document.createTextNode(`${scott.name}`);
            let newAnnualSalary = document.createTextNode(`${scott.annualSalary}`);
            let newHours = document.createTextNode(`${scott.hours}`);
            let newPayRate = document.createTextNode(`${scott.payRate}`);
            let newEmployeeType = document.createTextNode(`${scott.employeeType}`);
            newCell.appendChild(newId);
            newCell2.appendChild(newName);
            newCell3.appendChild(newAnnualSalary);
            newCell4.appendChild(newHours);
            newCell5.appendChild(newPayRate);
            newCell6.appendChild(newEmployeeType);

            // Add employee to Remove form dropdown
            let selectRemove = document.getElementById('remove-by-name');

            let optRemove = document.createElement('option');
            optRemove.value = scott.name;
            optRemove.innerHTML = scott.name;
            selectRemove.appendChild(optRemove);

            // Add employee to Edit form dropdown
            let selectEdit = document.getElementById('edit-by-name');

            let optEdit = document.createElement('option');
            optEdit.value = scott.name;
            optEdit.innerHTML = scott.name;
            selectEdit.appendChild(optEdit);
        })();

        // Inject Dave's data into HTML
        (()=>{
            const dave = new FullTime("Dave",50,9400,5, 40,"FT");
            this.employees.push(dave);

            // Get a reference to the table
            let tableRef = document.getElementById(`employee-list-table`);

            // Insert a row at the end of the table
            let newRow = tableRef.insertRow(-1);

            // Insert a cell in the row at index 0
            let newCell = newRow.insertCell(0);
            let newCell2 = newRow.insertCell(1);
            let newCell3 = newRow.insertCell(2);
            let newCell4 = newRow.insertCell(3);
            let newCell5 = newRow.insertCell(4);
            let newCell6 = newRow.insertCell(5);

            // Append a text node to the cell
            let newId = document.createTextNode(`${this.employees.length}`);
            let newName = document.createTextNode(`${dave.name}`);
            let newAnnualSalary = document.createTextNode(`${dave.annualSalary}`);
            let newHours = document.createTextNode(`${dave.hours}`);
            let newPayRate = document.createTextNode(`${dave.payRate}`);
            let newEmployeeType = document.createTextNode(`${dave.employeeType}`);
            newCell.appendChild(newId);
            newCell2.appendChild(newName);
            newCell3.appendChild(newAnnualSalary);
            newCell4.appendChild(newHours);
            newCell5.appendChild(newPayRate);
            newCell6.appendChild(newEmployeeType);

            // Add employee to Remove form dropdown
            let selectRemove = document.getElementById('remove-by-name');

            let optRemove = document.createElement('option');
            optRemove.value = dave.name;
            optRemove.innerHTML = dave.name;
            selectRemove.appendChild(optRemove);

            // Add employee to Edit form dropdown
            let selectEdit = document.getElementById('edit-by-name');

            let optEdit = document.createElement('option');
            optEdit.value = dave.name;
            optEdit.innerHTML = dave.name;
            selectEdit.appendChild(optEdit);
        })();

        // Inject Lisa's data into HTML
        (()=>{
            const lisa = new PartTime("Lisa",30,4992,8, 12,"PT");
            this.employees.push(lisa);

            // function addRow(tableID) {
            // Get a reference to the table
            let tableRef = document.getElementById(`employee-list-table`);

            // Insert a row at the end of the table
            let newRow = tableRef.insertRow(-1);

            // Insert a cell in the row at index 0
            let newCell = newRow.insertCell(0);
            let newCell2 = newRow.insertCell(1);
            let newCell3 = newRow.insertCell(2);
            let newCell4 = newRow.insertCell(3);
            let newCell5 = newRow.insertCell(4);
            let newCell6 = newRow.insertCell(5);

            // Append a text node to the cell
            let newId = document.createTextNode(`${this.employees.length}`);
            let newName = document.createTextNode(`${lisa.name}`);
            let newAnnualSalary = document.createTextNode(`${lisa.annualSalary}`);
            let newHours = document.createTextNode(`${lisa.hours}`);
            let newPayRate = document.createTextNode(`${lisa.payRate}`);
            let newEmployeeType = document.createTextNode(`${lisa.employeeType}`);
            newCell.appendChild(newId);
            newCell2.appendChild(newName);
            newCell3.appendChild(newAnnualSalary);
            newCell4.appendChild(newHours);
            newCell5.appendChild(newPayRate);
            newCell6.appendChild(newEmployeeType);

            // Add employee to Remove form dropdown
            let selectRemove = document.getElementById('remove-by-name');

            let optRemove = document.createElement('option');
            optRemove.value = lisa.name;
            optRemove.innerHTML = lisa.name;
            selectRemove.appendChild(optRemove);

            // Add employee to Edit form dropdown
            let selectEdit = document.getElementById('edit-by-name');

            let optEdit = document.createElement('option');
            optEdit.value = lisa.name;
            optEdit.innerHTML = lisa.name;
            selectEdit.appendChild(optEdit);
            // }
        })();

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
        // Show add employee form
        document.querySelector("#add-employee-form-popup").style.display = "flex";
        document.querySelector(".popup-background").style.display = "flex";

        // Set immediate focus on first input field for usability
        (()=>{
            document.querySelector("#add-name").focus();
        })();

        // Add where if you click the background you will close the form
        document.querySelector(".popup-background").addEventListener("click", function(e){
            // Close add employee form
            document.querySelector("#add-employee-form-popup").style.display = "none";
            document.querySelector(".popup-background").style.display = "none";
        })
    }
    removeEmployeeForm(e){
        // Show remove employee form
        document.querySelector("#remove-employee-form-popup").style.display = "flex";
        document.querySelector(".popup-background").style.display = "flex";

        // Alphabetize dropdown list
        function sortList() {
            let list, i, switching, b, shouldSwitch;
            list = document.getElementById("remove-by-name");
            switching = true;
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
                // start by saying: no switching is done:
                switching = false;
                b = list.getElementsByTagName("option");
                // Loop through all list-items:
                for (i = 0; i < (b.length - 1); i++) {
                    // start by saying there should be no switching:
                    shouldSwitch = false;
                    /* check if the next item should
                    switch place with the current item: */
                    if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                        /* if next item is alphabetically
                        lower than current item, mark as a switch
                        and break the loop: */
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /* If a switch has been marked, make the switch
                    and mark the switch as done: */
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
        }
        sortList();

        // Set immediate focus on first input field for usability
        (()=>{
            document.querySelector("#remove-by-name").focus();
        })();

        // Add where if you click the background you will close the form
        document.querySelector(".popup-background").addEventListener("click", function(e){
            // Close add employee form
            document.querySelector("#remove-employee-form-popup").style.display = "none";
            document.querySelector(".popup-background").style.display = "none";
        })
    }
    editEmployeeForm(e){
        // Show edit employee form
        document.querySelector("#edit-employee-form-popup").style.display = "flex";
        document.querySelector(".popup-background").style.display = "flex";

        // Alphabetize dropdown list
        function sortList() {
            let list, i, switching, b, shouldSwitch;
            list = document.getElementById("edit-by-name");
            switching = true;
            /* Make a loop that will continue until
            no switching has been done: */
            while (switching) {
                // start by saying: no switching is done:
                switching = false;
                b = list.getElementsByTagName("option");
                // Loop through all list-items:
                for (i = 0; i < (b.length - 1); i++) {
                    // start by saying there should be no switching:
                    shouldSwitch = false;
                    /* check if the next item should
                    switch place with the current item: */
                    if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                        /* if next item is alphabetically
                        lower than current item, mark as a switch
                        and break the loop: */
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /* If a switch has been marked, make the switch
                    and mark the switch as done: */
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
        }
        sortList();

        // Set immediate focus on first input field for usability
        (()=>{
            document.querySelector("#edit-by-name").focus();
        })();

        // Add where if you click the background you will close the form
        document.querySelector(".popup-background").addEventListener("click", function(e){
            // Close add employee form
            document.querySelector("#edit-employee-form-popup").style.display = "none";
            document.querySelector(".popup-background").style.display = "none";
        })
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

        // Remove error messages on cancel
        document.querySelector("#edit-employee-error-msg").style.display = "none";
        document.querySelector("#remove-employee-error-msg").style.display = "none";
    }
    addEmployee(e){
        if(document.querySelector("#add-name").checkValidity() &&
            document.querySelector("#add-age").checkValidity() &&
            document.querySelector("#add-payrate").checkValidity() &&
            document.querySelector("#add-hours").checkValidity()){

            let name = document.querySelector("#add-name").value;
            let age = document.querySelector("#add-age").value;
            let payRate = document.querySelector("#add-payrate").value;
            let hours = document.querySelector("#add-hours").value;

            if(hours < 40){
                let annualSalary = (hours * payRate) * 52;

                let employee = new PartTime(name,age,annualSalary,payRate,hours);

                // Add or "push" new user to array to be stored
                this.employees.push(employee);

                // Insert success message
                document.querySelector("#success-msg").innerHTML = "<i class='fas fa-check'></i> Employee successfully created!";
                // Show success  message
                document.querySelector("#success-msg").style.display = "block";

                // Get a reference to the table
                let tableRef = document.getElementById(`employee-list-table`);

                // Insert a row at the end of the table
                let newRow = tableRef.insertRow(-1);

                // Insert a cell in the row at index 0
                let newCell = newRow.insertCell(0);
                let newCell2 = newRow.insertCell(1);
                let newCell3 = newRow.insertCell(2);
                let newCell4 = newRow.insertCell(3);
                let newCell5 = newRow.insertCell(4);
                let newCell6 = newRow.insertCell(5);

                // Append a text node to the cell
                let newId = document.createTextNode(`${this.employees.length}`);
                let newName = document.createTextNode(`${employee.name}`);
                let newAnnualSalary = document.createTextNode(`${employee.annualSalary}`);
                let newHours = document.createTextNode(`${employee.hours}`);
                let newPayRate = document.createTextNode(`${employee.payRate}`);
                let newEmployeeType = document.createTextNode(`${employee.employeeType}`);
                newCell.appendChild(newId);
                newCell2.appendChild(newName);
                newCell3.appendChild(newAnnualSalary);
                newCell4.appendChild(newHours);
                newCell5.appendChild(newPayRate);
                newCell6.appendChild(newEmployeeType);

                // Add employee to Remove form dropdown
                let selectRemove = document.getElementById('remove-by-name');

                let optRemove = document.createElement('option');
                optRemove.value = employee.name;
                optRemove.innerHTML = employee.name;
                selectRemove.appendChild(optRemove);

                // Add employee to Edit form dropdown
                let selectEdit = document.getElementById('edit-by-name');

                let optEdit = document.createElement('option');
                optEdit.value = employee.name;
                optEdit.innerHTML = employee.name;
                selectEdit.appendChild(optEdit);
            }
            else{
                let annualSalary = (hours*payRate*52)-1000;

                let employee = new FullTime(name,age,annualSalary,payRate,hours);

                // Add or "push" new user to array to be stored
                this.employees.push(employee);

                // Insert success message
                document.querySelector("#success-msg").innerHTML = "<i class='fas fa-check'></i> Employee successfully created!";
                // Show success  message
                document.querySelector("#success-msg").style.display = "block";

                // Get a reference to the table
                let tableRef = document.getElementById(`employee-list-table`);

                // Insert a row at the end of the table
                let newRow = tableRef.insertRow(-1);

                // Insert a cell in the row at index 0
                let newCell = newRow.insertCell(0);
                let newCell2 = newRow.insertCell(1);
                let newCell3 = newRow.insertCell(2);
                let newCell4 = newRow.insertCell(3);
                let newCell5 = newRow.insertCell(4);
                let newCell6 = newRow.insertCell(5);

                // Append a text node to the cell
                let newId = document.createTextNode(`${this.employees.length}`);
                let newName = document.createTextNode(`${employee.name}`);
                let newAnnualSalary = document.createTextNode(`${employee.annualSalary}`);
                let newHours = document.createTextNode(`${employee.hours}`);
                let newPayRate = document.createTextNode(`${employee.payRate}`);
                let newEmployeeType = document.createTextNode(`${employee.employeeType}`);
                newCell.appendChild(newId);
                newCell2.appendChild(newName);
                newCell3.appendChild(newAnnualSalary);
                newCell4.appendChild(newHours);
                newCell5.appendChild(newPayRate);
                newCell6.appendChild(newEmployeeType);

                // Add employee to Remove form dropdown
                let selectRemove = document.getElementById('remove-by-name');

                let optRemove = document.createElement('option');
                optRemove.value = employee.name;
                optRemove.innerHTML = employee.name;
                selectRemove.appendChild(optRemove);

                // Add employee to Edit form dropdown
                let selectEdit = document.getElementById('edit-by-name');

                let optEdit = document.createElement('option');
                optEdit.value = employee.name;
                optEdit.innerHTML = employee.name;
                selectEdit.appendChild(optEdit);
            }

            // Notifications are removed after 5 seconds
            setTimeout(function(){
                document.querySelector("#success-msg").style.display = "none";
            }, 3000);

            // Reset form upon submission
            document.querySelector("#add-employee-form").reset();

            e.preventDefault();

            // Auto-close form once new employee is added
            document.querySelector("#add-employee-form-popup").style.display = "none";
            document.querySelector(".popup-background").style.display = "none";
        }
        console.log("Employee add button clicked!");
    }
    removeEmployee(e){
        e.preventDefault();
        if(document.querySelector("#remove-by-id").value < 1){
            e.preventDefault();
            if(document.querySelector("#remove-by-name").value === "Select a Name"){
                e.preventDefault();

                // Display error message
                document.querySelector("#remove-employee-error-msg").style.display = "block";
                document.querySelector("#remove-employee-error-msg").innerHTML = "Please either choose an employee by name or enter an ID number.";
            }
            else{
                console.log("Name was selected!");
                e.preventDefault();

                // Do not display error message
                document.querySelector("#remove-employee-error-msg").style.display = "none";

                // Assign form selection to variable
                let removeEmployeeName = document.querySelector("#remove-by-name").value;

                // Find the index of selected name value from form
                const findIndex = this.employees.map(e => e.name).indexOf(removeEmployeeName);

                // Remove employee selected
                this.employees.splice(findIndex,1);

                // Create variable to assign table element
                let tableRef = document.querySelector("#employee-list-table");

                // Delete row related to name selection
                tableRef.deleteRow(findIndex+1);

                // Remove employee from Remove form dropdown NOT DONE
                let removeNameList = document.getElementById("remove-by-name");
                for (let i = 0; i<removeNameList.length; i++) {
                    if (removeNameList.options[i].value == `${removeEmployeeName}`)
                        removeNameList.remove(i);
                }

                // Remove employee from Edit form dropdown NOT DONE
                let editNameList = document.getElementById("edit-by-name");
                for (let i = 0; i<editNameList.length; i++) {
                    if (editNameList.options[i].value == `${removeEmployeeName}`)
                        editNameList.remove(i);
                }

                // Update indexes (IDs) after removal
                for (let i = 0; i < this.employees.length; i++){
                    let updatedTableId = document.getElementById("employee-list-table").rows[i+1].cells;
                    updatedTableId[0].innerHTML = `${i+1}`;
                }

                // Close employee form
                document.querySelector("#remove-employee-form-popup").style.display = "none";
                document.querySelector(".popup-background").style.display = "none";

                // Insert success message
                document.querySelector("#success-msg").innerHTML = "<i class='fas fa-check'></i> Employee successfully removed!";
                // Show success message
                document.querySelector("#success-msg").style.display = "block";

                // Notifications are removed after 5 seconds
                setTimeout(function(){
                    document.querySelector("#success-msg").style.display = "none";
                }, 3000);
            }
        }
        else{
            console.log("ID was entered!");
            e.preventDefault();

            // Do not display error message
            document.querySelector("#remove-employee-error-msg").style.display = "none";

            // Assign form selection to variable
            let removeEmployeeId = document.querySelector("#remove-by-id").value;

            console.log(removeEmployeeId);

            // Create variable to assign table element
            let tableRef = document.querySelector("#employee-list-table");

            // Delete row related to name selection
            tableRef.deleteRow(`${removeEmployeeId}`);

            let removeEmployeeName = this.employees[document.querySelector("#remove-by-id").value-1];

            // Remove employee selected
            this.employees.splice(removeEmployeeId-1,1);

            console.log(this.employees);

            console.log(removeEmployeeName);

            // Remove employee from Remove form dropdown
            let removeNameList = document.getElementById("remove-by-name");
            for (let i = 0; i<removeNameList.length; i++) {
                if (removeNameList.options[i].value == `${removeEmployeeName.name}`)
                    removeNameList.remove(i);
            }

            // Remove employee from Edit form dropdown
            let editNameList = document.getElementById("edit-by-name");
            for (let i = 0; i<editNameList.length; i++) {
                if (editNameList.options[i].value == `${removeEmployeeName.name}`)
                    editNameList.remove(i);
            }

            // Update indexes (IDs) after removal
            for (let i = 0; i < this.employees.length; i++){
                let updatedTableId = document.getElementById("employee-list-table").rows[i+1].cells;
                updatedTableId[0].innerHTML = `${i+1}`;
            }

            // Close employee form
            document.querySelector("#remove-employee-form-popup").style.display = "none";
            document.querySelector(".popup-background").style.display = "none";

            // Insert success message
            document.querySelector("#success-msg").innerHTML = "<i class='fas fa-check'></i> Employee successfully removed!";
            // Show success message
            document.querySelector("#success-msg").style.display = "block";

            // Notifications are removed after 5 seconds
            setTimeout(function(){
                document.querySelector("#success-msg").style.display = "none";
            }, 3000);
        }
        // Reset form upon submission
        document.querySelector("#remove-employee-form").reset();

        console.log("Employee remove button clicked!");
    }
    editEmployee(e){
        e.preventDefault();
        if(document.querySelector("#edit-by-id").value < 1){
            e.preventDefault();
            if(document.querySelector("#edit-by-name").value === "Select a Name"){
                e.preventDefault();

                // Display error message
                document.querySelector("#edit-employee-error-msg").style.display = "block";
                document.querySelector("#edit-employee-error-msg").innerHTML = "Please either choose an employee by name or enter an ID number.";
            }
            else{
                console.log("Name was selected!");
                e.preventDefault();

                // Do not display error message
                document.querySelector("#edit-employee-error-msg").style.display = "none";

                // Assign form selection to variable
                let editEmployeeName = document.querySelector("#edit-by-name").value;

                // Find the index of selected name value from form
                const findIndex = this.employees.map(e => e.name).indexOf(editEmployeeName);

                // Remove employee selected
                this.employees.splice(findIndex,1);

                // Create variable to assign table element
                let tableRef = document.querySelector("#employee-list-table");

                // Delete row related to name selection
                tableRef.deleteRow(findIndex+1);

                // Remove employee from Remove form dropdown NOT DONE
                let removeNameList = document.getElementById("remove-by-name");
                for (let i = 0; i<removeNameList.length; i++) {
                    if (removeNameList.options[i].value == `${removeEmployeeName}`)
                        removeNameList.remove(i);
                }

                // Remove employee from Edit form dropdown NOT DONE
                let editNameList = document.getElementById("edit-by-name");
                for (let i = 0; i<editNameList.length; i++) {
                    if (editNameList.options[i].value == `${removeEmployeeName}`)
                        editNameList.remove(i);
                }

                // Update indexes (IDs) after removal
                for (let i = 0; i < this.employees.length; i++){
                    let updatedTableId = document.getElementById("employee-list-table").rows[i+1].cells;
                    updatedTableId[0].innerHTML = `${i+1}`;
                }

                // Close employee form
                document.querySelector("#edit-employee-form-popup").style.display = "none";
                document.querySelector(".popup-background").style.display = "none";

                // Insert success message
                document.querySelector("#success-msg").innerHTML = "<i class='fas fa-check'></i> Employee successfully removed!";
                // Show success message
                document.querySelector("#success-msg").style.display = "block";

                // Notifications are removed after 5 seconds
                setTimeout(function(){
                    document.querySelector("#success-msg").style.display = "none";
                }, 3000);
            }
        }
        else{
            console.log("ID was entered!");
            e.preventDefault();

            // Do not display error message
            document.querySelector("#edit-employee-error-msg").style.display = "none";

            // Assign form selection to variable
            let editEmployeeId = document.querySelector("#edit-by-id").value;

            console.log(editEmployeeId);

            // Create variable to assign table element
            let tableRef = document.querySelector("#employee-list-table");

            // Delete row related to name selection
            tableRef.deleteRow(`${editEmployeeId}`);

            let editEmployeeName = this.employees[document.querySelector("#edit-by-id").value-1];

            // Remove employee selected
            this.employees.splice(editEmployeeId-1,1);

            console.log(this.employees);

            console.log(editEmployeeName);

            // Close employee form
            document.querySelector("#remove-employee-form-popup").style.display = "none";
            document.querySelector(".popup-background").style.display = "none";

            // Insert success message
            document.querySelector("#success-msg").innerHTML = "<i class='fas fa-check'></i> Employee successfully removed!";
            // Show success message
            document.querySelector("#success-msg").style.display = "block";

            // Notifications are removed after 5 seconds
            setTimeout(function(){
                document.querySelector("#success-msg").style.display = "none";
            }, 3000);
        }
        // Reset form upon submission
        document.querySelector("#edit-employee-form").reset();

        console.log("Employee edit save button clicked!");
    }
}

(()=>{
    const main = new Main();
})();