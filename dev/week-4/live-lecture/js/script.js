// Aaron Varga
// Intro to Development II
// Week 4 Live Lecture
// October 18, 2021

(()=>{
    /*
    Create Element
    First DOM Creation Method
     */
    console.log("Page loaded!");

    // Create element / reference
    let greetings = document.createElement("h2"); // Must come first!
    let container = document.createElement("section");
    let button = document.createElement("button"); // Create button

    // Set attribute such as ID and ID name or Class and Class name (can use for CSS)
    greetings.setAttribute("id","greetings");

    // Attribute set as class
    greetings.setAttribute("class","hello");

    // Insert HTML
    greetings.innerHTML = "Project Demo";
    button.innerHTML = "Submit";

    // Add element to DOM with Append Method
    document.body.append(greetings);
    document.body.append(container);
    document.body.append(button);

    // Create image object
    const img = new Image();

    // Set height and width individually (pixels)
    img.width = 400;
    img.height = 400;

    let imgSize = {width: 0, height: 0};

    // Path relative to index.html file
    img.src = "images/img.png"; // Starts to load image

    // When image is done loading, add to DOM and show width of Image
    img.addEventListener("load",e =>{
        container.append(img); // Adding image to container node!

        imgSize.width = img.width;
        imgSize.height = img.height;

        console.log(img.width);
    })

    // Click event
    button.addEventListener("click",e=>{
        img.width = 200;
        img.height = 200;

        console.log(imgSize.width,imgSize.height);
    })
})();









