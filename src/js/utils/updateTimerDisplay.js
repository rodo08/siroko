const updateTimerDisplay = (time) => {
  const timerElement = document.querySelector(
    ".coupon-container__timer span:last-child"
  );
  if (timerElement) {
    timerElement.innerHTML =
      time <= 0
        ? `<div class="timer"><p></p><button onclick="window.location.reload(true)"></button></div>`
        : formatTime(time);

    if (time <= 0) {
      document.querySelector(".coupon-container__timer").style.backgroundColor =
        "var(--color-timeout-bg)";
    }
  }
};

export default updateTimerDisplay;
