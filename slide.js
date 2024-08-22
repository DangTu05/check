//*Lấy ra phần tử
const listimg = document.querySelector(".child1");
const hover = document.querySelector(".childprr");
const clickSvgRight = document.getElementById("svg1");
const clickSvgLeft = document.getElementById("svg2");
const dot = document.querySelectorAll(".dot");
const imgs = listimg.getElementsByTagName("img");
const listdot = document.querySelector(".divdot");
let count = 0;
let intervalCount = 0;
let Temptime = 0;
let check = 0;
//* Lắng nghe sự kiện hover
// hover.addEventListener("mouseover", function (e) {
//   if (count < imgs.length - 1) {
//     clickSvgRight.style.display = "block";
//   }
//   listdot.style.display = "block";
//   if (count > 1) {
//     clickSvgLeft.style.display = "block";
//   }
//   if(count<1){
//     clickSvgLeft.style.display = "none";
//   }
// });
// hover.addEventListener("mouseout", function (e) {
//   clickSvgRight.style.display = "none";
//   listdot.style.display = "none";
//   clickSvgLeft.style.display = "none";
// });

// //*Lắng nghe sự kiện click nút phải

// clickSvgRight.addEventListener("click", function (e) {
//   Temptime++;
//   if (count < imgs.length - 1) {
//     let width = imgs[0].offsetWidth;
//     count++;
//     intervalCount++;
//     let temp = width * -1 * count + "px";
//     listimg.style.transform = `translateX(${temp})`;
//   }
//   clickSvgLeft.style.display = "block";
//   if (count === imgs.length - 1) {
//     clickSvgRight.style.display = "none";
//   }
//   if (count > 0) {
//     dot[count - 1].classList.remove("active");
//     dot[count].classList.add("active");
//   }
// });
// //*Lắng nghe sự kiện click nút trái
// clickSvgLeft.addEventListener("click", function (e) {
//   Temptime++;
//   count--;
//   if(check>0){
//     check--;
//   }
//   // intervalCount--;
//   if (count >= 0) {
//     let width = imgs[0].offsetWidth;
//     let temp = width * -1 * count + "px";
//     listimg.style.transform = `translateX(${temp})`;
//   }
//   if (count === 0) {
//     clickSvgLeft.style.display = "none";
//   }
//   if (count < imgs.length - 1) dot[count + 1].classList.remove("active");
//   dot[count].classList.add("active");
// });
// let check = 0;
// let intervalRe = setInterval(() => {
//   if (check > 0) {
//     count--;
//     check--;
//     intervalCount = imgs.length + 1;
//     let width = imgs[0].offsetWidth;
//     let temp = width * -1 * count + "px";
//     listimg.style.transform = `translateX(${temp})`;
//     if (count === 0) {
//       intervalCount = 0;
//       check = 0;
//       // clearInterval(intervalRe);
//     }
//   }
// dot[count + 1].classList.remove("active");
// dot[count].classList.add("active");
// }, 3000);

function time() {
  
  let interval = setInterval(() => {
    if (intervalCount < imgs.length - 1) {
      let width = imgs[0].offsetWidth;
      count++;
      intervalCount++;
      let temp = width * -1 * count + "px";
      listimg.style.transform = `translateX(${temp})`;
      if (count > 0) {
        dot[count - 1].classList.remove("active");
        dot[count].classList.add("active");
      }
    } else {
      check = imgs.length - 1;
      clearInterval(interval);
    }
  }, 3000);
  // if(clearInterval(interval)){
  let intervalRe = setInterval(() => {
    if (check > 0) {
      count--;
      // console.log(count);
      check--;
      
      intervalCount = imgs.length;
      let width = imgs[0].offsetWidth;
      let temp = width * -1 * count + "px";
      listimg.style.transform = `translateX(${temp})`;
      if (count === 0) {
        intervalCount = 0;
        check = 0;
        clearInterval(intervalRe);
      }
    }
    if (count < imgs.length - 1) {
      dot[count + 1].classList.remove("active");
      dot[count].classList.add("active");
    }
  }, 3000);
  return true;
}
time();


const slide=setInterval(time, 18000 - Temptime * 1000);
