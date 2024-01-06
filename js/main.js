const renderHere = document.querySelector("#render")
const graphsArea = document.querySelector("#graphs")

function clearRender() {
  renderHere.innerHTML = ``
  graphsArea.innerHTML = ``
  renderHere.classList.remove("hidden")
  graphsArea.classList.add("hidden")
}

function renderGraphs() {
  mark(document.querySelector("#home"))
  clearRender()
  graphsArea.classList.remove("hidden")
  renderHere.classList.add("hidden")
  generateNumberOfEmployeesGraph(graphsArea)
  generateNumberOfGenders(graphsArea)
  genereateAverageAges(graphsArea)
}
function renderTable(employees) {
  if (employees)
    mark(document.querySelector("#table"))
  clearRender()
  const tableElement = createTableElement(employees)
  renderHere.appendChild(tableElement)
}

function renderForm() {
  mark(document.querySelector("#addEmployee"))
  clearRender()
  const uniqueID = generateUniqueId()
  const formElement = createFormElement(uniqueID)
  renderHere.appendChild(formElement)
  const submitButton = document.querySelector("input[type='submit']")
  submitButton.addEventListener("click", (e) => {
    submitForm(e)
  })
  clearInputs()
}

function renderEditForm(employeeID) {
  const employee = findEmployeeById(employees(), employeeID)
  mark(document.querySelector("#editForm"))
  clearRender()
  const formElement = createFormElement(employeeID)
  const tableElement = createTableElement([employee])
  renderHere.appendChild(formElement)
  updateFormWithEmployeeData(employee)
  renderHere.appendChild(tableElement)
  const submitButton = document.querySelector("input[type='submit']")
  submitButton.addEventListener("click", (e) => {
    submitForm(e)
  })
}

function mark(button) {
  const dashboardOptions = document.querySelectorAll(".dashboard button")
  dashboardOptions.forEach(el => {
    el.classList.remove("bg-slate-950", "text-sky-50")
    button.classList.add("bg-slate-950", "text-sky-50")
  })
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

    // Assuming there is an input element for birthday with id 'birthday'
    document.getElementById('birthday').value = employee.birthday;
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
  renderHere.appendChild(createTableElement(employees))
  saveToLocalStorage(employees)

}




// const visited = window.localStorage.getItem('visited') !== null;
// if (!visited) {
//
// }

window.localStorage.setItem('visited', true);

function beforeLoad() {
  document.querySelector("#home").click()

}

window.onbeforeload = beforeLoad()








