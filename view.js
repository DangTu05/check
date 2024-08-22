const img = document.querySelectorAll(".div4-im1");
const pro_name = document.querySelectorAll(".div4same1");
export const sold = document.querySelectorAll(".sold");
const money = document.querySelectorAll(".money");
const same = document.querySelectorAll(".same");
export const count = document.querySelectorAll(".count");
export const Product =
  localStorage.length > 0 ? JSON.parse(localStorage.getItem("productt")) : [];
function Click() {
  same.forEach((item, index) => {
    item.onclick = () => {
      var Prodata = {
        Id: `${same[index].getAttribute("data")}`,
        img: `${img[index].src}`,
        name: `${pro_name[index].textContent}`,
        sold: `${count[index].textContent}`,
        money: `${money[index].textContent}`,
        idSold: `${count[index].getAttribute("data")}`,
      };
      if (Product.length < 1) {
        Product.push(Prodata);
        localStorage.setItem("productt", JSON.stringify(Product));
        window.location.href = "products.html";
      } else {
        Product.push(Prodata);
        var newPro = Product.filter((item) => item === Product[1]);
        localStorage.setItem("productt", JSON.stringify(newPro));
        window.location.href = "products.html";
      }
    };
  });
}
export function getCount() {
  return document.querySelectorAll(".count");
}
Click();
