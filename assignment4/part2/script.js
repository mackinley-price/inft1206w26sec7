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
//base url 
const baseURL = "./img/";

//for loop
for(const img of imgs){
    const newImg = document.createElement("img")
    newImg.src = '${baseURL}${img.filename}';
    newImg.alt = img.alt
    newImg.tabIndex = "0"
    thumbBar.appendChild(newImg);
    newImg.addEventListener("click", updateDisplayedImage);
    newImg.addEventListener("keydown", (e) => {
        if(e.code == "Enter"){
            updateDisplayedImage(e);
        }
    });
}

//display image function 
function updateDisplayedImage(e){
    displayedImage.src = e.target.src;
    displayedImage.src = e.target.alt;
}

//lighten and darken btn
btn.addEventListener("click", () => {
    if(btn.classList.contains("dark")){
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    }else{
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }
    btn.classList.toggle("dark");
});
