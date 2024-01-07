function createFormElement(employeeID) {
  const form = document.createElement("form")
  form.setAttribute("class", "flex flex-col justify-center items-center gap-10 border border-gray-300 p-10 w-fit rounded-xl")
  form.setAttribute("id", employeeID)
  // language=HTML
  form.innerHTML = `
        <div class="grid grid-cols-2 gap-10 box-border w-fit">
            <div class="flex flex-col justify-between">
                <label class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                       for="name">
                    Your Full Name
                </label>
                <div class="h-11 w-full min-w-[200px]">
                    <input class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                           id="name"
                           maxlength="30"
                           placeholder="John" required type="text">
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <label class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                       for="age">
                    Age
                </label>
                <div class="h-11 w-full min-w-[200px]">
                    <input class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                           id="age" inputmode="numeric" max="60" min="14" placeholder="22"
                           required
                           step="1" type="number">
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <label class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                       for="department">
                    Department
                </label>
                <div class="h-11 w-full min-w-[200px]">
                    <select class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                            id="department"
                            required>
                        <option value="Accounting">Accounting</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="SMM">SMM</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>

            </div>
            <div class="flex flex-col gap-3">
                <label class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                       for="position">
                    Position
                </label>
                <div class="h-11 w-full min-w-[200px]">
                    <input class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                           id="position"
                           maxlength="30"
                           placeholder="Position" required type="text">
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <h6 class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Gender
                </h6>
                <div class="h-11 w-full min-w-[200px]">
                    <div class="flex gap-10">
                        <div class="inline-flex items-center">
                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" for="male">
                                <input class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="Male"
                                       name="type"
                                       type="radio"/>
                                <span
                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" data-name="ellipse" r="8"></circle>
                    </svg>
                  </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" for="male">
                                Male
                            </label>
                        </div>
                        <div class="inline-flex items-center">
                            <label class="relative flex items-center p-3 rounded-full cursor-pointer" for="female">
                                <input class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="Female" name="type"
                                       required
                                       type="radio"/>
                                <span
                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" data-name="ellipse" r="8"></circle>
                    </svg>
                  </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" for="female">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <label class="block antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
                       for="birthday">
                    Birthday
                </label>
                <div class="h-11 w-full min-w-[200px]">
                    <input class="bg-transparent border outline outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-950 focus:outline-2 block w-full p-2.5"
                           id="birthday" max="2009-01-01" min="1963-01-01"
                           placeholder="22"
                           required type="date">
                </div>
            </div>
        </div>
        <div class="w-36 self-center justify-center items-center flex">
            <input 
                   class="btn bg-slate-950 border w-full border-slate-950 transition-all duration-200 font-bold text-sky-50 p-4 rounded-lg active:text-slate-950 active:bg-sky-50"
                   role="button" type="submit" value="Submit"/>

        </div>
    `


  return form
}

function submitForm(e) {
  // Retrieve values
  e.preventDefault()
  const id = document.querySelector('form').id
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const department = document.getElementById('department').value;
  const position = document.getElementById('position').value;
  const birthday = document.getElementById('birthday').value;

  // Retrieve gender
  const genderElements = document.querySelectorAll("input[type='radio']");
  let gender;
  for (const element of genderElements) {
    if (element.checked) {
      gender = element.id;
      break;
    }
  }
  const employeeObject = {
    id: id,
    name: name,
    age: age,
    gender: gender,
    department: department,
    position: position,
    birthday: birthday
  }

  if (findEmployeeById(employees, id)) {
    replaceEmployee(employees, id, employeeObject)
    const renderHere = document.querySelector("#render")
    renderHere.querySelector("table").remove()
    renderHere.appendChild(createTableElement([employeeObject]))
    saveToLocalStorage(employees)
  } else {
    addNewEmployee(employees, employeeObject)
    const renderHere = document.querySelector("#render")
    try {
      renderHere.querySelector("table").remove()
    } catch (e) {
      // console.log(e)
    }
    renderHere.appendChild(createTableElement([employeeObject]))
    saveToLocalStorage(employees)
    clearInputs()
  }
}

function clearInputs() {
  const inputElements = document.querySelectorAll('input, select');

  inputElements.forEach(input => {
    if (input.type === 'text' || input.type === 'number' || input.type === 'date' || input.type === 'select-one') {
      input.value = '';
    } else if (input.type === 'radio' || input.type === 'checkbox') {
      input.checked = false;
    }
  });
}
