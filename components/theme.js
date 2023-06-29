const hamMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const offScreenMenu = document.querySelector(".offScreenMenu");
const darkMode = document.querySelector(".darkMode");
const textLight = document.querySelector(".textLight");
const textDark = document.querySelector(".textDark");
const mary = document.querySelector(".mary");
let maryD = document.querySelector(".maryD");
const roses = document.querySelector(".roses");
let sun = document.querySelector(".sun");
let gallery = document.querySelector("body");

// STORAGE ELEMENTS
let darkModeStorage = localStorage.getItem("darkMode");
let sunStorage = localStorage.getItem("sunDark");
let maryStorage = localStorage.getItem("maryStorage");
let roseStorage = localStorage.getItem("roseDark");
let textMode = localStorage.getItem("textDark");
let galleryMode = localStorage.getItem("galleryD");

// HAMBURGER MENU
        hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
        sun.classList.toggle("active");
      });



    
// OFF SCREEN BG MENU

// BODY MAIN BACKGROUND THEME
const enableDark = () => {
    document.body.classList.toggle("darkMode");
    localStorage.setItem("darkMode", "on");
};

const disableDark = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", "off");
};

if (darkModeStorage === "on") {
    enableDark();
  } else {
    disableDark();
}


  sun.addEventListener("click", () => {
    darkModeStorage = localStorage.getItem("darkMode");
    if (darkModeStorage !== "on") {
      enableDark();
    } else {
      disableDark();
    }
  });


// ===============   SUN MOON THEME   ===============
function sunDark() {
    sun.src = "images/moon.png";
    localStorage.setItem("sunDark", "on");
}

function sunLight() {
    sun.src = "images/sun.png";
    localStorage.setItem("sunDark", "off");
  }

if (sunStorage === "on"? sunDark() : sunLight());

    sun.addEventListener("click", () => {
    sunStorage = localStorage.getItem("sunDark");
if (sunStorage !== "on") {
    sunDark();
    localStorage.setItem("sunDark", "on");
  } else {
    sunLight();
    localStorage.setItem("sunDark", "off");
  }
});

  // GALLERY THEME
function galleryOn() {
    if (gallery) {
    gallery.classList.toggle("galleryDark");
    localStorage.setItem("galleryD", "on");
  }
};
function galleryOff() {
    if (gallery) {
    gallery.classList.remove("galleryDark");
    localStorage.setItem("galleryD", "off");
  }
};
    if(galleryMode === "on"? galleryOn() : galleryOff());
    sun.addEventListener("click", () => {
    galleryMode  = localStorage.getItem("galleryD");
    galleryMode !== "on"? galleryOn() : galleryOff();
});
// ===============   GALLERY END   ===============


// ===============   MARY THEME   ===============
function MaryD() {
  if (mary) {
    mary.src = "images/maryD.png";
    localStorage.setItem("maryStorage", "on");
  }
};

function Mary() {
  if (mary) {
    mary.src = "images/mary.png";
    localStorage.setItem("maryStorage", "off");
  }
};

if (maryStorage === "on" ? MaryD() : Mary());

    sun.addEventListener("click", () => {
  maryStorage = localStorage.getItem("maryStorage");
    if (maryStorage !== "on"? MaryD() : Mary());
});



// ROSES THEME
function RosesDark() {
  if (roses) {
    roses.src = "images/rosesD.png";
    localStorage.setItem("roseDark", "on");
  }
};

function Roses() {
  if (roses) {
    roses.src = "images/roses.png";
    localStorage.setItem("roseDark", "off");
  }
};

if (roseStorage === "on"? RosesDark() : Roses());


sun.addEventListener("click", () => {
    roseStorage = localStorage.getItem("roseDark");
if (roseStorage !== "on"? RosesDark() : Roses());
});


  // TEXT THEME
  function TextDark() {
    if (textLight) {
      textLight.classList.toggle("textDark");
      localStorage.setItem("textDark", "on");
    }
  };
  
  function TextLight() {
    if (textLight) {
      textLight.classList.remove("textDark");
    localStorage.setItem("textDark", "off");
  }
};
    textMode === "on"? TextDark() : TextLight();

    sun.addEventListener("click", () => {
      textMode = localStorage.getItem("textDark");

    textMode !== "on"? TextDark() : TextLight();
});

