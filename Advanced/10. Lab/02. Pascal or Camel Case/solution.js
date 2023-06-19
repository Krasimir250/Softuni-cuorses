function solve() {
  const input = document.getElementById("text").value;
  const curCase = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  function toCamelCase(str) {
    let newStr = str.split(" ");

    for (const element of newStr) {
      element.toLowerCase();
      element[0].toUpperCase();
    }
    newStr[0].toLowerCase();
    return newStr.join("");
  }

  function toPascalCase(str) {
    return (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");
  }

  switch (curCase) {
    case "Camel Case":
      result.textContent = toCamelCase(input);
      break;

    case "Pascal Case":
      result.textContent = toPascalCase(input);
      break;

    default:
      result.textContent = "Error!";
      break;
  }
}
