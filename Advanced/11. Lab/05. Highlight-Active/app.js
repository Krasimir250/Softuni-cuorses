function focused() {
  const divs = document.querySelectorAll("div")[0];

  divs.forEach((div) => {
    console.log(div);
    const inputs = div.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        div.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        div.classList.remove("focused");
      });
    });
  });
}
