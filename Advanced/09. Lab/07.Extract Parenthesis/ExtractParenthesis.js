function extract(content) {
  const p = document.getElementById(content);

  const regex = /\((.*?)\)/g;
  const matches = [];

  if (p) {
    const text = p.textContent;
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
  }

  return matches.join("; ");
}
