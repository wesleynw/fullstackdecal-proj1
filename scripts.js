document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let topOfSubtitle = document.getElementById("name-box").offsetTop;
let nameElem = document.getElementById("name-box");
// var topofsubtitle = $("#header-container").offset().top; //gets offset of header
// var height = $("#header-container").outerHeight(); //gets height of header

// window.onscroll(function(){
//     if(window.scrollTop() > (topOfSubtitle)){
//    nameElem.classList.add("header-bg")
//     }
//     else{
//     }
// });

// window.onscroll = function() {

// }

function updateHeader() {
    scrollpos = window.scrollY;
    let className = "";
    if (nightModeActivated) {
        className = "header-bg-night";
    } else {
        className = "header-bg";
    }

    if (scrollpos >= topOfSubtitle) {
        nameElem.classList.add(className)
    }
    else { 
        nameElem.classList.remove("header-bg-night");
        nameElem.classList.remove("header-bg");
     }
}

window.addEventListener('scroll', updateHeader)

let nightModeActivated = false;

document.getElementById("night-mode-button").addEventListener("click", nightModeToggle);

let nightModeButton = document.getElementById("night-mode-button");
let nightModeContainer = document.getElementById("night-mode-container");
let body = document.getElementsByTagName("body")[0];

function nightModeToggle() {
    if (nightModeActivated == false) {
        body.classList.add("night-mode")
        nightModeButton.textContent = "day mode 🌓";
        nightModeContainer.classList.add("night-mode");

        nightModeActivated = true;
    } else {
        body.classList.remove("night-mode")
        nightModeButton.textContent = "night mode 🌗";

        nightModeActivated = false;
    }
    updateHeader();
}
