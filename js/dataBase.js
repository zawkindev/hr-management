let employees = fetchFromLocalStorage()




function generateUniqueId() {
  const randomString = Math.random(); // Random string (excluding "0." at the beginning)

  return randomString;
}

function replaceEmployee(employeesArray, idToReplace, newEmployee) {
  const indexToReplace = employeesArray.findIndex(employee => employee.id.toString() === idToReplace.toString());

  if (indexToReplace !== -1) {
    employeesArray[indexToReplace] = newEmployee;
  }
}
function addNewEmployee(employeesArray, newEmployee) {
  employeesArray.push(newEmployee);
}

function deleteEmployee(employeeID) {

  // localStorage.clear()
  const indexToDelete = employees.findIndex(employee => employee.id.toString() === employeeID.toString());
  if (indexToDelete !== -1) {
    employees.splice(indexToDelete, 1);
    console.log(`Employee with ID ${employeeID} deleted`);
  } else {
    console.log(`Employee with ID ${employeeID} not found`);
  }
  document.querySelector("table").remove()
  renderTag.appendChild(createTableElement(employees))
  saveToLocalStorage(employees)
}


function findEmployeeById(employeesArray, targetId) {
  return employeesArray.find(employee => employee.id.toString() === targetId.toString());
}

function updateFormWithEmployeeData(employee) {
  if (employee) {
    // Assuming there are input and radio elements in your form with specific ids
    document.getElementById('name').value = employee.name;
    document.getElementById('age').value = employee.age;
    document.getElementById('department').value = employee.department;
    document.getElementById('position').value = employee.position;
    document.getElementById(employee.gender).checked = true;
    document.getElementById('birthday').value = employee.birthday;
  }
}

function filter(employees, field) {
  const newData = new Set([]);
  employees.forEach(el => {
    newData.add(el[field])
  })
  return Array.from(newData);
}

// function filter

function getAllUsersNumber(employees) {
  return employees.length
}

function groupEmployeesByDepartment(employees) {
  const groupedByDepartment = {};

  employees.forEach((employee) => {
    const { department } = employee;

    if (!groupedByDepartment[department]) {
      groupedByDepartment[department] = [];
    }

    groupedByDepartment[department].push(employee);
  });

  return groupedByDepartment;
}

function sortEmployeesAlphabetically(employees) {
  // Use the sort method to sort employees alphabetically by their names
  if (employees) {
    employees.sort((a, b) => a.department.localeCompare(b.department));
  }

  return employees;
}

function getNumberOfEmployeesInDepartments(employees) {
  const array = []
  Object.values(groupEmployeesByDepartment(employees)).forEach(el => {
    array.push(Object.keys(el).length)
  })
  return array
}




function getAverageAgeByDepartment(employees) {
  // Create a map to store the total age and count of employees in each department
  const departmentMap = new Map();

  // Iterate through the employees array and calculate the total age and count for each department
  employees.forEach(employee => {
    const { age, department } = employee;

    if (!departmentMap.has(department)) {
      departmentMap.set(department, { totalAge: 0, count: 0 });
    }

    const departmentInfo = departmentMap.get(department);
    departmentInfo.totalAge += age;
    departmentInfo.count += 1;
  });

  // Calculate the average age for each department
  const averages = Array.from(departmentMap.entries()).map(([department, info]) => {
    return {
      department,
      averageAge: Math.round(info.totalAge / info.count),
    };
  });

  // Sort the averages array alphabetically by department
  averages.sort((a, b) => a.department.localeCompare(b.department));

  // Extract the averageAge values into a new array
  const result = averages.map(item => item.averageAge);

  return result;
}


function countGenders(employees) {
  let males = 0;
  let females = 0;

  for (const employee of employees) {
    if (employee.gender === "Male") {
      males++;
    } else if (employee.gender === "Female") {
      females++;
    }
  }

  return [females, males];
}







function saveToLocalStorage(data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem("hr-management", serializedData);
    employees = fetchFromLocalStorage()
    console.log(`Data saved to local storage`);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}

// Function to fetch data from local storage
function fetchFromLocalStorage() {
  try {
    const serializedData = localStorage.getItem("hr-management");
    if (serializedData === null) {
      console.log(`No data found in local storage`);
      return [
        {
          id: 1,
          name: "John Doe",
          age: 30,
          department: "IT",
          position: "Software Engineer",
          gender: "Male",
          birthday: "1992-05-15"
        },
        {
          id: 2,
          name: "Jane Smith",
          age: 28,
          department: "Marketing",
          position: "Marketing Specialist",
          gender: "Female",
          birthday: "1994-09-22"
        },
        {
          id: 3,
          name: "Bob Johnson",
          age: 35,
          department: "Finance",
          position: "Financial Analyst",
          gender: "Male",
          birthday: "1987-11-10"
        },
        {
          id: 4,
          name: "Alice Thompson",
          age: 25,
          department: "HR",
          position: "HR Coordinator",
          gender: "Female",
          birthday: "1996-03-28"
        },
        {
          id: 5,
          name: "Chris Miller",
          age: 32,
          department: "IT",
          position: "Systems Engineer",
          gender: "Male",
          birthday: "1989-08-03"
        },
      ];
    }
    const data = JSON.parse(serializedData);
    console.log(`Data fetched from local storage`);
    return data;
  } catch (error) {
    console.error("Error fetching data from local storage:", error);
    return null;
  }
}


