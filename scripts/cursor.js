batMouse = document.getElementById("wakandaMouse");
document.onmousemove = batCursorFollow;

function batCursorFollow(evenement) {
  var x = evenement.pageX;
  var y = evenement.pageY;
  batMouse.style.left = x + 20 + "px";
  batMouse.style.top = y + 15 + "px";

  batMouse.style.transition = "all 0.2s ease";
}
