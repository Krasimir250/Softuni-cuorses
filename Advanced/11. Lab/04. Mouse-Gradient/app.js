function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const result = document.getElementById("result");

  gradient.addEventListener("mousemove", function (event) {
    const progress = Math.floor((event.pageX / this.offsetWidth) * 100);

    result.innerHTML = progress + "%";
  });
}
