import { getProductsFromStorage, Products } from "./Products.mjs";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var product_container = $("#Product-container");
const buy = $(".buy");
const all = $(".all");

//*=============Hàm click tăng giảm số lượng sp==============*/
function quantityBtn() {
  //*Sự kiện click
  const plus = $$(".plus");
  const minus = $$(".minus");
  const UnitPrice = $$(".unit-price");
  var Total = $$(".total");
  let quantity_input = $$(".quantity-input");
  var checkbox = $$("#checkbox");
  const deletePro = $$(".delete");
  if (plus) {
    plus.forEach((item, index) => {
      item.onclick = () => {
        if (
          quantity_input[index].value < 100 &&
          quantity_input[index].value >= 1
        ) {
          quantity_input[index].value++;
          var convertPri = parseFloat(
            UnitPrice[index].textContent.replace(/\./g, "")
          );
          var money = convertPri * quantity_input[index].value;
          Total[index].innerHTML = `${money.toLocaleString("vi-VN")}`;
          updateTotalCost(checkbox, Total);
        }
      };
      Buy(quantity_input, Total);
    });
  }
  if (minus) {
    minus.forEach((item, index) => {
      item.onclick = () => {
        if (quantity_input[index].value > 1) {
          quantity_input[index].value--;
          var convertPri = parseFloat(
            UnitPrice[index].textContent.replace(/\./g, "")
          );
          var money = convertPri * quantity_input[index].value;
          Total[index].innerHTML = `${money.toLocaleString("vi-VN")}`;
          updateTotalCost(checkbox, Total);
        }
      };
      Buy(checkbox, Total);
    });
  }
  updateTotalCost(checkbox, Total);
  Delete(deletePro);
  Input(quantity_input, UnitPrice, checkbox, Total);
  checkbox.forEach((item) => {
    item.addEventListener("change", () => {
      updateTotalCost(checkbox, Total);
    });
  });
}
//*==================== Hàm kiểm soát số lượng nhập vào===== */
function Input(blur, unitprice, checkbox, total) {
  blur.forEach((item, index) => {
    item.addEventListener("blur", () => {
      if (item.value > 100) {
        item.value = 100;
        var money = Number(unitprice[index].textContent.replace(/\./g, ""));
        var price = money * item.value;
        total[index].innerHTML = `${price.toLocaleString("vi-VN")}`;
        updateTotalCost(checkbox, total);
      }
      if (item.value <= 100 && item.value >= 1) {
        var money = Number(unitprice[index].textContent.replace(/\./g, ""));
        var price = money * item.value;
        total[index].innerHTML = `${price.toLocaleString("vi-VN")}`;
        updateTotalCost(checkbox, total);
      }
      if (item.value < 1) {
        item.value = 1;
      }
    });
  });
}
//*==================== Hàm kiểm tra checked================ */
function FindChecked(check, total) {
  for (const item of check) {
    if (item.checked) {
      TotalCost(check, total);
      return true;
    }
  }
  return false;
}
//*==================== Hàm click mua hàng================== */
function Buy(checkbox, total) {
  buy.onclick = () => {
    if (FindChecked(checkbox, total)) {
      Swal.fire({
        title: "Bạn chắc chứ?",
        text: "Bạn muốn mua sản phẩm này",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Mua",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Thành công",
            text: "Bạn đã mua thành công.",
            icon: "success",
          });
        }
      });
    }
    if (!FindChecked(checkbox, total)) {
      Swal.fire({
        title: "Lưu ý!",
        text: "Hãy chọn sản phẩm bạn muốn mua!",
        icon: "error",
      });
    }
  };
}
function updateTotalCost(checkbox, total) {
  var totalCost = TotalCost(checkbox, total);
  all.innerHTML = totalCost;
}
//*================= Hàm Tính tổng tiền ================== */
function TotalCost(checkbox, Total) {
  let totalcost = 0;
  checkbox.forEach((item, index) => {
    if (item.checked) {
      totalcost += Number(Total[index].textContent.replace(/\./g, ""));
    }
  });
  return totalcost.toLocaleString("vi-VN");
}
//* render ra màn hình
function RenderProducts(callback) {
  if (Array.isArray(Products) && Products.length > 0) {
    var htmls = Products.map(function (item) {
      var PriceConvert = parseInt(item.Price);
      return `<div data="${item.Id}" id="ListProducts">
          <div>
            <label for=""
              ><input id="checkbox" type="checkbox"
            /></label>
          </div>
          <div class="pro-info">
            <div class="img-pro" style="user-select: none;">
              <img class="prduct" src="${item.urlImg}" alt="" />
            </div>
            <div>
              <span class="name">${item.ProductName}</span>
            </div>
          </div>
          <div>
            <span>Đơn Giá: ₫<span class="unit-price">${PriceConvert.toLocaleString(
              "vi-VN"
            )}</span></span>
          </div>
          <div class="quantity-container">
            <button class="quantity-btn minus">-</button>
            <input
              class="quantity-input"
              type="text"
              role="spinbutton"
              value="1"
              min="1"
              max="100"
              aria-valuemin="1"
              aria-valuemax="100"
              aria-valuenow="1"
            />
            <button class="quantity-btn plus">+</button>
          </div>
          <div><span>Tổng Tiền: ₫<span class="total">${PriceConvert.toLocaleString(
            "vi-VN"
          )}</span></span></div>
          <div><button class="delete">Xóa</button></div>
        </div>`;
    });
    product_container.innerHTML = htmls.join("");
  }
  callback();
}
//*===================== Hàm Xóa sản phẩm ================*/
function Delete(remove) {
  remove.forEach((item, index) => {
    item.onclick = () => {
      var remove = product_container.children[index];
      remove.remove();
      var id = remove.getAttribute("data");
      var update = Products.filter((item) => item.Id !== id);
      localStorage.setItem("products", JSON.stringify(update));
      getProductsFromStorage();
      quantityBtn();
    };
  });
}
//*======================= Hàm thực thi ===================*/
function start() {
  RenderProducts(quantityBtn);
}
start();
