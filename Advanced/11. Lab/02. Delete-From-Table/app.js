function deleteByEmail() {
  const table = document
    .getElementById("customers")
    .children[1].getElementsByTagName("tr");

  const delEmail = document.getElementsByTagName("input")[0];
  const result = document.getElementById("result");

  for (const item of table) {
    const email = item.children[1];

    if (email.textContent === delEmail.value) {
      item.remove();
      result.textContent = "Deleted.";
      return;
    }
  }
  result.textContent = "Not found.";
}
