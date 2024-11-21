class Title {
  constructor(arrayData) {
    this.arrayData = arrayData;
  }

  render() {
    const section = document.getElementById("title-section");
    section.innerHTML = "";

    this.arrayData.forEach((step) => {
      const h2 = document.createElement("h2");
      h2.textContent = step.subTitle;

      const h1 = document.createElement("h1");
      h1.textContent = step.title;

      const p = document.createElement("p");
      p.textContent = step.paragraph;

      section.appendChild(h2);
      section.appendChild(h1);
      section.appendChild(p);
    });
  }
}

export default Title;
