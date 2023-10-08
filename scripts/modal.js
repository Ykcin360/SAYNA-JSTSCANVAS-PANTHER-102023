const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-btn");
const cardContactButton = document.querySelector(".card-contact-btn");

cardContactButton.addEventListener("click", function () {
  modal.style.display = "block";
});

modalButton.addEventListener("click", function () {
  modal.style.display = "none";
});
