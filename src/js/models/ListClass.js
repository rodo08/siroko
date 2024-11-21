import Button from "./ButtonClass.js";

const formButtonText = "Siguiente";

class List {
  constructor(arrayData, updateData) {
    this.arrayData = arrayData;
    this.updateData = updateData;
  }

  render() {
    const section = document.getElementById("form-section");
    section.innerHTML = "";

    this.arrayData.forEach((step, index) => {
      const form = document.createElement("form");
      const h3 = document.createElement("h3");
      h3.textContent = step.stepTitle;

      const ul = document.createElement("ul");

      step.options.forEach((option, optionIndex) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <label class="${optionIndex === 0 ? "checked" : ""}">
            <input type="radio" name="option${index}" value="${option}" ${
          optionIndex === 0 ? "checked" : ""
        }>
            <span>${option}</span>
          </label>
        `;
        ul.appendChild(li);
      });

      form.appendChild(h3);
      form.appendChild(ul);

      const buttonRenderer = new Button(formButtonText);
      const buttonHTML = buttonRenderer.render();

      form.innerHTML += buttonHTML;

      section.appendChild(form);

      form.querySelector("button").addEventListener("click", (event) => {
        event.preventDefault();
        this.updateData();
      });
    });

    section.addEventListener("change", (event) => this.markSelected(event));
  }

  markSelected(event) {
    if (event.target && event.target.type === "radio") {
      const form = event.target.closest("form");
      const labels = form.querySelectorAll("label");

      labels.forEach((label) => label.classList.remove("checked"));

      const label = event.target.closest("label");
      if (label) {
        label.classList.add("checked");
      }
    }
  }
}

export default List;
