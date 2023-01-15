class Baner {
  constructor(
    container,
    members = [
      {
        image: "img/s1.png",
        name: "Anna Baugart",
        profession: "programistka JS",
      },
    ]
  ) {
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
    this.iterableContent = members?.map((member) => ({
      image: member.image,
      name: member.name,
      profession: member.profession,
    }));

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
      if (this.elements[key].image) {
        this.elements[key].element.src =
          this.iterableContent[this.activeElementIndex].image;
      }
      if (this.elements[key].nested) {
        this.elements[key].element.textContent =
          this.iterableContent[this.activeElementIndex][key];
      }
    }
    this.activeElementIndex++;
    if (this.activeElementIndex === this.iterableContent.length) {
      this.activeElementIndex = 0;
    }
  }
}
