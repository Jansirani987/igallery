# Ex.08 Design of Interactive Image Gallery
## Date:17.12.2024

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```

photos.html
<html>
    <head>
        <link rel="stylesheet" href="photos.css">
    </head>
    <body>
        <h1>MY PHOTOS</h1>
        <div class="imgwrapper" id="wrapper">
            <button id="close">x</button>
            <img src="" id="fullImg" alt="Full Image">
        </div>


        <div class="img-gallery">
            <img src="amma.jpg">
            <img src="jansi.jpg">
            <img src="netha.jpg">
            <img src="akka.jpg">
            <img src="sangee.jpg">
            <img src="jana.jpg">
            <img src="mani.jpg">
            <img src="three.jpg">
            </div>

            <footer>
                Designed and developed by Jansi rani A A
            </footer>
        
            <script src="photos.js"></script>
          </body>
</html>

photos.css

/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    text-align: center;
}

h1 {
    margin-top: 20px;
    color: #333;
}

/* Image Gallery */
.img-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin: 20px auto;
    max-width: 900px;
}

.img-gallery img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.img-gallery img:hover {
    transform: scale(1.1);
}

/* Modal */
.imgwrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    display: none;
}

.imgwrapper img {
    max-width: 80%;
    max-height: 80%;
    border: 5px solid white;
    border-radius: 10px;
}

/* Close Button */
#close {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1100;
    display: none;
}

/* Footer */
footer {
    margin-top: 20px;
    padding: 10px;
    background-color: #333;
    color: white;
    font-size: 14px;
}

photos.js

// Select elements
const imgWrapper = document.getElementById('wrapper');
const fullImg = document.getElementById('fullImg');
const closeBtn = document.getElementById('close');
const images = document.querySelectorAll('.img-gallery img');

// Function to open the modal
images.forEach(img => {
    img.addEventListener('click', () => {
        fullImg.src = img.src;
        imgWrapper.style.display = 'flex';
        closeBtn.style.display = 'block';
    });
});

// Function to close the modal
closeBtn.addEventListener('click', () => {
    imgWrapper.style.display = 'none';
    closeBtn.style.display = 'none';
    fullImg.src = '';
});

```

## OUTPUT:
![alt text](<Screenshot (79).png>)
![alt text](<Screenshot (80).png>)
![alt text](<Screenshot (81).png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
