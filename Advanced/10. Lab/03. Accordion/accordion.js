function toggle() {
  const button = document.getElementsByClassName("button")[0];
  const div = document.getElementById("extra");

  if (button.textContent === "More") {
    div.style.display = "block";
    button.textContent = "Less";
  } else {
    div.style.display = "none";
    button.textContent = "More";
  }
}
