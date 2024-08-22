//*Lấy ra element
import { Products, getProductsFromStorage } from "./Products.mjs";
const shopping = document.querySelectorAll(".fa-cart-plus");
const shop = document.querySelector(".fa-cart-shopping");
const quantity = document.querySelector(".quantity");
var ClickCount = 0;
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var id = $$(".id");
export var ClickCount = 0;
export var listProduct = $(".list");
export const no_product = $(".no-products");
if (Array.isArray(Products) && Products.length > 0) {
  ClickCount = Products.length;
  renderProduct();
}
var ListImg = $$(".similar");
var ListPrice = $$(".strong");
//*Lấy sự kiện click
// ************** Hàm thực thi
function start() {
  renderQuantity(ClickCount);
  clickCount();
  deleteProduct(updateListHeight);
}
// *************** Hàm click thêm sản phẩm vào giỏ hàng
function clickCount() {
  for (let i = 0; i < shopping.length; i++) {
    shopping[i].onclick = (e) => {
      var data = {
        Id: `${id[i].getAttribute("data")}`,
        urlImg: `${ListImg[i].getAttribute("data")}`,
        ProductName: "",
        Price: `${ListPrice[i].textContent}`,
      };
      Swal.fire({
        title: "Thành công!",
        text: "Sản phẩm đã thêm vào giỏ hàng thành công",
        icon: "success",
      });
      if (!FindId(data.Id)) {
        ClickCount++;
        Products.push(data);
        localStorage.setItem("products", JSON.stringify(Products));
        renderQuantity(ClickCount);
        if (Products.length > 0) {
          renderProduct();
        }
      }
    };
  }
}
// *********** Hàm kiểm tra xem có sản phẩm nào trong giỏ hàng ko
export function checkPro() {
  if (Products.length === 0) {
    no_product.style.display = "block";
  } else {
    no_product.style.display = "none";
  }
}
// *********** Hàm hiện sản phẩm sau mỗi lần thêm
export function renderProduct() {
  checkPro();
  if (Array.isArray(Products) && Products.length > 0) {
    var htmls = Products.map(function (item) {
      var PriceConvert = parseInt(item.Price);
      return `<div class="product">
    <div><img class="products" src="${item.urlImg}" alt=""></div>
                <div><p>${item.ProductName}</p></div>
                <div style="flex:1"><span>₫${PriceConvert.toLocaleString(
                  "vi-VN"
                )}</span></div>
                <div style="color: rgb(156, 149, 149); display:flex" class="fa-solid fa-trash"></div>
                </div> `;
    });
    listProduct.innerHTML = htmls.join("");
    if (Products.length > 5) {
      listProduct.style.height = 200 + "px";
      listProduct.style.overflowY = "scroll";
    }
  }
  deleteProduct(updateListHeight);
}
// ********** Hàm hiện số lượng sản phẩm trong giỏ hàng
export function renderQuantity(count) {
  if (count === 0) {
    quantity.style.display = "none";
  } else {
    quantity.style.display = "block";
    quantity.textContent = count;
  }
}
// ************ Hàm xóa sản phẩm
export function deleteProduct(callback) {
  const product = $$(".product");
  if (listProduct.contains(product[0])) {
    const remove = document.querySelectorAll(".fa-trash");
    remove.forEach((item, index) => {
      item.onclick = () => {
        var newListProduct;
        product[index].remove();
        ClickCount--;
        newListProduct = Products.filter((item) => item !== Products[index]);
        localStorage.setItem("products", JSON.stringify(newListProduct));
        getProductsFromStorage();
        deleteProduct(callback);
        checkPro();
        callback();
        renderQuantity(ClickCount);
      };
    });
    ClickCount = Products.length;
  }
}
// ********* Hàm update lại chiều cao form chứa sản phẩm sau mỗi lần xóa
export function updateListHeight() {
  if (Products.length <= 7) {
    listProduct.style.height = "auto";
    listProduct.style.overflowY = "auto";
  }
}
// ********* Hàm kiểm tra xem id sản phẩm có trùng k
export function FindId(Id) {
  return Products.some((item) => item.Id === Id);
}
start();
