const imageContent = [
  {
    img: "image2.1.png",
    text: "Rostov-on-Don, Admiral",
    apt: `Rostov-on-Don <br> LCD admiral`,
    area: "81m2",
    repair_time: "3.5 months",
  },
  {
    img: "image2.png",
    text: "Sochi Thieves",
    apt: `Sochi <br> Thieves`,
    area: "105m2",
    repair_time: "4 months",
  },
  {
    img: "image3.png",
    text: "Rostov-on-Don Patriotic",
    apt: `Rostov-on-Don <br> Patriotic`,
    area: "93m2",
    repair_time: "3 months",
  },
];

function setSlider() {
  let imageContainer = document.querySelector(".images");
  let arrowContainer = document.querySelector(".arrow_container");
  let dotContainer = document.querySelector(".dot_container");
  let aptNameContainer = document.querySelector(".list_container");
  let cityProject_info = document.querySelector(".city_project_info");
  let areaProject_info = document.querySelector(".area_project_info");
  let timeProject_info = document.querySelector(".time_project_info");
  let request = document.querySelector(".request");

  function setImages() {
    imageContent.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : "inactive"
      }" style="background-image: url(${
        imageContent[index].img
      })" data-index='${index}'></div>`;
      imageContainer.innerHTML += imageDiv;
    });
  }

  function setDots() {
    imageContent.forEach((image, index) => {
      let dot = `<div class="circle n${index} ${
        index === 0 ? "circle_white" : ""
      }" data-index='${index}'></div>`;
      dotContainer.innerHTML += dot;
    });
    dotContainer.querySelectorAll(".circle").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        dotContainer
          .querySelector(".circle_white")
          .classList.remove("circle_white");
        this.classList.add("circle_white");
      });
    });
  }

  function setArrows() {
    arrowContainer.querySelectorAll(".line").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let currentNumber =
          +imageContainer.querySelector(".active").dataset.index;
        let nextNum;
        if (arrow.classList.contains("left_line")) {
          nextNum =
            currentNumber === 0 ? imageContent.length - 1 : currentNumber - 1;
        } else {
          nextNum =
            currentNumber === imageContent.length - 1 ? 0 : currentNumber + 1;
        }
        moveSlider(nextNum);
      });
    });
  }

  function setProject_info() {
    imageContent.forEach((image, index) => {
      let firstProject_info = `<p class="project_info_paragraph p${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${imageContent[index].apt}</p>`;
      let secondProject_info = `<p class="project_info_paragraph p${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${imageContent[index].area}</p>`;
      let thirdProject_info = `<p class="project_info_paragraph p${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${imageContent[index].repair_time}</p>`;
      let uponRequest = `<p class="project_info_paragraph p${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">Upon request</p>`;
      cityProject_info.innerHTML += firstProject_info;
      areaProject_info.innerHTML += secondProject_info;
      timeProject_info.innerHTML += thirdProject_info;
      request.innerHTML += uponRequest;
    });
  }

  function setPicNames() {
    imageContent.forEach((image, index) => {
      let picName = `<li class="list_container_content n${index} ${
        index === 0 ? "hover" : ""
      }" data-index="${index}">${imageContent[index].text}</li>`;
      aptNameContainer.innerHTML += picName;
    });

    aptNameContainer
      .querySelectorAll(".list_container_content")
      .forEach((name) => {
        name.addEventListener("click", function () {
          moveSlider(this.dataset.index);
        });
      });
  }

  function moveSlider(num) {
    imageContainer.querySelector(".active").classList.remove("active");
    imageContainer.querySelector(".n" + num).classList.add("active");
    dotContainer
      .querySelector(".circle_white")
      .classList.remove("circle_white");
    dotContainer.querySelector(".n" + num).classList.add("circle_white");
    aptNameContainer.querySelector(".hover").classList.remove("hover");
    aptNameContainer.querySelector(".n" + num).classList.add("hover");
    cityProject_info.querySelector(".active").classList.remove("active");
    cityProject_info.querySelector(".p" + num).classList.add("active");
    areaProject_info.querySelector(".active").classList.remove("active");
    areaProject_info.querySelector(".p" + num).classList.add("active");
    timeProject_info.querySelector(".active").classList.remove("active");
    timeProject_info.querySelector(".p" + num).classList.add("active");
    request.querySelector(".active").classList.remove("active");
    request.querySelector(".p" + num).classList.add("active");
  }

  setImages();
  setArrows();
  setDots();
  setPicNames();
  setProject_info();
}

document.addEventListener("DOMContentLoaded", setSlider);
