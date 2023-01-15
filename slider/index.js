class Baner {
  constructor(container) {
    this.container = container;
    this.activeElementIndex = 0;
    this.childrenContainer = {
      imgColor: document.createElement("img"),
      imgGray: document.createElement("img"),
      div: document.createElement("div"),
    };
    this.containerClasses = ["color", "gray", "member"];
    this.memberContainer = {
      name: document.createElement("h1"),
      profession: document.createElement("h2"),
    };
    this.iterableContent = {
      imgColor: ["img/s1.png", "img/s2.png", "img/s3.png"],
      imgGray: ["img/s1a.png", "img/s2a.png", "img/s3a.png"],
      name: ["Anna Baugart", "Marek Feliksiak", "Arek Pawłowicz"],
      profession: [
        "programistka JS",
        "UX i UI Designer",
        "Front-end Developer",
      ],
    };
    this.createBanerContent();
    this.changeElement();
    setInterval(() => {
      this.changeElement();
    }, 6000);
  }
  createBanerContent() {
    Object.values(this.childrenContainer).forEach((value, index) => {
      value.classList.add(this.containerClasses[index]);
      this.container.appendChild(value);
    });
    for (const key in this.memberContainer) {
      this.childrenContainer.div.appendChild(this.memberContainer[key]);
    }
  }
  changeElement() {
    for (const key in this.memberContainer) {
      this.memberContainer[key].textContent =
        this.iterableContent[key][this.activeElementIndex];
    }
    for (const key in this.childrenContainer) {
      if (this.iterableContent[key])
        this.childrenContainer[key].src =
          this.iterableContent[key][this.activeElementIndex];
    }
    this.activeElementIndex++;
    if (this.activeElementIndex === 2) {
      this.activeElementIndex = 0;
    }
  }
}

const banerContainer = document.querySelector(".team");
new Baner(banerContainer);
