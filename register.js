// // *===========Lấy các phần tử=============
// const usernameElement = document.getElementById("User");
// const emailElement = document.getElementById("email");
// const passwordElement = document.getElementById("password");
// const repasswordElement = document.getElementById("repassword");
// const eyePassword1Element = document.getElementById("eyePassword1");
// const eyePassword2Element = document.getElementById("eyePassword2");
// const userErrorElement = document.getElementById("userError");
// const emailErrorElement = document.getElementById("emailError");
// const passwordErrorElement = document.getElementById("passwordError");
// const repasswordErrorElement = document.getElementById("repasswordError");

// // *==============Lấy dữ liệu từ localStorage
// const userLocal = JSON.parse(localStorage.getItem("users")) || [];

// // *===========Tạo hàm kiểm tra đầu vào gmail.com
// const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };
// function hasAccents(str) {
//   // Biểu thức chính quy để kiểm tra chuỗi có chứa dấu tiếng Việt hay không
//   const accentRegex = /[\u00C0-\u017F]/;

//   // Kiểm tra chuỗi
//   return accentRegex.test(str);
// } //* Kiểm tra chuỗi có toàn khoảng trắng không
// function validname(name) {
//   return /^\s*$/.test(name);
// }
// //*Kiểm tra chuỗi có chứa chữ hay không
// function hasLetters(str) {
//   return /[a-zA-Z]/.test(str);
// }
// // *============Lấy ra elements của trang
// const Register = document.getElementById("register");
// // *============Lắng nghe sự kiên submit
// Register.addEventListener("submit", function (e) {
//   // Ngăn chặn sự kiện load lại trang
//   e.preventDefault();

//   // *====================Gửi dữ liệu từ form lên localStorage

//   // Dữ liệu đầu vào
//   if (!usernameElement.value || validname(usernameElement.value)) {
//     userErrorElement.innerHTML = "Tên đăng nhập không được để trống";
//   } else {
//     usernameElement.value = usernameElement.value.trimStart().trimEnd();
//     if (usernameElement.value.length < 6) {
//       userErrorElement.innerHTML = "Tên đăng nhập phải nhiều hơn 6 kí tự";
//     } else {
//       if (!hasLetters(usernameElement.value)) {
//         userErrorElement.innerHTML = "Tên đăng nhập phải có cả chữ";
//       } else {
//         userErrorElement.innerHTML = "";
//       }
//     }
//   }
//   if (!emailElement.value) {
//     emailErrorElement.innerHTML = "Email không được để trống";
//   } else {
//     emailErrorElement.innerHTML = "";
//   }
//   if (!passwordElement.value) {
//     passwordErrorElement.style.visibility = "visible";
//     passwordErrorElement.innerHTML = "Mật khẩu không được trống";
//   } else {
//     if (passwordElement.value.length < 6) {
//       passwordErrorElement.innerHTML = "Mật khẩu phải nhiều hơn 6 kí tự";
//       passwordErrorElement.style.visibility = "visible";
//     } else {
//       if (hasAccents(passwordElement.value)) {
//         passwordErrorElement.innerHTML = "Mật khẩu không được chứa dấu";
//         passwordErrorElement.style.visibility = "visible";
//       } else {
//         passwordErrorElement.style.visibility = "hidden";
//       }
//     }
//   }
//   if (!repasswordElement.value) {
//     repasswordErrorElement.style.visibility = "visible";
//   } else {
//     repasswordErrorElement.style.visibility = "hidden";
//   }
//   //   *==========Kiểm tra mật khẩu
//   if (passwordElement.value !== repasswordElement.value) {
//     repasswordErrorElement.style.visibility = "visible";
//     repasswordErrorElement.innerHTML = "Mật khẩu không trùng khớp";
//   }
//   if (
//     (passwordElement.value && !repasswordElement.value) ||
//     (!passwordElement.value && !repasswordElement.value)
//   ) {
//     repasswordErrorElement.style.visibility = "visible";
//     repasswordErrorElement.innerHTML = "Mật khẩu không được trống";
//   }
//   //   *Kiểm tra định dạng email
//   if (!validateEmail(emailElement.value) && emailElement.value) {
//     emailErrorElement.innerHTML = "Email không đúng định dạng";
//   }
//   if (
//     usernameElement.value &&
//     usernameElement.value.length > 6 &&
//     emailElement.value &&
//     passwordElement.value &&
//     repasswordElement.value &&
//     passwordElement.value === repasswordElement.value &&
//     passwordElement.value.length > 6 &&
//     validateEmail(emailElement.value) &&
//     hasAccents(!passwordElement.value)
//   ) {
// //* Lấy dữ liệu từ form và gộp thành đối tượng user
//     const user = {
//       userId: Math.ceil(Math.random() * 100000000),
//       userName: usernameElement.value,
//       Email: emailElement.value,
//       password: passwordElement.value,
//     };
//  //*Push user vào trong mảng userLocal

//     userLocal.push(user);

//    //* Lưu trữ dữ liệu lên local
//     localStorage.setItem("users", JSON.stringify(userLocal));
//     // *Chuyển hướng về trang đăng nhập sau 2s
//     Swal.fire({
//       title: "Thành Công!",
//       text: "Đăng Kí Thành Công!",
//       icon: "success",
//     });
//   }
// });
// eyePassword1Element.addEventListener("click", function (e) {
//   eyePassword1Element.classList.toggle("fa-eye");
//   eyePassword1Element.classList.toggle("fa-eye-slash");
//   if (passwordElement.type === "password") {
//     passwordElement.setAttribute("type", "text");
//   } else {
//     passwordElement.setAttribute("type", "password");
//   }
// });
// ///Ẩn hiên eye
// passwordElement.addEventListener("input", function (e) {
//   eyePassword1Element.style.display = "block";
// });
// eyePassword2Element.addEventListener("click", function (e) {
//   eyePassword2Element.classList.toggle("fa-eye");
//   eyePassword2Element.classList.toggle("fa-eye-slash");
//   if (repasswordElement.type === "password") {
//     repasswordElement.setAttribute("type", "text");
//   } else {
//     repasswordElement.setAttribute("type", "password");
//   }
// });
// ///Ẩn hiên eye
// repasswordElement.addEventListener("input", function (e) {
//   eyePassword2Element.style.display = "block";
// });
// *===========Lấy các phần tử=============
const usernameElement = document.getElementById("User");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const repasswordElement = document.getElementById("repassword");
const eyePassword1Element = document.getElementById("eyePassword1");
const eyePassword2Element = document.getElementById("eyePassword2");
const userErrorElement = document.getElementById("userError");
const emailErrorElement = document.getElementById("emailError");
const passwordErrorElement = document.getElementById("passwordError");
const repasswordErrorElement = document.getElementById("repasswordError");

// *==============Lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

// *===========Tạo hàm kiểm tra đầu vào gmail.com
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
//* Kiểm tra chuỗi có toàn khoảng trắng không
function validname(name) {
  return /^\s*$/.test(name);
}
//*Kiểm tra chuỗi có chứa chữ hay không
function hasLetters(str) {
  return /[a-zA-Z]/.test(str);
}
// *============Lấy ra elements của trang
const Register = document.getElementById("register");
// *============Lắng nghe sự kiên submit
Register.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  // Dữ liệu đầu vào
  if (!usernameElement.value || validname(usernameElement.value)) {
    userErrorElement.innerHTML = "Tên đăng nhập không được để trống";
  } else {
    usernameElement.value = usernameElement.value.trimStart().trimEnd();
    if (usernameElement.value.length < 6) {
      userErrorElement.innerHTML = "Tên đăng nhập phải nhiều hơn 6 kí tự";
    } else {
      if (!hasLetters(usernameElement.value)) {
        userErrorElement.innerHTML = "Tên đăng nhập phải có cả chữ";
      } else {
        userErrorElement.innerHTML = "";
      }
    }
  }
  if (!emailElement.value) {
    emailErrorElement.innerHTML = "Email không được để trống";
  } else {
    emailErrorElement.innerHTML = "";
  }
  if (!passwordElement.value) {
    passwordErrorElement.style.visibility = "visible";
    passwordErrorElement.innerHTML = "Mật khẩu không được trống";
  } else {
    if (passwordElement.value.length < 6) {
      passwordErrorElement.innerHTML = "Mật khẩu phải nhiều hơn 6 kí tự";
      passwordErrorElement.style.visibility = "visible";
    } else {
      passwordErrorElement.style.visibility = "hidden";
    }
  }
  if (!repasswordElement.value) {
    repasswordErrorElement.style.visibility = "visible";
  } else {
    repasswordErrorElement.style.visibility = "hidden";
  }
  //   *==========Kiểm tra mật khẩu
  if (passwordElement.value !== repasswordElement.value) {
    repasswordErrorElement.style.visibility = "visible";
    repasswordErrorElement.innerHTML = "Mật khẩu không trùng khớp";
  }
  if (
    (passwordElement.value && !repasswordElement.value) ||
    (!passwordElement.value && !repasswordElement.value)
  ) {
    repasswordErrorElement.style.visibility = "visible";
    repasswordErrorElement.innerHTML = "Mật khẩu không được trống";
  }
  //   *Kiểm tra định dạng email
  if (!validateEmail(emailElement.value) && emailElement.value) {
    emailErrorElement.innerHTML = "Email không đúng định dạng";
  }
  if (
    usernameElement.value &&
    usernameElement.value.length > 6 &&
    emailElement.value &&
    passwordElement.value &&
    repasswordElement.value &&
    passwordElement.value === repasswordElement.value &&
    passwordElement.value.length > 6 &&
    validateEmail(emailElement.value)
  ) {
    //* Lấy dữ liệu từ form và gộp thành đối tượng user
    const user = {
      userId: Math.ceil(Math.random() * 100000000),
      userName: usernameElement.value,
      Email: emailElement.value,
      password: passwordElement.value,
    };
    //*Push user vào trong mảng userLocal

    userLocal.push(user);

    //* Lưu trữ dữ liệu lên local

    localStorage.setItem("users", JSON.stringify(userLocal));
    //*Chuyển hướng về trang đăng nhập sau 2s
    Swal.fire({
      title: "Thành Công!",
      text: "Đăng Kí Thành Công!",
      icon: "success",
    });
    document.body.addEventListener("click", function (e) {
      // const ok = document.querySelector(".swal2-confirm");
      console.log(e.target);
      
      if(e.target.matches(".swal2-confirm")|| e.target.matches(".swal2-container")){
      window.setTimeout(function () {
        window.location.href = "login.html";
      }, 1000);}
    });
  }
});
eyePassword1Element.addEventListener("click", function (e) {
  eyePassword1Element.classList.toggle("fa-eye");
  eyePassword1Element.classList.toggle("fa-eye-slash");
  if (passwordElement.type === "password") {
    passwordElement.setAttribute("type", "text");
  } else {
    passwordElement.setAttribute("type", "password");
  }
});
///Ẩn hiên eye
passwordElement.addEventListener("input", function (e) {
  eyePassword1Element.style.display = "block";
});
eyePassword2Element.addEventListener("click", function (e) {
  eyePassword2Element.classList.toggle("fa-eye");
  eyePassword2Element.classList.toggle("fa-eye-slash");
  if (repasswordElement.type === "password") {
    repasswordElement.setAttribute("type", "text");
  } else {
    repasswordElement.setAttribute("type", "password");
  }
});
///Ẩn hiên eye
repasswordElement.addEventListener("input", function (e) {
  eyePassword2Element.style.display = "block";
});

// *====================Gửi dữ liệu từ form lên localStorage
