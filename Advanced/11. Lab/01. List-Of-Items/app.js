function addItem() {
  const table = document.getElementById("items");
  const input = document.getElementById("newItemText");

  if (input.value.trim() === "") return;

  table.innerHTML += `
    <li>${input.value}</li>
  `;

  input.value = "";
}
