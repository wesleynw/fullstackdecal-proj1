document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let nameElem = document.getElementById("name-box");

function updateHeader() {
  let topOfSubtitle = document.getElementById("name-placeholder").offsetTop;

  scrollpos = window.scrollY;
  let className = "";
  nameElem.classList.remove("fixed");
  nameElem.classList.remove("header-bg-night");
  nameElem.classList.remove("header-bg");

  if (nightModeActivated == true) {
    className = "header-bg-night";
  } else {
    className = "header-bg";
  }

  if (scrollpos >= topOfSubtitle) {
    nameElem.classList.add(className);
    nameElem.classList.add("fixed");
  }
}

window.addEventListener("scroll", updateHeader);

let nightModeActivated = false;

document
  .getElementById("night-mode-container")
  .addEventListener("click", nightModeToggle);

let nightModeButton = document.getElementById("night-mode-button");
let nightModeContainer = document.getElementById("night-mode-container");
let body = document.getElementsByTagName("body")[0];

function nightModeToggle() {
  if (nightModeActivated == false) {
    body.classList.add("night-mode");
    nightModeButton.textContent = "day mode 🌓";
    nightModeContainer.classList.add("night-mode");

    nightModeActivated = true;
  } else {
    body.classList.remove("night-mode");
    nightModeButton.textContent = "night mode 🌗";

    nightModeActivated = false;
  }
  updateHeader();
}

let activatePic = "";

let greyscreen = document.getElementById("greyscreen");
let e2eeImg = document.getElementById("e2ee-img");
e2eeImg.addEventListener("click", () => {
  greyscreen.style.display = "inline-block";
  e2eeImg.classList.add("project-picture-zoomed");
  body.style.overflow = "hidden";
});

greyscreen.addEventListener("click", () => {
  greyscreen.style.display = "none";
  e2eeImg.classList.remove("project-picture-zoomed");
  body.style.overflow = "visible";
});
