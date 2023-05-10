function solve(...params) {
  const [year, month, date] = params;
  const today = new Date(year, month - 1, date);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(
    `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`
  );
}

solve(2016, 9, 30);
