let renderTag = document.querySelector("#render")

function clearRender() {
  renderTag.innerHTML = ``
}

function renderGraphs() {
  mark(document.querySelector("#home"))
  clearRender()
  const div = document.createElement("div")
  div.setAttribute("id", "graphs")
  div.setAttribute("class", "flex flex-row flex-wrap w-full h-full gap-10")
  if (Object.keys(employees).length === 0) {
    div.innerHTML = `<h1 class="text-6xl">DataBase is empty</h2>`
    div.classList.add("justify-center", "items-center")
    renderTag.appendChild(div)
  } else {
    renderTag.appendChild(div)
    generateNumberOfEmployeesGraph(div)
    generateNumberOfGenders(div)
    genereateAverageAges(div)
  }
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
  renderTag = document.querySelector("#edit-form")
  clearRender()
  renderTag.innerHTML = ``
  const formElement = createFormElement(employeeID)
  const tableElement = createTableElement([employee])
  renderTag.appendChild(formElement)
  updateFormWithEmployeeData(employee)
  renderTag.appendChild(tableElement)
  const submitButton = document.querySelector("input[type='submit']")
  submitButton.addEventListener("click", (e) => {
    submitForm(e)
    renderTable(employees)
    closeModal("edit-modal")
  })
}

function mark(button) {
  const dashboardOptions = document.querySelectorAll(".dashboard button")
  dashboardOptions.forEach(el => {
    el.classList.remove("bg-slate-950", "text-sky-50")
    button.classList.add("bg-slate-950", "text-sky-50")
  })
}


window.onbeforeload = renderGraphs()
