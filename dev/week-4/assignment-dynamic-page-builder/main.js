// Aaron Varga
// Intro to Development II
// Assignment: Dynamic Page Builder
// October 21, 2021

class MovieVenue{
    constructor(name,city,state){
        //create properties here
        this.name = name;
        this.city = city;
        this.state = state;
    }
}

class Movie{
    constructor(title, rating, duration,image){
      //create properties here
        this.title = title;
        this.rating = rating;
        this.duration = duration;
        this.image = image;
    }
}

class Main{
    constructor(){
        // console.log("main started");
        //properties - You should not need more than what is listed here,
        //but you are allowed to change them if needed

        this.JSONdata = JSON.parse(jsonString);

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
        // this.showMovie();
    }
    createObjects(){
        //function to create movie objects and populate movie array
        // console.log("creating objects");

        // Assign movie arrays to variables
        let aliensArray = this.JSONdata.movies[0];
        let matrixArray = this.JSONdata.movies[1];
        let endgameArray = this.JSONdata.movies[2];

        // Create movie objects
        let aliensMovie = new Movie(aliensArray.title,aliensArray.rating,aliensArray.duration,aliensArray.imageFile);
        let matrixMovie = new Movie(matrixArray.title,matrixArray.rating,matrixArray.duration,matrixArray.imageFile);
        let endgameMovie = new Movie(endgameArray.title,endgameArray.rating,endgameArray.duration,endgameArray.imageFile);

        // Push movies to movie array
        this.movies.push(aliensMovie);
        this.movies.push(matrixMovie);
        this.movies.push(endgameMovie);

        // console.log(this.movies);
    }
    buildDom(){
        //builds the DOM and sets up event Listeners for the Image and next button
        // console.log("building DOM");

        // ELEMENTS ARE SET UP, HTML NOT INJECTED YET THOUGH
        let main = document.createElement("main");
        document.body.append(main);

        let container = document.createElement("div");
        container.setAttribute("class","container");
        main.append(container);

        let movieTheatreName = document.createElement("h1");
        movieTheatreName.setAttribute("class","movie-theatre-name");
        container.append(movieTheatreName);

        let movieTheatreAddress = document.createElement("div");
        movieTheatreAddress.setAttribute("class","movie-theatre-address");
        container.append(movieTheatreAddress);

        let movieImage = document.createElement("img");
        movieImage.setAttribute("class","movie-image")

        let clicks = 0;
        let moviesArray = this.JSONdata.movies;
        // Remove when dynamic data/loop is made
        movieImage.src = `images/${moviesArray[clicks].imageFile}`;

        // When image is done loading, add to DOM and show width of Image
        // movieImage.addEventListener("load",e =>{
            container.append(movieImage); // Adding image to container node!

            // Movie Info
            let defList = document.createElement("dl");
            defList.setAttribute("class","movie-info");

            let movieTitleLabel = document.createElement("dt");
            movieTitleLabel.setAttribute("class","movie-title-label");
            movieTitleLabel.innerHTML = "Title:";

            let movieTitleData = document.createElement("dd");
            movieTitleData.setAttribute("class","movie-title-data");

            let movieDurationLabel = document.createElement("dt");
            movieDurationLabel.setAttribute("class","movie-duration-label");
            movieDurationLabel.innerHTML = "Duration:";

            let movieDurationData = document.createElement("dd");
            movieDurationData.setAttribute("class","movie-duration-data");

            let movieRatingLabel = document.createElement("dt");
            movieRatingLabel.setAttribute("class","movie-rating-label");
            movieRatingLabel.innerHTML = "Rating:";

            let movieRatingData = document.createElement("dd");
            movieRatingData.setAttribute("class","movie-rating-data");

            container.append(defList);

            defList.append(movieTitleLabel);
            defList.append(movieTitleData);

            defList.append(movieDurationLabel);
            defList.append(movieDurationData);

            defList.append(movieRatingLabel);
            defList.append(movieRatingData);

            // Button
            let button = document.createElement("button");
            button.setAttribute("class","button");
            button.innerHTML = "Next Movie";
            container.append(button);

            // Button click event
            button.addEventListener("click", (e) => this.showMovie(e));

            //let button = document.querySelector(".button");
            document.querySelector(".movie-title-data").innerHTML = moviesArray[clicks].title;
            document.querySelector(".movie-duration-data").innerHTML = Utility.timeConversion(moviesArray[clicks].duration);
            document.querySelector(".movie-rating-data").innerHTML = moviesArray[clicks].rating;
            button.addEventListener("click",function(e){
                clicks++;
                if (clicks >= 3){
                    clicks = 0;
                }
                movieImage.src = `images/${moviesArray[clicks].imageFile}`;
                document.querySelector(".movie-title-data").innerHTML = moviesArray[clicks].title;
                document.querySelector(".movie-duration-data").innerHTML = Utility.timeConversion(moviesArray[clicks].duration);
                document.querySelector(".movie-rating-data").innerHTML = moviesArray[clicks].rating;
            })

            this.showMovie();
        // })
    }

    showMovie(e){
        /*This function updates the output to show the correct movie information and image.
        It should be called when next button is clicked and also initially so a movie is seen
        before button is clicked the first time*/
        // console.log("show movie");

        // Movie theatre info
        document.querySelector(".movie-theatre-name").innerHTML = `${this.JSONdata.movieTheatre}`;
        document.querySelector(".movie-theatre-address").innerHTML = `${this.JSONdata.address.city}, ${this.JSONdata.address.state}`;

        // Loop through movies and their data
    }
}

(()=>{
    const main = new Main();
})();

