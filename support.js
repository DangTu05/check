const parent = document.querySelector(".parent");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const option5 = document.querySelector(".option5");
const icon = document.querySelectorAll(".icon");
const listItem = document.querySelectorAll(".list-item");
const content = document.querySelectorAll(".content");
const item = document.querySelectorAll(".item");
//*Lấy sự kiện click vào option
option1.addEventListener("click", (e) => {
  icon[0].classList.toggle("fa-chevron-down");
  icon[0].classList.toggle("fa-chevron-up");
  if (icon[0].classList.contains("fa-chevron-up")) {
    listItem[0].style.transition =
      "visibility 0.3s ease-in-out, height 0.2s ease-in-out";
    listItem[0].style.visibility = "visible";
    listItem[0].style.height = "100px";

    item[1].addEventListener("click", (e) => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[1].classList.add("color");
      if (!item[0].classList.contains("color")) {
        content[0].style.display = "none";
      }
      if (item[1].classList.contains("color")) {
        content[1].style.display = "block";
      }
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[1].style.display = "block";
    });
    item[0].addEventListener("click", (e) => {
      if (!item[0].classList.contains("color")) {
        item.forEach((item) => {
          if (item.classList.contains("color")) {
            item.classList.remove("color");
          }
        });
        item[0].classList.add("color");
      }
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[0].style.display = "block";
    });
  }
  if (icon[0].classList.contains("fa-chevron-down")) {
    listItem[0].style.transition =
      "visibility 0.1s ease-in-out, height 0.3s ease-in-out";
    listItem[0].style.visibility = "hidden";
    listItem[0].style.height = "0px";
  }
});
option2.addEventListener("click", (e) => {
  icon[1].classList.toggle("fa-chevron-down");
  icon[1].classList.toggle("fa-chevron-up");
  if (icon[1].classList.contains("fa-chevron-up")) {
    listItem[1].style.transition =
      "visibility 0.3s ease-in-out, height 0.2s ease-in-out";
    listItem[1].style.visibility = "visible";
    listItem[1].style.height = "100px";
    item[2].addEventListener("click", (e) => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[2].classList.add("color");
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[2].style.display = "block";
    });
  }
  if (icon[1].classList.contains("fa-chevron-down")) {
    listItem[1].style.transition =
      "visibility 0.1s ease-in-out, height 0.3s ease-in-out";
    listItem[1].style.visibility = "hidden";
    listItem[1].style.height = "0px";
  }
  item[3].addEventListener("click", (e) => {
    item.forEach((item) => {
      if (item.classList.contains("color")) {
        item.classList.remove("color");
      }
    });
    item[3].classList.add("color");
    content.forEach((content) => {
      if (content.style.display === "block") {
        content.style.display = "none";
      }
    });
    content[3].style.display = "block";
  });
});
option3.addEventListener("click", (e) => {
  icon[2].classList.toggle("fa-chevron-down");
  icon[2].classList.toggle("fa-chevron-up");
  if (icon[2].classList.contains("fa-chevron-up")) {
    listItem[2].style.transition =
      "visibility 0.3s ease-in-out, height 0.2s ease-in-out";
    listItem[2].style.visibility = "visible";
    listItem[2].style.height = "120px";
    item[4].addEventListener("click", (e) => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[4].classList.add("color");
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[4].style.display = "block";
    });
  }
  if (icon[2].classList.contains("fa-chevron-down")) {
    listItem[2].style.transition =
      "visibility 0.1s ease-in-out, height 0.3s ease-in-out";
    listItem[2].style.visibility = "hidden";
    listItem[2].style.height = "0px";
  }
  item[5].addEventListener("click", (e) => {
    item.forEach((item) => {
      if (item.classList.contains("color")) {
        item.classList.remove("color");
      }
    });
    item[5].classList.add("color");
    content.forEach((content) => {
      if (content.style.display === "block") {
        content.style.display = "none";
      }
    });
    content[5].style.display = "block";
  });
  item[6].addEventListener("click", (e) => {
    item.forEach((item) => {
      if (item.classList.contains("color")) {
        item.classList.remove("color");
      }
    });
    item[6].classList.add("color");
    content.forEach((content) => {
      if (content.style.display === "block") {
        content.style.display = "none";
      }
    });
    content[6].style.display = "block";
  });
});
option4.addEventListener("click", (e) => {
  icon[3].classList.toggle("fa-chevron-down");
  icon[3].classList.toggle("fa-chevron-up");
  if (icon[3].classList.contains("fa-chevron-up")) {
    listItem[3].style.transition =
      "visibility 0.3s ease-in-out, height 0.2s ease-in-out";
    listItem[3].style.visibility = "visible";
    listItem[3].style.height = "50px";
    item[7].addEventListener("click", (e) => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[7].classList.add("color");
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[7].style.display = "block";
    });
  }
  if (icon[3].classList.contains("fa-chevron-down")) {
    listItem[3].style.transition =
      "visibility 0.1s ease-in-out, height 0.3s ease-in-out";
    listItem[3].style.visibility = "hidden";
    listItem[3].style.height = "0px";
  }
});
option5.addEventListener("click", () => {
  icon[4].classList.toggle("fa-chevron-down");
  icon[4].classList.toggle("fa-chevron-up");
  if (icon[4].classList.contains("fa-chevron-up")) {
    listItem[4].style.transition =
      "visibility 0.3s ease-in-out, height 0.2s ease-in-out";
    listItem[4].style.visibility = "visible";
    listItem[4].style.height = "140px";
    item[8].addEventListener("click", (e) => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[8].classList.add("color");
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[8].style.display = "block";
    });
    item[9].addEventListener("click", () => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[9].classList.add("color");
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[9].style.display = "block";
    });
    item[10].addEventListener("click", () => {
      item.forEach((item) => {
        if (item.classList.contains("color")) {
          item.classList.remove("color");
        }
      });
      item[10].classList.add("color");
      content.forEach((content) => {
        if (content.style.display === "block") {
          content.style.display = "none";
        }
      });
      content[10].style.display = "block";
    });
  }
  if (icon[4].classList.contains("fa-chevron-down")) {
    listItem[4].style.transition =
      "visibility 0.1s ease-in-out, height 0.3s ease-in-out";
    listItem[4].style.visibility = "hidden";
    listItem[4].style.height = "0px";
  }
});
