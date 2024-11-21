import dataSteps from "./data/dataSteps.js";
import formatTime from "./utils/formatTime.js";
import updateTimerDisplay from "./utils/updateTimerDisplay.js";
import Title from "./models/TitleClass.js";
import List from "./models/ListClass.js";
import Timer from "./models/TimerClass.js";
import Coupon from "./models/CouponClass.js";

const currentYear = new Date().getFullYear();
document.getElementById("footer__year").textContent = currentYear;

const userInputSelections = [];

const initialTimerValue = 20 * 60;
let counter = 0;
let timer;

const handleNextClick = () => {
  logCheckedInput();
  renderTitle();
  if (counter === 2) {
    startTimerIfNeeded();
    renderCoupons();
    replaceButtonWithLink();
  } else {
    renderForm();
  }
  incrementCounter();
};

const renderTitle = () => {
  const { titleData } = dataSteps[counter];
  const titleRenderer = new Title([titleData]);
  titleRenderer.render();
};

const handleTimerEnd = () => {
  const getCopyButton = document.querySelector(
    ".coupon-container__content__button"
  );
  if (getCopyButton) {
    getCopyButton.disabled = true;
    getCopyButton.textContent = "😞";
  }
};

const startTimerIfNeeded = () => {
  if (!timer) {
    timer = new Timer(initialTimerValue, updateTimerDisplay, handleTimerEnd);
    timer.start();
  }
};

const renderCoupons = () => {
  const { couponData } = dataSteps[2];
  const couponRenderer = new Coupon([couponData], handleNextClick);
  couponRenderer.render();
  setCouponCode();
  copyCodeButton();
};

const replaceButtonWithLink = () => {
  const oldButton = document.querySelector("#nextButton");
  if (oldButton) {
    const newButton = document.createElement("button");
    newButton.setAttribute("type", "button");
    newButton.setAttribute("id", "sirokoWeb");
    newButton.innerHTML = `Ir a siroko.com 
      <span>
        <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 4.6875H0V7.3125H15.75V11.25L21 6L15.75 0.75V4.6875Z" fill="white"/>
        </svg>
      </span>`;
    newButton.addEventListener("click", () => {
      window.location.href = "https://siroko.com";
    });
    oldButton.replaceWith(newButton);
  }
};

const renderForm = () => {
  const { formData } = dataSteps[counter];
  const formRenderer = new List([formData], handleNextClick);
  formRenderer.render();
};

const incrementCounter = () => {
  counter++;
};

const logCheckedInput = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.checked) {
      userInputSelections.push(input.value);
    }
  });
};

const setCouponCode = () => {
  try {
    if (userInputSelections.length > 0) {
      const numberFractionCode = userInputSelections[0].slice(-2);
      const numberCode = +numberFractionCode[0] + +numberFractionCode[1];
      const lettersCode = userInputSelections[1].slice(-4).toUpperCase();

      const couponCode = numberCode + lettersCode;

      const getCouponSpan = document.querySelector(
        ".coupon-container__content span"
      );
      getCouponSpan.textContent = couponCode;
    }
  } catch (error) {
    console.log(error);
  }
};

const copyCodeButton = () => {
  const copyButton = document.querySelector(
    ".coupon-container__content__button"
  );

  const couponCode = document.querySelector(
    ".coupon-container__content span"
  ).textContent;

  if (copyButton) {
    copyButton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(couponCode)
        .then(() => {
          alert("Código copiado al portapapeles!");
        })
        .catch((error) => {
          console.error("Error al copiar el código:", error);
        });
    });
  }
};

handleNextClick();
