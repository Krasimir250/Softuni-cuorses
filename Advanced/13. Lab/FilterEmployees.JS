function filterEmployees(data, criteria) {
  const employees = JSON.parse(data);

  if (criteria === "all") {
    employees.forEach((employee, index) => {
      const employeeInfo = `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`;
      console.log(employeeInfo);
    });
  } else {
    const [key, value] = criteria.split("-");
    const filteredEmployees = employees.filter(
      (employee) => employee[key] === value
    );

    filteredEmployees.forEach((employee, index) => {
      const employeeInfo = `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`;
      console.log(employeeInfo);
    });
  }
}

// Example usage:
const employeesData = `[
  {
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  },
  {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },
  {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }
]`;

const criteria = "gender-Female";
filterEmployees(employeesData, criteria);
