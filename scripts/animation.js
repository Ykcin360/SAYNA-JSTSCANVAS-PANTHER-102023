const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("to-right");
      entry.target.classList.add("to-left");
      entry.target.classList.add("zoom");
    } else {
      // entry.target.classList.remove("show");
      // entry.target.classList.remove("to-right");
      // entry.target.classList.remove("zoom");
      entry.target.classList.remove("to-left");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const fromLeftElements = document.querySelectorAll(".from-left");
const fromRightElements = document.querySelectorAll(".from-right");
const zoomInElements = document.querySelectorAll(".zoom-in");

hiddenElements.forEach((element) => observer.observe(element));
fromLeftElements.forEach((element) => observer.observe(element));
fromRightElements.forEach((element) => observer.observe(element));
zoomInElements.forEach((element) => observer.observe(element));

document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelector(".lines");
  lines.classList.add("show-lines"); // Ajoute la classe "show" pour afficher les lignes
});
