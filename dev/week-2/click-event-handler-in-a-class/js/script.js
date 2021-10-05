class Demo{
    constructor() {
        console.log("Demo started.");
        this.food = "pizza";
        this.favFoods = [3,4,5,6];
        document.querySelector("#btn").addEventListener("click", e => this.onClick(e));
        // this.onClick(null);
    }
    onClick(e){
        console.log("Clicked!");
        console.log(this.favFoods);
        console.log(this, e.target);
    }
}

(()=>{
    const demo = new Demo();
})();