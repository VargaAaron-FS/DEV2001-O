// Sample exercise

class Person{
    constructor(n,a,g) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }
}

class Swimmer extends Person{
    constructor(name,age,gender,pool,dive,speed) {
        super(name,age,gender);
        this.speed = speed;
        this.dive = dive;
        this.pool = pool;
    }
}

class MovieStar extends Person{
    constructor() {
        super();
        this.movies = ["movie1","movie2"];
    }
}

// const swimmer = new Swimmer();
// swimmer.name = "Michael Phelps";
// swimmer.age = 30;
// swimmer.pool = "Backyard";
// swimmer.dive = "Cannonball";
// swimmer.speed = 5;

// Alternative way (all properties at once)
const swimmer2 = new Swimmer("aaron",32, "male,","ocean","suicide dive",2);

console.log(swimmer2);








