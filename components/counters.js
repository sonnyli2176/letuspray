let c = console.log;
// BUTTONS COUNT
const nextBtn = document.getElementById("beads-plus");
const resetBtn = document.getElementById("reset-btn");
const mysteriesMessage = document.querySelector(".pop_up_msg");
const counterContainer = document.querySelector(
  "#counters-and-buttons-container"
);

// CLASSES
const joyfulClass = document.querySelectorAll(".joyful");
const lightClass = document.querySelectorAll(".light");
const sorrowClass = document.querySelectorAll(".sorrowful");
const gloriousClass = document.querySelectorAll(".glorious");

// Mysteries Buttons Selection
const joyfulBtn = document.querySelector(".joyful_btn");
const lightBtn = document.querySelector(".light_btn");
const sorrowfulBtn = document.querySelector(".sorrowful_btn");
const gloriousBtn = document.querySelector(".glorious_btn");

// BUTTONS COUNT
const beadsDisplay = document.getElementById("beads");
const decadesDisplay = document.getElementById("decades");
const rosariesDisplay = document.getElementById("rosaries");
let beadsStored = localStorage.getItem("beadsStored");
let decadesStored = localStorage.getItem("decadesStored");
let rosariesStored = localStorage.getItem("rosariesStored");

let beads = beadsStored ? parseInt(beadsStored) : 0;
let decades = decadesStored ? parseInt(decadesStored) : 0;
let rosaries = rosariesStored ? parseInt(rosariesStored) : 0;

// Update display
function updateDisplay() {
  beadsDisplay.innerText = beads;
  decadesDisplay.innerText = decades;
  rosariesDisplay.innerText = rosaries;
}

let mystery = [];
let mysteryOrigin = mystery.slice();

const browserMessage = document.getElementById("chromeBrowser");

let ba = ['Chrome','Firefox','Safari','Opera','Edg' || 'Edge'];
let b, ua = navigator.userAgent;

// for (let i = 0; i < ba.length; i++) {
//   if (ua.indexOf(ba[i]) > -1) {
//     b = ba[i];
//     browserMessage.classList.add("active");
//     return c(browserMessage);
    
//   } if(b === 'Chrome') {
//     return browserMessage.classList.remove("active");
//   }
// }

// clearTimeout(ua);
// ua = setTimeout(() => {
//   browserMessage.classList.remove("active");
// }, 6000);

let AllButtons = [joyfulBtn, lightBtn, sorrowfulBtn, gloriousBtn];
let InActivities = 180000;
let TimeOutId;
function closeContainer() {
  counterContainer.classList.remove("active");
}

function resetTimeout() {
  clearTimeout(TimeOutId);
  TimeOutId = setTimeout(closeContainer, InActivities);
}

AllButtons.forEach((button) => {
  button.addEventListener("click", () => {
    counterContainer.classList.add("active");
  });
});

counterContainer.addEventListener("mousemove", resetTimeout);
resetTimeout();

class Mysteries {
  constructor(joy, lit, sor, glo, mystery) {
    this.joy = joyfulClass;
    this.lit = lightClass;
    this.sor = sorrowClass;
    this.glo = gloriousClass;
    this.mystery = [];
  }
  // GET ACTIVE JOY
  getJoyActive() {
    this.joy.forEach((j) => {
      j.classList;
      mystery.push(j);
    });
  }
  //   // DEACTIVE JOY
  DeactivateActiveJoy() {
    this.joy.forEach((j) => {
      j.classList.remove("active");
    });
  }
  //   // GET ACTIVE LIGHT
  getLightActive() {
    this.lit.forEach((l) => {
      l.classList;
      mystery.push(l);
    });
  }
  //   // DEACTIVATE LIGHT
  DeactivateLight() {
    this.lit.forEach((l) => {
      l.classList.remove("active");
    });
  }
  //   // GET ACTIVE SORROW
  getSorrowActive() {
    this.sor.forEach((s) => {
      s.classList;
      mystery.push(s);
    });
  }
  //   // DEACTIVE SORROW
  DeactivateSorrow() {
    this.sor.forEach((s) => {
      s.classList.remove("active");
    });
  }
  //   // GET ACTIVE GLORIOUS
  getGloriousActive() {
    this.glo.forEach((g) => {
      g.classList;
      mystery.push(g);
    });
  }
  //   // DEACTIVATE GLORIOUS
  DeactivateGlorious() {
    this.glo.forEach((g) => {
      g.classList.remove("active");
    });
  }
}
// END OF CLASS MYSTERIES

const joyActive = new Mysteries("joy");
const lightActive = new Mysteries("lit");
const sorrowActive = new Mysteries("sor");
const gloriousActive = new Mysteries("glo");

joyfulBtn.addEventListener("click", () => {
  mystery.length = 0;
  joyActive.getJoyActive(mysteryOrigin);
});

lightBtn.addEventListener("click", () => {
  mystery.length = 0;
  lightActive.getLightActive(mysteryOrigin);
});

sorrowfulBtn.addEventListener("click", () => {
  mystery.length = 0;
  sorrowActive.getSorrowActive(mysteryOrigin);
});

gloriousBtn.addEventListener("click", () => {
  mystery.length = 0;
  gloriousActive.getGloriousActive(mysteryOrigin);
});

// Increment count
function incrementCount() {
  beads++;
  if (beads % 10 === 0) {
    decades++;
    if (decades === 5) {
      decades = 0;
      rosaries++;
    }
  }
  if (beads === 50) {
    beads = 0;
  }
  updateDisplay();
  localStorage.setItem("beadsStored", beads);
  localStorage.setItem("decadesStored", decades);
  localStorage.setItem("rosariesStored", rosaries);
}

nextBtn.addEventListener("click", function () {
  incrementCount();

  if (beads <= 10) {
    mystery[0].classList.add("active");
    updateDisplay();
  }
  if (beads > 10) {
    mystery[0].classList.remove("active");
    mystery[1].classList.add("active");
    updateDisplay();
  }
  if (beads > 20) {
    mystery[1].classList.remove("active");
    mystery[2].classList.add("active");
    updateDisplay();
  }
  if (beads > 30) {
    mystery[2].classList.remove("active");
    mystery[3].classList.add("active");
    updateDisplay();
  }
  if (beads > 40) {
    mystery[3].classList.remove("active");
    mystery[4].classList.add("active");
    updateDisplay();
  }
  if (beads === 50 || beads === 0) {
    mystery[4].classList.remove("active");
    mystery[3].classList.remove("active");
    mystery[2].classList.remove("active");
    mystery[1].classList.remove("active");
    mystery[0].classList.remove("active");

    updateDisplay();
  }
});

resetBtn.addEventListener("click", () => {
  return (
    (beads = 0),
    (decades = 0),
    (rosaries = 0),
    joyActive.DeactivateActiveJoy(),
    lightActive.DeactivateLight(),
    sorrowActive.DeactivateSorrow(),
    gloriousActive.DeactivateGlorious(),
    updateDisplay()
  );
});
