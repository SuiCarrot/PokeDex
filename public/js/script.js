const closeMessage = document.querySelector(".close");
const message = document.querySelector(".mensagem");

<<<<<<< HEAD
closeMessage.addEventListener("click", function () {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
  location.reload();
}, 3000);
=======
closeMessage.addEventListener("click", () => {
    message.style.display = "none";
});

setTimeout(() => {
    message.style.display = "none !important";
    location.reload();
}, 5000);
>>>>>>> 672fb037465b44b2d2efe3aa15a775b89e9c3adf
