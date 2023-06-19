function addItem() {
  const items = document.getElementById("items");
  const input = document.getElementById("newItemText");

  // Add item
  if (input.value.trim() === "") return;

  items.innerHTML += `
    <li>${input.value}
    <a href="#">[Delete]</a>
    </li>
    
  `;

  input.value = "";

  //  Delete item
  const delButs = document.getElementsByTagName("a");

  for (const a of delButs) {
    a.addEventListener("click", function del() {
      const thisLi = a.parentElement;
      thisLi.remove();
    });
  }
}
