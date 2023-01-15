class Baner {
  constructor(container) {
    this.container = container;
    this.activeElementIndex = 0;
    this.elements = {
      imgColor: {
        element: document.createElement("img"),
        image: true,
        class: "color",
      },
      imgGray: {
        element: document.createElement("img"),
        image: true,
        class: "gray",
      },
      div: {
        element: document.createElement("div"),
        class: "member",
      },
      name: {
        element: document.createElement("h1"),
        nested: true,
      },
      profession: {
        element: document.createElement("h2"),
        nested: true,
      },
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
    for (const key in this.elements) {
      if (this.elements[key].class)
        this.elements[key].element.classList.add(this.elements[key].class);
      this.container.appendChild(this.elements[key].element);
      if (this.elements[key].nested)
        this.elements.div.element.appendChild(this.elements[key].element);
    }
  }
  changeElement() {
    for (const key in this.elements) {
      if (this.iterableContent[key]) {
        if (this.elements[key].image)
          this.elements[key].element.src =
            this.iterableContent[key][this.activeElementIndex];
        if (this.elements[key].nested)
          this.elements[key].element.textContent =
            this.iterableContent[key][this.activeElementIndex];
      }
    }
    this.activeElementIndex++;
    if (this.activeElementIndex === this.iterableContent.imgColor.length) {
      this.activeElementIndex = 0;
    }
  }
}

const banerContainer = document.querySelector(".team");
new Baner(banerContainer);
