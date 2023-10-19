wakandaMouse = document.getElementById("wakandaMouse");
document.onmousemove = wakandaCursorFollow;

function wakandaCursorFollow(evenement) {
  var x = evenement.pageX;
  var y = evenement.pageY;
  wakandaMouse.style.left = x + 20 + "px";
  wakandaMouse.style.top = y + 15 + "px";

  wakandaMouse.style.transition = "all 0.2s ease";
}
