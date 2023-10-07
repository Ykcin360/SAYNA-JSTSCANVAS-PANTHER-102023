const modal = document.querySelector(".modal");
const cardContactButton = document.querySelector(".card-contact-btn");
const modalButton = document.querySelector(".modal-btn");
// Sélectionnez les liens du menu
cardContactButton.addEventListener("click", function () {
  modal.style.display = "block";
});

modalButton.addEventListener("click", function () {
  modal.style.display = "none";
});
