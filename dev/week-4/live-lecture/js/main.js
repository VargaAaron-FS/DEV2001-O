class Main{
    constructor(data) {
        this.carData = data;
        this.container = null;
        this.button = null;
        this.images = ["img.png"];

        const img = new Image();

        this.carNum = 0;
        img.src = `images/${this.images[this.carNum]}`;

        console.log("Main started!");
        // console.log(this.carData.garage);
        // console.log(this.carData.cars[0].make);
        // console.log(this.carData.cars[0].owners[0]);

        // this.carData.cars[0].owners.forEach(e=>{
        //     console.log(e);
        // })
        this.buildDOM();
    }
    buildDOM() {
        this.container = document.createElement("p");
        this.button = document.createElement("button");
        this.button.innerHTML = "Button";

        document.body.append(this.container);
        document.body.append(this.button);

        this.button.addEventListener("click", (e) => this.showInfo(e));
    }
    showInfo(e){
        console.log("click");
        this.container.innerHTML = this.carData.garage;
    }
}

(()=>{
    console.log("loaded");
    fetch('cars.json')
        .then(res => res.json())
        .then(data => {
            // console.log("promise", data);
            const main = new Main(data);
        })
        .catch(err => console.error(err));
    // console.log("pizza");
})();

// Dollar signs for Assignment 3!
const money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

// Call!
money.format(variableName)