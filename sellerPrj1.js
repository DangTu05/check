const container = document.querySelector("#div-container");
const wrapper = document.querySelector("#wrapper");
const parent = document.querySelector(".parent");
const submit = document.querySelector(".button");
const info = document.querySelector(".info");
const CccdLocal = JSON.parse(localStorage.getItem("CCCD")) || [];
const error = document.querySelector(".error");

//* Kiểm tra chuỗi có toàn khoảng trắng không
function validname(name) {
  return /^\s*$/.test(name);
}

function isAllDigits(str) {
  // Kiểm tra nếu tất cả các ký tự trong chuỗi không phải là NaN
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      return false;
    }
  }
  return true;
}
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  container.removeChild(parent);
  info.style.display = "flex";
  const dot = document.querySelectorAll(".dot");
  console.log(dot);

  const save = document.querySelector(".button3");
  const next = document.querySelector(".button4");
  const send = document.querySelector(".button5");
  const Name = document.querySelector("#name");
  const Email = document.querySelector("#email");
  const SĐT = document.querySelector("#SĐT");
  const form = document.querySelector("#form");
  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const SDTError = document.querySelector("#SĐTError");
  const shopInfo = document.querySelector("#shopInfo");
  const back1 = document.querySelector(".back1");
  const successful = document.querySelector("#successful");
  const back2 = document.querySelector(".back2");
  const back3 = document.querySelector(".back3");
  const idetity = document.querySelector("#idetity");
  const formCCCD = document.querySelector("#CCCD");
  next.addEventListener("click", (e) => {
    e.preventDefault();
    if (successful.style.display === "block") {
      successful.style.display = "none";
    }
    if (!Name.value || validname(Name.value)) {
      nameError.innerHTML = "Tên shop không được trống";
    } else {
      Name.value = Name.value.trimStart().trimEnd();
      if (Name.value.length < 6) {
        nameError.innerHTML = "Tên shop phải nhiều hơn 6 kí tự";
      } else {
        nameError.innerHTML = "";
      }
    }
    if (!Email.value) {
      emailError.innerHTML = "Email không được trống";
    } else {
      if (!validateEmail(Email.value)) {
        emailError.innerHTML = "Sai định dạng email";
      } else {
        emailError.innerHTML = "";
      }
    }
    if (!SĐT.value) {
      SDTError.innerHTML = "Số điện thoại không được trống";
    } else {
      if (SĐT.value.length !== 10) {
        SDTError.innerHTML = "Số điện thoại không đúng";
      } else {
        if (SĐT.value.charAt(0) !== "0" || !isAllDigits(SĐT.value)) {
          SDTError.innerHTML = "Số điện thoại không đúng";
        } else {
          SDTError.innerHTML = "";
        }
      }
    }
    if (
      Name.value &&
      !validname(Name.value) &&
      Name.value.length > 6 &&
      Email.value &&
      validateEmail(Email.value) &&
      SĐT.value &&
      SĐT.value.length === 10 &&
      SĐT.value.charAt(0) === "0" &&
      isAllDigits(SĐT.value) &&
      dot
    ) {
      shopInfo.remove();
      dot[0].classList.remove("active");
      dot[1].classList.add("active");
      if (dot[1].classList.contains("active")) {
        console.log(dot[1]);
        formCCCD.style.display = "flex";
      }
      const IDcccdError = document.querySelector("#IDcccdError");
      const IDcccd = document.querySelector("#IDcccd");
      const verification_image1 = document.querySelector(
        "#verification-image1"
      );
      const verification_image2 = document.querySelector(
        "#verification-image2"
      );
      // const idetity = document.querySelector("#idetity");
      const img1Error = document.querySelector("#img1Error");
      const img2Error = document.querySelector("#img2Error");
      const preview_img1 = document.querySelector("#preview-image1");
      const preview_img2 = document.querySelector("#preview-image2");
      let check1, check2;
      verification_image1.addEventListener("change", (e) => {
        const file1 = e.target.files[0];
        //*Kiểm tra size
        if (!file1) {
          check1 = false;
        }
        if (file1) {
          if (file1.size > 2 * 1024 * 1024) {
            img1Error.innerHTML = "Kính thước ảnh quá lớn";
            e.target.value = "";
            return;
          } else {
            if (!["image/jpeg", "image/png"].includes(file1.type)) {
              img1Error.innerHTML = "Chỉ chấp nhận định dạng JPEG hoặc PNG";
              e.target.value = "";
              return;
            } else {
              img1Error.innerHTML = "";
              check1 = true;
            }
          }
        }
        //* Hiển thị ảnh xem trước
        const reader = new FileReader();
        reader.onload = () => {
          preview_img1.src = reader.result;
          preview_img1.style.display = "block";
        };
        if (file1) {
          reader.readAsDataURL(file1);
        } else if (!file1) {
          preview_img1.style.display = "none";
        }
      });
      verification_image2.addEventListener("change", (e) => {
        const file2 = e.target.files[0];
        if (!file2) {
          check2 = false;
        }
        if (file2) {
          //*Kiểm tra size
          if (file2.size > 2 * 1024 * 1024) {
            img2Error.innerHTML = "Kính thước ảnh quá lớn";
            e.target.value = "";
            return;
          } else {
            if (!["image/jpeg", "image/png"].includes(file2.type)) {
              img2Error.innerHTML = "Chỉ chấp nhận định dạng JPEG hoặc PNG";
              e.target.value = "";
              return;
            } else {
              img2Error.innerHTML = "";
              check2 = true;
            }
          }
        }
        //* Hiển thị ảnh xem trước
        const reader = new FileReader();
        reader.onload = () => {
          if (file2) {
            preview_img2.src = reader.result;
            preview_img2.style.display = "block";
          }
        };
        if (file2) {
          reader.readAsDataURL(file2);
        } else if (!file2) {
          preview_img2.style.display = "none";
        }
      });
      send.addEventListener("click", (e) => {
        e.preventDefault();
        if (!IDcccd.value) {
          IDcccdError.innerHTML = "Số căn cước không được để trống";
        } else {
          if (!isAllDigits(IDcccd.value) || IDcccd.value.length !== 12) {
            IDcccdError.innerHTML = "Số căn cước không hợp lệ";
          } else {
            IDcccdError.innerHTML = "";
          }
        }
        if (!check1 || !check2) {
          error.innerHTML = "Chưa có đủ ảnh!";
        } else if (check1 && check2) {
          error.innerHTML = "";
        }
        if (
          IDcccd.value &&
          isAllDigits(IDcccd.value) &&
          IDcccd.value.length === 12 &&
          e.target.matches(".button5") &&
          check1 &&
          check2
        ) {
          const checkbox = document.querySelector("#checkbox");
          const formCheck = document.querySelector("#FormCheck");
          const CheckError = document.querySelector("#CheckError");
          dot[1].classList.remove("active");
          dot[2].classList.add("active");
          formCCCD.style.display = "none";
          successful.style.display = "block";
          formCheck.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!checkbox.checked) {
              CheckError.innerHTML = "Vui lòng xác nhận";
            } else {
              CheckError.innerHTML = "";
              Swal.fire({
                title: "Thành Công",
                text: "Chúc mừng bạn đã trở thành người bán của TUTA!",
                icon: "success",
              });
              document.body.addEventListener("click", function (e) {
                console.log(e.target);
                if (
                  e.target.matches(".swal2-confirm") ||
                  e.target.matches(".swal2-container")
                ) {
                  window.setTimeout(function () {
                    window.location.href = "project1.html";
                  }, 1000);
                }
              });
            }
          });
        }
      });
    }
  });
  back1.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.insertAdjacentElement("afterend", parent);
    info.style.display = "none";
    if (successful.style.display === "block") {
      successful.style.display = "none";
    }
  });
  back2.addEventListener("click", (e) => {
    e.preventDefault();
    successful.style.display = "none";
    if (
      !dot[0].classList.contains("active") &&
      dot[1].classList.contains("active")
    ) {
      dot[0].classList.toggle("active");
      dot[1].classList.toggle("active");
    }
    if (
      dot[0].classList.contains("active") &&
      !dot[1].classList.contains("active")
    ) {
      idetity.insertAdjacentElement("beforebegin", shopInfo);
      formCCCD.style.display = "none";
    }
  });
  back3.addEventListener("click", (e) => {
    if (
      !dot[1].classList.contains("active") &&
      dot[2].classList.contains("active")
    ) {
      dot[1].classList.toggle("active");
      dot[2].classList.toggle("active");
      formCCCD.style.display = "flex";
      successful.style.display = "none";
      check1 = true;
      check2 = true;
    }
  });
});
