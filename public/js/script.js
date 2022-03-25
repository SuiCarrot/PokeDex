const { format } = require("express/lib/response");

const closeMessage = document.querySelector("#close");
/* const message = document.querySelector("#message"); */
const message = document.getElementById("message");

closeMessage.addEventListener("click", function () {
  /*     message.style.display = "none"; */
  document.getElementById("message").style.display = "none";
});

setTimeout(() => {
  /*     message.style.display = "none"; */
  document.getElementById("message").style.display = "none";
}, 3000);

