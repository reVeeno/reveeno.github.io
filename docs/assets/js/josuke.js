let clickCount = 0;
  let resetTimeout; // store the timeout id

  const dora = document.getElementById("dora");
  const dorarara = document.getElementById("dorarara");

  document.getElementById("diamond").addEventListener("click", () => {
    clickCount++;

    // clear old timer
    clearTimeout(resetTimeout);

    if (clickCount === 1) {
      dora.play();
    } else if (clickCount === 8) {
      dorarara.play();

      // reset counter ONLY after audio ends
      dorarara.onended = () => {
        clickCount = 0;
      };

      return; // prevent starting the 1s reset timer below
    }

    // start/reset timer → if no click in 1s, reset count
    resetTimeout = setTimeout(() => {
      clickCount = 0;
    }, 500);
  });