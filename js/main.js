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

function renderTable(employees) {
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
    submitButton.addEventListener("click",(e)=>{
        submitForm(e)
    })
}

function renderEditForm(employeeID) {
    const employee = findEmployeeById(employees, employeeID)
    mark(document.querySelector("#editForm"))
    clearRender()
    const formElement = createFormElement(employeeID)
    const tableElement = createTableElement([employee])
    renderHere.appendChild(formElement)
    updateFormWithEmployeeData(employee)
    renderHere.appendChild(tableElement)
    const submitButton = document.querySelector("input[type='submit']")
    submitButton.addEventListener("click",(e)=>{
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
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36
    const randomString = Math.random().toString(36).substr(2, 5); // Random string (excluding "0." at the beginning)

    return `${timestamp}-${randomString}`;
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