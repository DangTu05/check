export let countSold =
  localStorage.length > 0 ? JSON.parse(localStorage.getItem("countSold")) : [];
import { price, plus, minus, quantity_input, buy, add } from "./getElmPro.js";
import { view } from "./addPro.js";
import { Product,getCount } from "./view.js";
var i = 1;
var sold = document.querySelector(".sold");
function start() {
  initial(i);
  Product.forEach((item) => {
    if (countSold.length > 0) {
      countSold.forEach((key) => {
        if (key.id === item.idSold) {
          i = key.count;
          sold.textContent = i;
        }
      });
    }
  });
  Add();
  quantityBtn();
}
//*********************** Hàm mua sản phẩm
function Buy(money) {
  buy.onclick = () => {
    Swal.fire({
      title: "Bạn chắc chứ?",
      text: `Bạn muốn mua sản phẩm này với giá ${money} VNĐ ?`,
      icon: "question",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Mua",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thành công!",
          text: "Bạn đã mua thành công!",
          icon: "success",
        });
        Product.forEach((item) => {
          if (countSold.length > 0) {
            countSold.forEach((key) => {
              if (key.id === item.idSold) {
                if (quantity_input.value == 1) {
                  i = key.count + 1;
                  Sold(i);
                }
                if (Number(quantity_input.value) > 1) {
                  i = key.count + Number(quantity_input.value);
                  Sold(i);
                }
              } else {
                Sold(i);
              }
            });
          }
        });
      }
    });
  };
}
//********************* Hàm thêm sản phẩm
function Add() {
  add.onclick = () => {
    view();
    Swal.fire({
      title: "Bạn chắc chứ?",
      text: "Bạn muốn thêm sản phẩm này?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Thêm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thành công!",
          text: "Bạn đã thêm thành công!",
          icon: "success",
        });
      }
    });
  };
}
//************************ Hàm tăng số lượng
function quantityBtn() {
  //*Sự kiện click
  if (plus) {
    plus.onclick = () => {
      if (quantity_input.value > 0 && quantity_input.value < 100) {
        quantity_input.value++;
      }
      convert(quantity_input.value);
      Buy(convert(quantity_input.value));
    };
    Buy(convert(quantity_input.value));
    blur(quantity_input);
  }
  if (minus) {
    minus.onclick = () => {
      if (quantity_input.value > 1) {
        quantity_input.value--;
        convert(quantity_input.value);
        Buy(convert(quantity_input.value));
      }
    };
    Buy(convert(quantity_input.value));
    blur(quantity_input);
  }
}
//************************* Hàm chuyển đổi
function convert(quantity) {
  var priConvert = price.textContent.split("/")[0];
  var money = Number(priConvert.replace(/\./g, ""));
  let total = money * quantity;
  return total.toLocaleString("vi-VN");
}
function blur(blur) {
  blur.addEventListener("blur", () => {
    if (blur.value > 100) {
      blur.value = 100;
      Buy(convert(blur.value));
    }
    if (blur.value <= 100 && blur.value >= 1) {
      Buy(convert(blur.value));
    }
    if (blur.value < 1) {
      blur.value = 1;
    }
  });
}
//*********** Hàm reder số lượng sản phẩm đã bán
function Sold(total) {
  Product.forEach((item) => {
    var quantity = {
      id: `${item.idSold}`,
      count: total,
    };
    if (!findid(quantity.id)) {
      countSold.push(quantity);
      localStorage.setItem("countSold", JSON.stringify(countSold));
      sold.textContent = quantity.count;
      rederSold(count,quantity.id,quantity.count);
    } else {
      let newSold = countSold.filter((item) => item.id != quantity.id);
      localStorage.setItem("countSold", JSON.stringify(newSold));
      countSold =
        localStorage.length > 0
          ? JSON.parse(localStorage.getItem("countSold"))
          : [];
      countSold.push(quantity);
      localStorage.setItem("countSold", JSON.stringify(countSold));
      sold.textContent = quantity.count;
      rederSold(getCount(),quantity.id,quantity.count);
    }
  });
}
//************** Hàm reder số lượng khi chưa bán được cái nào
function initial(i) {
  Product.forEach((item) => {
    if (item.sold == 0) {
      i = 0;
    }
  });
  sold.textContent = i;
}
//************ Hàm tìm kiếm xem có id số lượng sản phẩm trong local k */
function findid(id) {
  return countSold.some((item) => item.id === id);
}

export function rederSold(count, id, quantity) {
  count.forEach((item) => {
    console.log(item.getAttribute("data"));    
    if (item.getAttribute("data") === id) {
      count.textContent = quantity;
      console.log(count.textContent);
    }
  });
}
start();
