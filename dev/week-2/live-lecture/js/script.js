// Objects! Object literal

class Car{
    constructor(make,model,mpg) {
        console.log("Car created!")
        this.make = make;
        this.model = model;
        this.mpg = mpg;
        this.driver = "";
    }
    drive(){
        console.log("Driving!");
        return this.driver + " is driving a " + this.make + " " + this.model + "that gets " + this.mpg + " mpg.";
    }
    park(){

    }
    crash(){

    }
}

const bobCar = new Car("Toyota","Camry",40);

bobCar.drive();

// Arrays!

let grades = [90,100,80,60];
// console.log(grades[2]); // Said "Grades sub 2"

console.log(getAvg([4,5,6]));
console.log(getAvg(grades));

// Adding to array via push
grades.push(100);
console.log(getAvg(grades));

function getAvg(nums){
    let total = 0;
    for (let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total/nums.length;
}

// Objects! Object literal continued...

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }
    getAvg(){
        let total = 0;
        for (let i = 0; i < this.grades.length; i++){
            total += this.grades[i];
        }
        return total/this.grades.length;
    }
}

class Main{
    constructor() {
        console.log("Main created!");
        this.classroom = [];
        document.querySelector("#add-btn").addEventListener("click", (e)=>this.onClick(e));
        document.querySelector("#add-btn").addEventListener("click", (e)=>this.display(e));
        console.log("constructor",this);
    }
    display(e){
        console.log("Display classroom!");
        for(let i = 0; i < this.classroom.length; i++){
            console.log(this.classroom[i].name);
            for (let g = 0; g < this.classroom[i].grades.length; g++){
                console.log(this.classroom[i].grades[g]);
            }
        }
    }

    //
    // constructor(formData) {
    //     this.formData[0];
    //     this.formData[2];
    // }

    onClick(e){ // Always include the e!
        // Get data from form
        let name = document.querySelector("#name").value;
        let age = parseInt(document.querySelector("#age").value);

        // Created person from data
        let person = new Person(name, age);

        // Grades
        person.grades.push(Math.floor(Math.random()*100),Math.floor(Math.random()*100));

        // Put person in the classroom
        this.classroom.push(person);

        console.log("Click!",e);
        console.log(e.target);
        console.log("click",this);
    }
    eat(){
        console.log("eat",this);
    }
}

// USE THE CODE BELOW IN PLACE OF IFFES FROM NOW ON OUTSIDE OF A CLASS OR SPECIAL LOOPING!
// Arrow functions
(()=>{
    const main = new Main();
})();

// function hello(){
//     console.log("hello");
// }

// Arrow function
const hello = ()=>{
    console.log("hello");
}

hello();

// (function(){
//     const main = new Main();
// })();

/*
Notes:

- Classes, functions, THEN IFFE's (maybe, if you want!)
 */