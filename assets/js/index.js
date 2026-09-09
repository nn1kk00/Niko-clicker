document.addEventListener('DOMContentLoaded', function() {
  function red(pageUrl) {
      window.location.href = pageUrl;
  }

  let a = 0;
  let n = 0;
  let s = 1;
  let c = 100;

  const counterElement = document.getElementById('counter');
  const clickButton = document.getElementById('click-btn');
  const resetButton = document.getElementById('reset-btn');
  const nikoElement = document.getElementById("nikocounter");
  const prElement = document.getElementById("pr-btn");
  const priceElement = document.getElementById("price");
  const sillyElement = document.getElementById("silly");
  const silly1Element = document.getElementById("silly1");

  if (clickButton) {
    clickButton.addEventListener('click', function() {
      document.getElementById('click').play();
      a += s;
      counterElement.textContent = a;
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', function() {
      document.getElementById('meow').play();
      n += a;
      a = 0;
      counterElement.textContent = a;
      nikoElement.textContent = n;
    });
  }

  if (prElement) {
    prElement.addEventListener('click', function() {
      if (a <= c) {
        const errorAudio = document.getElementById('error');
        if (errorAudio) {
          errorAudio.play();
        }
        console.error("У вас не хватает панкейков!");
      }
      if (a >= c) {
        a -= c;
        c = c*2;
        s++;
        counterElement.textContent = a;
        if (priceElement) {
          priceElement.textContent = c;
        }
        if (sillyElement) {
          sillyElement.textContent = s;
        }
        if (silly1Element) {
          silly1Element.textContent = s+1;
        }
      }
      if (a == c) {
        a -= c;
        c = c*2;
        s++;
        counterElement.textContent = a;
        if (priceElement) {
          priceElement.textContent = c;
        }
        if (sillyElement) {
          sillyElement.textContent = s;
        }
        if (silly1Element) {
          silly1Element.textContent = s+1;
        }
      }
    });
  }
});
