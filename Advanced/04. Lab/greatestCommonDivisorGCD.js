function greatestCommonDivisorGCD(a, b) {
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b == 0) {
      console.log(a);
      break;
    }
    a %= b;
    if (a == 0) {
      console.log(b);
      break;
    }
    b %= a;
  }
}

greatestCommonDivisorGCD(2154, 458);
