const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

function showImage() {
    document.getElementById("fox-image").classList.remove("hidden");
    }

function hideImage() {
    document.getElementById("fox-image").classList.add("hidden");
    }