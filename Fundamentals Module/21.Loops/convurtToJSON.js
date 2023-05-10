function solve(arg1, arg2, arg3) {
  let persons = {
    name: arg1,
    lastName: arg2,
    hairColor: arg3,
  };
  console.log(JSON.stringify(persons));
}

solve("George", "Jones", "Brown");
