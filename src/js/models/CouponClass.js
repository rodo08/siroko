import FormRenderer from "./ListClass.js";
import Button from "./ButtonClass.js";

const copyCodeButtonText = "Copiar";
class Coupon extends FormRenderer {
  constructor(arrayData, onButtonClick) {
    super(arrayData, onButtonClick);
  }

  render() {
    const section = document.getElementById("form-section");
    section.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = "LO PROMETIDO ES DEUDA";

    section.appendChild(h3);

    this.arrayData.forEach((coupon, index) => {
      const couponContainer = document.createElement("div");
      couponContainer.classList.add("coupon-container");

      couponContainer.innerHTML = `
        <div class="coupon-container__content">
          <div>
            <span>Cupón ${coupon.couponCode}</span>
            <button class="coupon-container__content__button">${copyCodeButtonText}</button>
          </div>
          
          <p>${coupon.additionalParagraph}</p>
        </div>
        <div class="coupon-container__timer">
          <span class="material-symbols-outlined">alarm</span>
          <span>${coupon.timer}</span>
        </div>
      `;

      section.appendChild(couponContainer);
    });

    const buttonRenderer = new Button("Siguiente", this.onButtonClick);
    const buttonHTML = buttonRenderer.render();

    section.innerHTML += buttonHTML;

    buttonRenderer.linkEvent();
  }
}

export default Coupon;
