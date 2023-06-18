function editElement(ref, a, b) {
  while (ref.textContent.includes(a)) {
    ref.textContent = ref.textContent.replace(a, b);
  }
}
