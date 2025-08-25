let clickCount = 0;
let resetTimeout;

const dora = document.getElementById("dora");       // 1 click sound
const dorarara = document.getElementById("dorarara"); // 8 clicks special sound

diamond.addEventListener("click", () => {
  clickCount++;

  clearTimeout(resetTimeout);

  if (clickCount === 1) {
    dora.currentTime = 0; // restart sound if spam clicked
    dora.play();
  } else if (clickCount === 8) {
    dorarara.currentTime = 0;
    dorarara.play();

    // add special effect
    diamond.classList.add("special-effect");

    // remove effect when animation ends
    setTimeout(() => {
      diamond.classList.remove("special-effect");
    }, 1200); // same as animation duration

    // reset after sound ends
    dorarara.onended = () => {
      clickCount = 0;
    };
  }

  resetTimeout = setTimeout(() => {
    clickCount = 0;
  }, 500);
});
