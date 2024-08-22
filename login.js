//* lấy ra element của trang
const login = document.getElementById("login");

// *==============Lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
//* Lấy ra element của các phần tử
const eyePasswordLogin = document.getElementById("eyePasswordLogin");
const passwordLoginElement = document.getElementById("passwordLogin");
const emailLoginElement = document.getElementById("emailLogin");
const passwordLoginErrorElement = document.getElementById("passwordLoginError");
const emailLoginErrorElement = document.getElementById("emailLoginError");
const alertDangerElement = document.getElementById("alert-danger");

//*Lắng nghe sự kiện submit
login.addEventListener("submit", function (e) {
  //!Ngăn load lại trang
  e.preventDefault();
  //*Kiểm tra dữ liệu đầu vào
  if (!emailLoginElement.value) {
    emailLoginErrorElement.innerHTML = "Email không được trống";
  } else {
    emailLoginErrorElement.innerHTML = "";
  }
  if (!passwordLoginElement.value) {
    passwordLoginErrorElement.style.visibility = "visible";
  } else {
    passwordLoginErrorElement.style.visibility = "hidden";
  }
  //*Tìm kiếm email và mật khẩu người dùng
const findUser = userLocal.find(
    (user) =>
      user.Email === emailLoginElement.value &&
      user.password === passwordLoginElement.value
  );
  if (!findUser) {
    alertDangerElement.style.display = "flex";
  } else {
    //*Hiện thông báo thành công
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Đăng nhập thành công!"
    });
    //*Nếu đăng nhập đúng điều hướng sang trang chủ
    setTimeout(function () {
      window.location.href = "project1.html";
    }, 2500);
  }
});
//* Lắng nghe ẩn hiện mật khẩu
eyePasswordLogin.addEventListener("click", function (e) {
  eyePasswordLogin.classList.toggle("fa-eye");
  eyePasswordLogin.classList.toggle("fa-eye-slash");
  if (passwordLoginElement.type === "password") {
    passwordLoginElement.setAttribute("type", "text");
  } else {
    passwordLoginElement.setAttribute("type", "password");
  }
});
//*hiện mắt khi người dùng nhập mk
passwordLoginElement.addEventListener("input", function (e) {
  eyePasswordLogin.style.display = "block";
});
