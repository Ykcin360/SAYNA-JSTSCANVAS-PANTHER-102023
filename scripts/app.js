const modal = document.querySelector(".modal");
const cardContactButton = document.querySelector(".card-contact-btn");
const modalButton = document.querySelector(".modal-btn");
// Sélectionnez les liens du menu
const homeLink = document.querySelector(".home-link");
const wakandaLink = document.querySelector(".wakanda-link");
const enigmeLink = document.querySelector(".enigme-link");

cardContactButton.addEventListener("click", function () {
  modal.style.display = "block";
});

modalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname; // Récupère le chemin de l'URL de la page en cours

  // Vérifiez le nom du fichier de la page actuelle et soulignez le lien correspondant
  if (currentPage.includes("index.html")) {
    homeLink.classList.add("underline"); // Ajoute une classe pour souligner le lien
  } else if (currentPage.includes("wakanda.html")) {
    wakandaLink.classList.add("underline"); // Ajoute une classe pour souligner le lien
  } else if (currentPage.includes("enigme.html")) {
    enigmeLink.classList.add("underline"); // Ajoute une classe pour souligner le lien
  }
});
