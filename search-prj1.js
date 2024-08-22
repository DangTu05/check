// *Lấy ra các phần tử
const input = document.querySelector(".input");
const body = document.body;
const searchHis = document.getElementById("search-history");
const searchText = document.querySelector(".div-search");
const search = document.getElementById("button-search");
const temp = document.querySelector(".divform");
let todolist =
  localStorage.length > 0 ? JSON.parse(localStorage.getItem("todos")) : [];

if (Array.isArray(todolist) && todolist.length > 0) {
  [...todolist].forEach((item) => createText(item));
}

//* Kiểm tra chuỗi có toàn khoảng trắng không
function validtext(text) {
  return /^\s*$/.test(text);
}
function createText(title) {
  const tempale = `<div id="search-history">
                <span class="todo-text">${title}</span>
                <i class="fa-solid fa-trash remove"></i>
              </div>`;
  searchText.insertAdjacentHTML("beforeend", tempale);
}
// *Lấy ra sự kiệm submit
temp.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = input.value;
  if (!validtext(value)) {
    createText(value);
    todolist.push(value);
    localStorage.setItem("todos", JSON.stringify(todolist));
    input.value = "";
  }
});
// * Sự kiện hiện lịch sử focus
input.addEventListener("focus", function () {
  searchText.style.display = "block";
});
// *Sự kiện ẩn lịch sử
window.addEventListener("click", function (e) {
  if (!e.target.matches("input") && !e.target.matches(".todo-text") && !e.target.matches('.remove')) {
    searchText.style.display = "none";
  }
});
// *====Xóa lịch sử tìm kiếm
searchText.addEventListener("click", function (e) {
  if (e.target.matches(".remove")) {
    const todo = e.target.parentNode;
    todo.parentNode.removeChild(todo);
    const todotext = e.target.previousElementSibling.textContent;
    const newtodo = todolist.filter((item) => item !== todotext);
    localStorage.setItem("todos", JSON.stringify(newtodo));
    todolist =
      localStorage.length > 0 ? JSON.parse(localStorage.getItem("todos")) : [];
  }
});
