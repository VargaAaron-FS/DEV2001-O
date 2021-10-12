// Week 3 Classes

// Inheritance

/*
Keywords:
- Concrete = class that you instantiate.

 */

class Person{ // Super-class - to be inherited from (template for all people) - (Not meant to be instantiated)
    constructor(name,age,social) {
        console.log("Person created!");
        this.name = name;
        this.age = age;
        this.social = social;
    }
    eat(){
        console.log(this.name,"is eating");
    }
}

class Student extends Person{
    constructor(name,age,social,grades) {
        super(name,age,social); // Brings in Name, age, and social from Person class (inherits from Person class)
        console.log("Student created!");
        this.grades = grades;
    }
    eat(){ // Overrides previous eat method
        console.log("Sorry, can't eat. No money!");
    }
}

class Employee extends Person{
    constructor(name,age,social) {
        super(name,age,social); // Put first as best practice!
        console.log("Employee created!");
        this.salary = 0;
    }
    eat(){
        console.log("I'm having a steak!");
        super.eat(); // Run eat method of parent class
    }
}

class Actor extends Person{
    constructor(name,age,social) {
        super(name,age,social);
        console.log("Actor created!");
        this.movieList = ["movie1","movie2","movie3"];
    }
}

// Arrow function IIFE
(()=>{
    const student = new Student("aaron",32,"000000000",[70,80,40]);
    const student2 = new Student("bob",40,"000022000",[90,70,100]);

    let students = [student,student2];

    const employee = new Employee("chris", 25, "000000000");

    // students.forEach(student=>{ // Loop through each student's name
    //     console.log(student.name);
    //     student.grades.forEach(grade=>{ // Loop through each student's grades per name
    //         console.log(grade);
    //     })
    // })

    // student2.grades.forEach(e=>{ // Use to iterate through an array!
    //     console.log(e);
    // })

    // student.eat();
    employee.eat();
})();







