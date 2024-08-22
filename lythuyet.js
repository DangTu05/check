// alert() là 1 hàm js dùng để hiển thị 1 cú pháp dạng popup trên trình duyệt của người dùng
// console.log:là hàm sd để xuất thông tin ra màn console của trình duyệt.Sử dụng để hiển thị thông tin debug ,phát hiện để sửa lỗi mã nguồn
// hàm prompt:được sd để hiển thị hộp thoại nhập liệu trên trình duyệt và chờ người dùng nhập giá trị 
// biến:var,let, const
// dữ liệu nhập vào sử dụng hàm prompt sẽ có kiểu chuỗi
// ép kiểu parseFloat or parseInt 
// pi=Math.PI
// toFixed(n);làm tròn n chữ số su dấu phẩy 
// isNaN(n)kiểm tra n có phải là số hay không(có chuyển đổi về số được hay không) đúng trả về false sai trả về true
// lưu ý isNaN(true) or isNaN(false) or isNaN(null) or isNaN("") or isNaN(" ") sẽ trả về false vì có thể chuyển đổi được về số
//for(let tên_biến of tên_mảng):Duyệt từng phần tử của mảng,cách này thì ko sửa được giá trị của mảng
//new Date();Lấy ra thời gian hiện tại;
//Math.floor(giá trị):Làm tròn xuống;
//concat():Nối mảng hiện tại với mảng khác và trả về mảng mới vd array1.concat(array2)
//push():Thêm 1 hoặc nhiều phần tử vào cuối mảng gốc;array.push(1,2)
//unshift():Thêm 1 hoặc nhiều phần tử vào đầu mảng gốc;
// split("n");Tách chuỗi bắt đầu từ kí tự n;
// startsWith("no");Kiểm tra chuỗi có bắt đầu từ từ no không trả về true,false
// Pop():Loại phần tử cuối cùng của mảng và trả về phần tử đã bị loại bỏ
//shift():Loại phần tử đầu tiên của mảng và trả về phần tử đã bị loại bỏ đó
//silce:Tạo ra 1 mảng copy của mảng ban đầu
// splice(0,3):xóa 3 phần tử trong mảng bắt đầu từ vt 0
//slice(1,7):Cắt từ vị trí 1 đến vị trí 6
// trim():remove space left and right
// substr(1,5):Lấy ra 5 kí tự bắt đầu từ vt 1
// substring(1,5):Lấy ra phần kí tự từ 1 đến vt 5
//includes():Kiểm tra xem mảng có chứa 1 giá trị cụ thể không trả về true nếu có false nếu không
//indexOf():trar về vị của phần tử tìm thấy đầu tiên trong mảng
//lastIndexOf():Trả về phần tử cuối cùng xuất hiện trong mảng
//join(separator):Nối các phần tử trong mảng thành chuỗi theo kí tự phân tách 'separator'
// replace("Hi","Hello"):Thay thế chữ hi trong chuỗi thành hello
// map(function(value,index,array)):Duyệt qua từng phần tử trong mảng à không làm thay đổi mảng ban đầu
// forEach(function(value,index,array)):Giống map nhưng ko trả về giá trị
// filter():duyệt qua từng phần tử trong mảng và trả về keeys quả tm điều kiện nào đó
// some():Trả về true nếu có 1 đk đúng trả về false nếu ko có điều kiện nào   
// every():Trả về true nếu mọi đk đúng false nếu mọi có >0 đk sai
/* vd về reduce(function,giá trị khởi tạo):reduce(function(a,b){
return a + b;
},0) */
// .concat(arr1,arr2..):Gộp mảng 
//* rest:phần còn lại của mảng
/*VD về flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];

//* Phẳng hóa mảng với độ sâu 1 (mặc định)
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, [5, 6]]
// *This sẽ đề cập đến object gần nhất
//* Phẳng hóa mảng với độ sâu 2
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, 4, 5, 6]*/
//* Math.sign():số dương thì trả về 1,số âm thì trả về -1
//* toString():Trả về kiểu dữ liệu string
//*Teenphaanf tử.charCodeAt():trả về giá trị unicode của phần tử
//*Object.keys(obj):Trả về 1 mảng chứa tất cả các key(tên thuộc tính của đối tượng)
//*Object.values(obj):Trả về 1 mảng chứa tất cả giá trị của đối tượng
//*Object.entries(obj):Trả về 1 mảng chứa các cặp [khóa,giá trị] của đối tượng dưới dạng mảng con
//*Object.assign(target,source):Sao chép thuộc tính từ 1 hoặc nhiều đối tượng nguồn(source) vào 1 đối tượng đích (target)
//* Object.hasOwnProperty(prop):Kiểm tra xem đối tượng có thuộc tính nào đó hay không trả về true nếu có
//*Object.freeze(obj):Đóng băng đối tượng làm cho nó không thể thêm sửa xóa
//*Object.seal(obj):Ngăn không cho thêm,xóa,chỉ cho phép sửa
//*element.textContent:Lấy đúng nội dung 
//*element.innerHTML:Lấy nội dung và cả các thẻ
//*element.innerText:Lấy nội dung hiển thị trên trang web
//*debounce:Là kĩ thuật buộc hàm phải đợi 1 khoảng thời gian nhất định trước khi thực thi.Trong khoảng thời gian đợi,mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trog thời gian chúng ta định trước
//* window.pageYOffset:Khoảng cách scrollcua window theo chieuf dọc
//* window.pageXOffset:Khoảng cách scroll của window theo chiều ngang
//* localStorage.setItem("key","value"):Set value cho key
//* localStorage.getItem("key"):Lấy  value theo key 
//* localStorage.removeItem("key"):xóa key 
/*Cách clone nested object 
JSON.parse(JSON.stringify())*/
// *optional chaining
// vd:student?.fullname.name:Kiểm tra nếu obj student có full name thì lấy ra giá trị name 
// const {age,name,male} = student;
// <=> const name =studen.name;
// const male =student.male;
// const age = studen.age
// object.keys(tên obj):Trả về tất cả các key của obj
//.classList.contains("n"):kiểm tra xem có chứa cl n ko
//*element.cloneNode(true):cop hết của element,else thì cop thẻ của element 
//*Vd về element.insertAdjacentText
/*<body>
    beforebegin 
        <h3>
            afterbegin
            <span></span>
                beforeend
        </h3>
        afterend
</body>*/
//*element.nextElementSibling:Lấy ra phần tử kề sau nó
//*element.previousElementSibling:Lấy ra phần tử trc nó
//*childNodes:Trả về hết các node bên trong bao gồm TextNodes.children:Trả về các node ko bao gồm text node
//*firstChild :Lấy ra text
//*firstElementChild :Lấy ra element
//*nextSibling:Lấy ra text kế tiếp,previousSibling:Lấy ra text trước
//*clientWidth:Lấy ra độ rộng phần tử trừ boder
//*window.innerHeight,window.outerHeight,window.innerWidth,window.outerWidth:Dùng tính toán size giao diện
//*selector.getBoundingClientRect():Lấy ra tọa độ,kích thước của phần tử
/*left,x :vị trí của khối so với bên trái
top:vị trí của khối so với phía trên
bottom:chiều cao của khối + top
right:Độ rộng của khối +left*/

//*docuument.getElementsByTagName:HTML collection
//*document.querySelectorAll:Node list
//* HTML collection:Ko dùng đc forEach 
//*Node list:sử dụng đc forEach
//*Cả 2 đều ko sd được phương thức:pop,push,shift,map,filter
//*insertBefore(newnode,existingnode):Thêm newnode vào trc existingnode
//*node.replaceChild(newnode,oldnode):Thay node cũ thành node mới,node cũ sẽ mất
//*2 cách để làm HTML collection ,nodelist thành array
//*Cách 1 :Array.from(HTML collection or nodelist)
//*Cách 2 :[...HTML collection],[...Nodelist]
//*html=document.documentElement
//*body=document.body
//*head=document.head
//*title=document.title
//* e.stopPropagation():ngăn chặn sự kiện nổi bọt
//*e.stopImmediatePropagation();:Vd có 2 hàm click cùng 1 thẻ thì hàm nào sử dụng cái này thì sẽ chặn ko thực thi 
//*capture:true;Từ ngoài vào trong
//*event.target:nó sẽ chọn chính xác element mà mik click tới
//*event.currentTarget:Nó sẽ chọn phầu tử mà mik 
//* Element.contains(n):Kiểu tra xem Element có chứa n ko 
//* Element.matches(n):Kiểm tra xem Element có khớp với n ko 
//* extends:kế thừa
