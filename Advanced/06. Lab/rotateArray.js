function rotateArray(arr, num) {
  if (num > arr.length) {
    num = num % arr.length;
  }
  console.log(arr.slice(-num).concat(arr.slice(0, -num)).join(" "));
}

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
