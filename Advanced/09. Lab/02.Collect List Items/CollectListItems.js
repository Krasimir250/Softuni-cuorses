function extractText() {
  const listItems = document.querySelectorAll("ul li");
  const textarea = document.querySelector("#result");

  if (listItems) {
    textarea.value = "";

    for (const item of listItems) {
      const text = item.textContent;
      textarea.value += text + "\n";
    }
  }
}
