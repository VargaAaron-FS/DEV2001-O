class MovieVenue{
    constructor(name,city,state){
        //create properties here
    }
}

class Movie{
    constructor(title, rating, duration,image){
      //create properties here
    }
}

class Main{
    constructor(){
        console.log("main started");
        //properties - You should not need more than what is listed here,
        //but you are allowed to change them if needed

        /* JSON data
         ***Uncomment and finish the line of code on line 23 that will parse the jsonString variable
        (located in data.js file) */

        //this.JSONdata = <-- finish this line;

        //HTML element to display movie theatre information
        this.theatre = null;

        //HTML element to contain movie information (title, rating, duration)
        this.movieInfo = null;

        //variable to track the current movie being shown
        this.movieNumber = 0;

        //image object;
        this.image = new Image();

        //array containing movie objects
        this.movies = [];

        this.createObjects();
        this.buildDom();
        this.showMovie();
    }
    createObjects(){
        //function to create movie objects and populate movie array
        console.log("creating objects");
    }
    buildDom(){
        //builds the DOM and sets up event Listeners for the Image and next button
        console.log("building DOM");
    }

    showMovie(e){
        /*This function updates the output to show the correct movie information and image.
        It should be called when next button is clicked and also initially so a movie is seen
        before button is clicked the first time*/
        console.log("show movie");
    }
}

(()=>{
    const main = new Main();
})();

