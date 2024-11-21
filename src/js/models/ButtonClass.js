class Button {
  constructor(buttonText, onClick) {
    this.buttonText = buttonText;
    this.onClick = onClick;
  }

  render() {
    return `
      <button type="button" id="nextButton">
        ${this.buttonText} 
        <span>
          <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 4.6875H0V7.3125H15.75V11.25L21 6L15.75 0.75V4.6875Z" fill="white"/>
          </svg>
        </span>
      </button>
    `;
  }

  linkEvent() {
    const button = document.getElementById("nextButton");
    if (button && this.onClick) {
      button.addEventListener("click", this.onClick);
    }
  }
}

export default Button;
