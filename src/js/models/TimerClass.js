const codeStatus = "Código caducado.";
const restartText = "Reiniciar.";

class Timer {
  constructor(initialTime, updateFunction, endFunction = () => {}) {
    this.time = initialTime;
    this.updateFunction = updateFunction;
    this.endFunction = endFunction;
    this.timerInterval = null;
  }

  start() {
    this.timerInterval = setInterval(() => {
      if (this.time <= 0) {
        clearInterval(this.timerInterval);
        this.updateDisplay(0);
        this.endFunction();
        return;
      }
      this.time -= 1;
      this.updateDisplay(this.time);
    }, 1000);
  }

  stop() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedTime = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;

    const timerElement = document.querySelector(
      ".coupon-container__timer span:last-child"
    );
    if (timerElement) {
      timerElement.innerHTML =
        time <= 0
          ? `<div class="timer"><p>${codeStatus}</p><button onclick="window.location.reload(true)">${restartText}</button></div>`
          : formattedTime;

      if (time <= 0) {
        document.querySelector(
          ".coupon-container__timer"
        ).style.backgroundColor = "var(--color-timeout-bg)";
      }
    }
  }
}

export default Timer;
