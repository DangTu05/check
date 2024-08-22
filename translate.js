const translate = document.querySelector("#translate");
const Vi = document.querySelector("#Vi");
translate.addEventListener("click", (e) => {
  const translate = require("google-translate-api");

  translate("Ik spreek Engels", { to: "en" })
    .then((res) => {
      console.log(res.text);
      //=> I speak English
      console.log(res.from.language.iso);
      //=> nl
    })
    .catch((err) => {
      console.error(err);
    });
});
