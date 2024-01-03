const employees = [
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

const renderHere = document.querySelector("#render")

function clearRender() {
    renderHere.innerHTML = ``
}

function renderTable(employees, e) {
    mark(document.querySelector("#table"))
    clearRender()
    const tableElement = createTableElement(employees)
    renderHere.appendChild(tableElement)
}

function renderForm() {
    mark(document.querySelector("#employee"))
    clearRender()
    const formElement = createFormElement()
    renderHere.appendChild(formElement)
}

function renderEditForm(employees) {
    mark(document.querySelector("#editForm"))
    clearRender()
    const formElement = createFormElement()
    const tableElement = createTableElement(employees)
    renderHere.appendChild(formElement)
    renderHere.appendChild(tableElement)
}

function mark(button) {
    const dashboardOptions = document.querySelectorAll(".dashboard button")
    dashboardOptions.forEach(el => {
        el.classList.remove("bg-slate-950", "text-sky-50")
        button.classList.add("bg-slate-950", "text-sky-50")
    })
}
