// Name: Mackinley Price
// 	File: script.js
// 	Date: 04 April 2026
// 	This script will power the image gallery for imagegallery.html

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//create image array 
const imgs = [{ filename: "pic1.jpg", alt: "Closeup of a human eye" }, { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
    { filename: "pic3.jpg", alt: "Purple and white pansies" }, { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

