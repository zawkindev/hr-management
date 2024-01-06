const renderTag = document.querySelector("#render")

function clearRender() {
  renderTag.innerHTML = ``
}

function renderTable(employees) {
  mark(document.querySelector("#table"))
  clearRender()
  const tableElement = createTableElement(employees)
  renderTag.appendChild(tableElement)
}

function renderForm() {
  mark(document.querySelector("#addEmployee"))
  clearRender()
  const uniqueID = generateUniqueId()
  const formElement = createFormElement(uniqueID)
  renderTag.appendChild(formElement)
  const submitButton = document.querySelector("input[type='submit']")
  submitButton.addEventListener("click", (e) => {
    submitForm(e)
  })
  clearInputs()
}

function renderEditForm(employeeID) {
  const employee = findEmployeeById(employees, employeeID)
  mark(document.querySelector("#editForm"))
  clearRender()
  const formElement = createFormElement(employeeID)
  const tableElement = createTableElement([employee])
  renderTag.appendChild(formElement)
  updateFormWithEmployeeData(employee)
  renderTag.appendChild(tableElement)
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

