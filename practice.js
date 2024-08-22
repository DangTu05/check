// var usename;
// usename = prompt("nhap ten cua ban:");
// alert(usename);
// let e=5,f=2; e-=(f+1);
// console.log("Kết quả e =",e);
// vd:nhập 2 số thực dương từ bàn phím và tính chu vi,diện tích
// let a,b;
// a=Number(prompt("Nhap so thuc duong a:"));
// b=Number(prompt("Nhap so thuc duong b:"));
// let S=a*b;
// let P=(a+b)*2;
// console.log("S=%s P=%s",S,P);
// vd:tìm x ,y khi biết tổng hiệu của chúng
// let tong,hieu;
// tong=Number(prompt("Nhap tong:",tong));
// hieu=Number(prompt("Nhap hieu:",hieu));
// console.log("x=",(tong+hieu)/2);
// console.log("y=",(tong+hieu)/2-hieu);
// vd:viết chương trình nhập vào chiều cao cân nặng,tính BMI và xuất ra thông báo tính BMI(cân nặng/(chiều cao)^2) và xuất ra thông báo
// let weight=Number(prompt("Nhập cân nặng của bạn:"));
// let height=Number(prompt("Nhập chiều cao của bạn:"));
// let BMI=weight/(Math.pow(height,2));
// if(BMI<15)
//     {console.log("Thân hình quá gầy");}
// else if(BMI>=15 && BMI<16){
//     console.log("Thân hình gầy");
// }
// else if(BMI>=16 &&BMI<18.5){
//     console.log("Thân hình hơi gầy");
// }
// else if(BMI>=18.5 &&BMI<25){
//     console.log("Thân hình bình thường");
// }
// else if(BMI>=25 &&BMI<30){
//     console.log("Thân hình hơi béo");
// }
// else if(BMI>=30 && BMI<35){
// console.log("Thân hình béo");
// }
// else if(BMI>=35){
//     console.log("Thân hình quá béo");
// }
// vd:viết chương trình nhập vào tháng trong năm cà cho biết tháng đấy thuộc quý mấy

// let month=(prompt("Hãy nhập tháng (1-12):"));

//     if(month>=1&&month<=3){
//         console.log("Tháng %s thuộc quý 1",month);
//     }
//     else if(month>=4&&month<=6){
//         console.log("Tháng %s thuộc quý 2",month);
//     }
//     else if(month>=7&&month<=9){
//         console.log("Tháng %s thuộc quý 3",month);
//     }
//     else if(month>=10&&month<=12){
//         console.log("Tháng %s thuộc quý 4");
//     }
// vd viết chương trình nhập vào số nguyên n và in ra kết quả n!

// let n = prompt("Nhâp vào số nguyên n:");
// while (isNaN(n) || n % 1 !== 0) {
//     alert("Bạn nhập không hợp lệ hãy nhập lại!");
//     n = prompt("Nhâp vào số nguyên n:");
// }
// let sum=1;
// for (let a = 1; a <= n; a++) {
//   sum = sum * a;
// }
// console.log("Giá trị của giai thừa %s là:%s",n,sum);
// VD:Nhập vào 1 chuỗi đến xem bao nhiêu kí tự thường bao nhiêu kí tự in hoa bao nhiêu chữ,bao nhiêu khoảng trắng,bao nhiêu số
// const nhap = prompt("Hãy nhập vào 1 chuỗi kí tự:");
// console.log("Chuỗi đó là %s",nhap);
// let count = nhap.length;
// let lower=0;
// let upper=0;
// let digit=0;
// let space=0;
// console.log("Chuỗi có tất cả %s kí tự ",count);
// for(let i = 0;i< nhap.length;i++){
//   let char = nhap[i];
//   if(char>= "a" && char<="z"){
//     lower++;}
//   else if(char>="A" && char<="Z"){
//     upper++;}
//   else if(char>="0" && char<="9"){
//     digit++;}
//   else if(char === " "){
//     space++;}
// }
// console.log("Chuỗi có tất cả %s kí tự thường",lower);
// console.log("Chuỗi có tất cả %s kí tự in hoa",upper);
// console.log("Chuỗi có tất cả %s chữ số",digit);
// console.log("Chuỗi có tất cả %s khoảng trắng",space);
// VD:Viết chương trình kiểm tra tính hợp lệ của mật khẩu
// * Mật khẩu ít nhất 6 kí tự
// * Chứa ít nhất 1 chữ cái viết hoa
// * Chứa ít nhất 1 chữ cái viết thường
// * Chứa ít nhất 1 chữ số

// function isPasswordValid(password) {
//   if (password.length < 6) return false;
//   let temp1=false,temp2=false,temp3=false;

//   for(let i=0;i<password.length;i++){
//     let char=password[i];
//     if(char>="a" && char<="z")
//       temp1=true;
//     else if(char>="A" && char<="Z")
//       temp2=true;
//     else if(char>="0" && char<="9")
//       temp3=true;
//   }
//   return temp1 && temp2 && temp3;
// }
// function setPassword(){
//   let password=prompt("Nhập mật khẩu bạn muốn thiết lập:");
//   if(isPasswordValid(password))
//     alert("Bạn đã thiết lập mật khẩu thành công!");
//   else{
//     alert(`Mật khẩu không hợp lệ !
//       1.Mật khẩu phải có ít nhất 6 kí tự
//       2.Mật khẩu phải có 1 chữ cái viết hoa
//       3.Mật khẩu phải có ít nhất 1 chữ cái viết thường
//       4.Mật khẩu phải có ít nhất 1 chữ số `);
//       setPassword();
//   }
// }
// let passwordOk=setPassword();
// let countlogin=0;
// while(1){
//   let passwordLogin=prompt("Hãy nhập mật khẩu:");
//   if(passwordOk === passwordLogin)
//   alert("Đăng nhập thành công!");
// else{
//   countlogin++;
//   if(countlogin<5)
//   alert("Đã thử " + countlogin +"/5 lần");
//   if(countlogin === 5){
//     alert("Đã đăng nhập quá số lần.Vui lòng liên hệ admin!");
//     break;
//   }

// }
// }
// vd:Tách chuỗi số và chữ vd 123abc
// chuỗi sau khi tách là "abc","123"
// function separate(inputstring){
//   let char1="";
//   let char2="";
//   for(let i=0;i<inputstring.length;i++){
//     let char=inputstring[i];
//     if(isNaN(char))
//       char1+=char;
//     else
//     char2+=char;
//   }
//   return {char1,char2};
// }
// let inputstring=prompt("Nhập chuỗi:");
// let result=separate(inputstring);
// alert(`Chuỗi ${inputstring} sau khi tách là: ${result.char1} và ${result.char2}`);
// VD:Nhập vào năm sinh và tính tuổi
// function Age(inputYear){
//   let YearofBirth = Number(inputYear);
//   if(!Number.isInteger(YearofBirth)||YearofBirth<=0)
//   {
//     alert("Năm sinh không hợp lệ!");
//     return;
//   }
//   let CurrentYear= new Date().getFullYear();
//   let age = CurrentYear - YearofBirth;
//   alert(`Tuổi của bạn là: ${age}`);
// }
// let inputYear=prompt("Nhập năm sinh của bạn:");
// Age(inputYear);
// VD: Viết chương trình đếm ngược thời gian theo từng giây.Vd thời gian làm bài 45p đếm ngược đến 0 thì thông báo hết thời gian
// function countdown(minutes){
//   alert(` Thời gian làm bài của bạn là ${minutes} phút`);
//   let second=minutes *60;
//   let countdownInterval =setInterval(function(){
//     let minutesLeft = Math.floor(second/60);
//     let secondLeft = second % 60;
//     let temp = secondLeft <10 ? "0" :"";
//     console.log(`${minutesLeft}:${temp}${secondLeft}`);
//     if(second<=0){
//       clearInterval(countdownInterval);
//       alert("Hết thời gian làm bài!");
//     }
//     else
//     second--;
//   },1000);
// }
// let minutes=Number(prompt("Nhập số phút làm bài:"));
// countdown(minutes);
// VD:Cho biết người dùng đã offline bao lâu
// function timeSince(timestamp){
//   let now = new Date();
//   let timeDifference = now-timestamp;
//   let seconds=Math.floor(timeDifference/1000);
//   let minutes=Math.floor(seconds/60);
//   let hours=Math.floor(minutes/60);
//   let days=Math.floor(hours/24);
//   let months=Math.floor(days/30);
//   let years=Math.floor(months/12);
//   if(years>0)
//     return `Đã online ${years} năm trước`;
//   else if(months>0)
//     return `Đã online ${months} tháng trước`
//   else if(days>0)
//     return `Đã online ${days} ngày trước`;
//   else if(hours>0)
//     return `Đã online ${hours} giờ trước`;
//   else if(minutes>0)
//     return `Đã online ${minutes} phút trước`
//   else
//   console.log(`Đã online ${seconds} giây trước`);
//     }

// const timestamp=199999999993;
// console.log(timeSince(timestamp));
//Viết chương trình nhập một mảng gồm n phần tử số nguyên lớn hơn 0
// let M=[];
// let n;
// while(1){
//   n=Number(prompt("Nhập số phần tử của mảng:"));
//   if(!Number.isInteger(n)||n<=0)
//     alert("Không hợp lệ.Số phần tử của mảng phải là số nguyên và lớn hơn 0!");
//   else
//   break;
// }
// for(let i=0;i<n;i++){
//   M[i]=Number(prompt(`Nhập phần tử thứ ${i+1}:`));
// }
// console.log(M);
// 1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím
// 2. Xuất các giá trị trong mảng
// 3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
// 4. Sắp xếp mảng tăng dần
// 5. Tính tổng các phần tử trong mảng
// 6. Cho người dùng nhập 1 số bất kỳ, kiểm tra số đó có tồn tại trong mảng hay không, nếu có xuất ra vị trí index của số đó trong mảng
// let M=[];
// let n;
// while(1){
//   n=Number(prompt(` Nhập vào số phần tử của mảng:`));
//   if(!Number.isInteger(n)||n<=0)
//     alert(` Số phần tử của mảng phải là số nguyên và lớn hơn 0!`);
//   else
//   break;
// }
// function createArray(n){
//   let array=[];
//   for(let i=0;i<n;i++){
// //Thêm từng phần tử random vào cuối mảng 0-99
//     array.push(Math.floor(Math.random() *100));;
//   }
//   return array;
// }
// let randomArray=createArray(n);
// console.log(randomArray);
// //Sao chép mảng ban đầu sang mảng khác rồi đảo ngược
// let reversedArray=randomArray.slice().reverse();
// console.log(reversedArray);
// function sortArray(randomArray){
//   return randomArray.sort((a,b)=>a-b);
// }
// let sortedArray=sortArray([...randomArray])
// console.log(sortedArray);
// function sum(n){
//   let sum=0;
//   for(let i=0;i<n.length;i++){
//     sum+=n[i];
//   }
//   return sum;
// }
// let sumArray=sum(randomArray);
// console.log(` Tổng số phần tử trong mảng là: ${sumArray}`);
// let searchNum=Number(prompt(` Nhập số bạn muốn tìm kiếm:`));
// let inDexArray=[];
// for(let i=0;i<randomArray.length;i++){
//   if(searchNum === randomArray[i])
//     inDexArray.push(i);
// }
// if(inDexArray.length === 0)
//   console.log(` Không có ${searchNum} trong mảng`);
// else
// console.log(inDexArray);
// VD
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   caculateArea() {
//     return 0;
//   }
// }
// Hình vuông
// class Square extends Shape {
//   constructor(name, side) {
//     super(name);
//     this.side = side;
//   }
//   caculateArea() {
//     return this.side * this.side;
//   }
// }
// Hình chữ nhật
// class Rectangle extends Shape {
//   constructor(name, height, width) {
//     super(name);
//     this.height = height;
//     this.width = width;
//   }
//   caculateArea() {
//     return this.height * this.width;
//   }
// }
// const sq1 = new Square("Hình vuông", "10");
// const rec1 = new Rectangle("Hình chữ nhật", "4", "6");

// console.log(sq1);
// console.log(sq1.caculateArea());

// console.log(rec1);
// console.log(rec1.caculateArea());
// VD:Mô phỏng thẻ ngân hàng
// class Wallet {
//   #Pin;
//   #balance;
//   constructor(bankName, Pin) {
//     this.bankName = bankName;
//     this.#Pin = Pin;
//     this.#balance = 0;
//   }
//   #Enterpin = false;
//   deposit(value) {
//     if (!this.#Enterpin) {
//       console.log("Mã pin không đúng!");
//       return;
//     }
//     this.#balance += value;
//   }
//   #validatePin(pin) {
//     return this.#Pin === pin;
//   }
//   enterPin(pin) {
//     if (this.#validatePin(pin)) {
//       this.#Enterpin = true;
//     } else {
//       console.log("Invalid Pin!");
//     }
//   }
//   withDraw(value) {
//     if (!this.#Enterpin) {
//       console.log("Mã pin không đúng!");
//       return;
//     }
//     if (this.#balance < value) {
//       console.log("Số dư không đủ!");
//     } else {
//       this.#balance -= value;
//       console.log("Rút tiền thành công");
//     }
//   }
//   get check() {
//     if (!this.#Enterpin) {
//       console.log("Mã pin không đúng!");
//       return;
//     }
//     return this.#balance;
//   }
// }
// //Tạo đối tượng
// const wallet = new Wallet("MBBANK", "1234");
// //Nhập mã pin
// wallet.enterPin("1234");
// //Nạp tiền
// wallet.deposit(1000);
// //Rút tiền
// wallet.withDraw(1000);
// //Xem số dư
// console.log(wallet.check);

// //*Bài tập click
// const button = document.querySelector(".button");
// const modal = document.querySelector(".modal");
// const close = document.querySelector(".fa-times");
// const modalContent = document.querySelector("modal-content");
// const body = document.body;
// body.addEventListener("click", (e) => {
//   if (e.target.matches(".button")) modal.style.display = "flex";
//   else if (e.target.matches(".modal-close")) {
//     modal.style.display = "none";
//   } else if (e.target.matches(".modal")) {
//     modal.style.display = "none";
//   }
// });
person = {
  name: "tu",
  age: 18,
};
function say(str1, str2) {
  console.log(str1, str2, `${this.name}`);
}
say.call(person,"hi", "hello");
const arr=[1,2,3];
const arr1=[5,3,4];
arr.push(arr1)
console.log(arr);
