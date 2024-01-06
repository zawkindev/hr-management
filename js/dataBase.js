const employees = fetchFromLocalStorage() || [
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
]



function saveToLocalStorage(data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem("hr-management", serializedData);
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
      return null;
    }

    const data = JSON.parse(serializedData);
    console.log(`Data fetched from local storage`);
    return data;
  } catch (error) {
    console.error("Error fetching data from local storage:", error);
    return null;
  }
}




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


