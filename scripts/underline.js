const homeLink = document.querySelector(".home-link");
const wakandaLink = document.querySelector(".wakanda-link");
const enigmeLink = document.querySelector(".enigme-link");

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname; // Récupère le chemin de l'URL de la page en cours
  console.log(currentPage);

  // Vérifiez le nom du fichier de la page actuelle et soulignez le lien correspondant
  if (currentPage.includes("index.html")) {
    homeLink.classList.add("underline"); // Ajoute une classe pour souligner le lien
  } else if (currentPage.includes("wakanda.html")) {
    wakandaLink.classList.add("underline"); // Ajoute une classe pour souligner le lien
  } else if (currentPage.includes("enigme.html")) {
    enigmeLink.classList.add("underline"); // Ajoute une classe pour souligner le lien
  }
});
